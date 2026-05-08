import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, FileText, RotateCcw, ScanLine, Upload, AlertCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type Phase = "idle" | "uploading" | "scanning" | "extracting" | "validated";

interface Profile {
  name: string;
  nationality: string;
  rank: string;
  expiry: string;
  status: string;
  isWarning?: boolean;
  message: string;
}

const PROFILES: Profile[] = [
  {
    name: "Carlos J. Martinez",
    nationality: "Philippines",
    rank: "Chief Engineer",
    expiry: "14 Nov 2026",
    status: "✅ Compliant",
    message: "Document parsed successfully — all STCW endorsements verified"
  },
  {
    name: "Andrei Popescu",
    nationality: "Romania",
    rank: "Second Engineer",
    expiry: "14 Dec 2025",
    status: "⚠️ Expiry in 14 days",
    isWarning: true,
    message: "⚠️ STCW CoC expiring in 14 days — recommend immediate renewal"
  }
];

const STATUS_TEXT: Record<Phase, string> = {
  idle: "Awaiting document...",
  uploading: "Uploading…",
  scanning: "OCR scanning…",
  extracting: "Parsing document...",
  validated: "Cross-checked against STCW registry",
};

const DocumentParseDemo = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [progress, setProgress] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const [profileIndex, setProfileIndex] = useState(0);
  const reduce = useReducedMotion();
  const timeouts = useRef<number[]>([]);

  const currentProfile = PROFILES[profileIndex % PROFILES.length];

  const clearTimers = () => {
    timeouts.current.forEach((t) => window.clearTimeout(t));
    timeouts.current = [];
  };

  const start = () => {
    if (phase !== "idle") return;
    trackEvent("cv_parser_demo_started");
    clearTimers();
    setProgress(0);
    setRevealed(0);

    if (reduce) {
      setPhase("validated");
      setProgress(100);
      setRevealed(5);
      return;
    }

    setPhase("uploading");
    timeouts.current.push(window.setTimeout(() => setPhase("scanning"), 400));
    timeouts.current.push(window.setTimeout(() => setPhase("extracting"), 1100));

    // Progress tween
    const total = 2000;
    const startT = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startT) / total, 1);
      setProgress(Math.round(p * 100));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    // Reveal fields staggered
    for (let i = 0; i < 5; i++) {
      timeouts.current.push(window.setTimeout(() => setRevealed(i + 1), 700 + i * 200));
    }

    timeouts.current.push(window.setTimeout(() => {
      setPhase("validated");
      trackEvent("cv_parser_demo_completed", {
        profile_shown: currentProfile.isWarning ? "expiring" : "compliant"
      });
    }, 2200));
  };

  const runAgain = () => {
    trackEvent("cv_parser_demo_restarted");
    clearTimers();
    setPhase("idle");
    setProgress(0);
    setRevealed(0);
    setProfileIndex(prev => prev + 1);
    // Restart after short delay
    timeouts.current.push(window.setTimeout(start, 500));
  };

  const reset = () => {
    clearTimers();
    setPhase("idle");
    setProgress(0);
    setRevealed(0);
  };

  useEffect(() => {
    // Initial auto-start
    const timer = window.setTimeout(start, 1500);
    return () => {
      window.clearTimeout(timer);
      clearTimers();
    };
  }, []);

  const isDone = phase === "validated";
  const isActive = phase !== "idle";

  const fields = [
    { label: "Name", value: currentProfile.name },
    { label: "Nationality", value: currentProfile.nationality },
    { label: "Rank", value: currentProfile.rank },
    { label: "STCW Expiry", value: currentProfile.expiry },
    { label: "Status", value: currentProfile.status, isStatus: true },
  ];

  return (
    <div
      className="group relative h-full"
      role="button"
      tabIndex={0}
      onClick={phase === "idle" ? start : undefined}
      aria-label="Run document parsing demo"
    >
      {/* Live Demo Pill */}
      <div className="absolute -top-3 left-6 z-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary shadow-lg shadow-primary/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          PLATFORM PREVIEW — CONCEPT DEMO
        </div>
      </div>

      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          boxShadow: isDone
            ? currentProfile.isWarning 
              ? "0 0 0 1px hsl(var(--warning) / 0.5), 0 0 20px hsl(var(--warning) / 0.1)"
              : "0 0 0 1px hsl(var(--success) / 0.5), var(--glow-emerald)"
            : isActive
            ? "0 0 0 1px hsl(var(--secondary) / 0.5), var(--glow-lavender)"
            : "0 0 0 1px hsl(var(--glass-border))",
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative flex h-full flex-col p-6 md:p-7">
        {/* Header */}
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold leading-tight md:text-2xl">
              Intelligent Certificate Parsing
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Our agent extracts seafarer data and validates STCW endorsements in seconds.
            </p>
          </div>
          {isDone && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                runAgain();
              }}
              className="flex shrink-0 items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary/10 hover:border-primary/40"
            >
              <RotateCcw className="h-3 w-3" /> Simulate Another
            </button>
          )}
        </div>

        {/* Document area */}
        <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10 bg-background/40">
          <AnimatePresence mode="wait">
            {phase === "idle" ? (
              <motion.div
                key="dropzone"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center gap-2 py-10 text-center transition-colors group-hover:bg-white/[0.02]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary/15 text-secondary">
                  <Upload className="h-5 w-5" />
                </div>
                <div className="text-sm font-medium text-foreground">Drag Seafarer Passport PDF Here</div>
                <div className="text-xs text-muted-foreground italic">System online and listening</div>
              </motion.div>
            ) : (
              <motion.div
                key="document"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-32 overflow-hidden"
              >
                {/* Mock document lines */}
                <div className="space-y-2 p-5">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-secondary" />
                    <div className="text-xs font-medium text-muted-foreground">passport_seafarer_{currentProfile.name.split(' ').pop()}.pdf</div>
                  </div>
                  {[80, 60, 70, 45].map((w, i) => (
                    <div key={i} className="h-1.5 rounded-full bg-white/10" style={{ width: `${w}%` }} />
                  ))}
                </div>

                {/* Scanline */}
                {!isDone && !reduce && (
                  <motion.div
                    className="absolute inset-x-0 h-12 pointer-events-none"
                    initial={{ y: -48 }}
                    animate={{ y: 128 }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="h-full w-full" style={{
                      background: "linear-gradient(to bottom, transparent, hsl(187 100% 50% / 0.1) 50%, hsl(187 100% 50% / 0.3) 80%, transparent)",
                    }} />
                    <div className="h-px w-full bg-primary" style={{ boxShadow: "0 0 12px hsl(187 100% 50% / 0.8)" }} />
                  </motion.div>
                )}

                {/* Status flash */}
                {isDone && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ background: currentProfile.isWarning ? "hsl(var(--warning) / 0.25)" : "hsl(var(--success) / 0.25)" }}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Status + progress */}
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              {isDone ? (
                currentProfile.isWarning ? (
                  <AlertCircle className="h-3.5 w-3.5 text-warning" />
                ) : (
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                )
              ) : (
                <div className="relative flex h-2 w-2 mr-1">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isActive ? "bg-primary" : "bg-slate-500"} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${isActive ? "bg-primary" : "bg-slate-500"}`}></span>
                </div>
              )}
              <span className={isDone ? (currentProfile.isWarning ? "text-warning" : "text-success") : "text-muted-foreground"}>
                {STATUS_TEXT[phase]}
              </span>
            </div>
            {isActive && !isDone && (
              <span className="font-mono text-muted-foreground">{progress}%</span>
            )}
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full"
              animate={{ width: `${isActive ? progress : 0}%` }}
              transition={{ duration: 0.2 }}
              style={{
                background: isDone 
                  ? currentProfile.isWarning ? "hsl(var(--warning))" : "var(--gradient-lavender-emerald)" 
                  : "var(--gradient-lavender-cyan)",
              }}
            />
          </div>
        </div>

        {/* Extracted data table */}
        <div className="mt-auto rounded-xl border border-white/10 bg-black/20 p-3">
          <div className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Extracted Data
          </div>
          <ul className="space-y-1">
            {fields.map((f, i) => {
              const ready = revealed > i;
              return (
                <li
                  key={f.label}
                  className="flex items-center justify-between gap-3 rounded-md px-2 py-1.5 text-sm"
                >
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</span>
                  <span className="min-w-[40%] text-right">
                    {ready ? (
                      <motion.span
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`font-medium ${
                          f.isStatus 
                            ? currentProfile.isWarning ? "text-warning" : "text-success"
                            : "text-foreground"
                        }`}
                      >
                        {f.value}
                      </motion.span>
                    ) : (
                      <span className="block h-3 w-24 rounded shimmer ml-auto" />
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Success/Warning Banner */}
        <AnimatePresence>
          {isDone && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 rounded-lg px-3 py-2 text-xs font-medium text-center border ${
                currentProfile.isWarning 
                  ? "bg-warning/10 border-warning/20 text-warning" 
                  : "bg-success/10 border-success/20 text-success"
              }`}
            >
              {currentProfile.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DocumentParseDemo;
