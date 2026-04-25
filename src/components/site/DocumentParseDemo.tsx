import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, FileText, RotateCcw, ScanLine, Upload } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "uploading" | "scanning" | "extracting" | "validated";

const FIELDS = [
  { label: "Name", value: "John L. Seafarer" },
  { label: "Nationality", value: "PHL" },
  { label: "Rank", value: "Chief Officer" },
  { label: "STCW Expiry", value: "12 DEC 2028" },
  { label: "Status", value: "✓ Validated", isStatus: true },
];

const STATUS_TEXT: Record<Phase, string> = {
  idle: "Ready",
  uploading: "Uploading…",
  scanning: "OCR scanning…",
  extracting: "Extracting fields…",
  validated: "Cross-checked against STCW registry",
};

const DocumentParseDemo = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [progress, setProgress] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const reduce = useReducedMotion();
  const timeouts = useRef<number[]>([]);

  const clearTimers = () => {
    timeouts.current.forEach((t) => window.clearTimeout(t));
    timeouts.current = [];
  };

  const start = () => {
    if (phase !== "idle") return;
    clearTimers();
    setProgress(0);
    setRevealed(0);

    if (reduce) {
      setPhase("validated");
      setProgress(100);
      setRevealed(FIELDS.length);
      timeouts.current.push(window.setTimeout(reset, 8000));
      return;
    }

    setPhase("uploading");
    timeouts.current.push(window.setTimeout(() => setPhase("scanning"), 400));
    timeouts.current.push(window.setTimeout(() => setPhase("extracting"), 1100));

    // Progress tween
    const total = 2200;
    const startT = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startT) / total, 1);
      setProgress(Math.round(p * 100));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    // Reveal fields staggered
    FIELDS.forEach((_, i) => {
      timeouts.current.push(window.setTimeout(() => setRevealed(i + 1), 700 + i * 320));
    });

    timeouts.current.push(window.setTimeout(() => setPhase("validated"), 2400));
    timeouts.current.push(window.setTimeout(reset, 10000));
  };

  const reset = () => {
    clearTimers();
    setPhase("idle");
    setProgress(0);
    setRevealed(0);
  };

  useEffect(() => clearTimers, []);

  const isDone = phase === "validated";
  const isActive = phase !== "idle";

  return (
    <div
      className="group relative h-full"
      role="button"
      tabIndex={0}
      onClick={start}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && start()}
      aria-label="Run document parsing demo"
    >
      {/* Card border gradient that shifts to emerald on validation */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          boxShadow: isDone
            ? "0 0 0 1px hsl(var(--success) / 0.5), var(--glow-emerald)"
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
            <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-secondary">
              Live Demo
            </div>
            <h3 className="font-display text-xl font-semibold leading-tight md:text-2xl">
              Intelligent Certificate Parsing
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Click to watch our agent read a seafarer passport and validate STCW endorsements in seconds.
            </p>
          </div>
          {isDone && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                reset();
              }}
              className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              <RotateCcw className="h-3 w-3" /> Reset
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
                <div className="text-xs text-muted-foreground">or click to simulate</div>
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
                    <div className="text-xs font-medium text-muted-foreground">passport_seafarer_PHL.pdf</div>
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
                      background: "linear-gradient(to bottom, transparent, hsl(258 90% 76% / 0.35) 50%, hsl(187 100% 50% / 0.5) 80%, transparent)",
                    }} />
                    <div className="h-px w-full" style={{ background: "var(--gradient-lavender-cyan)", boxShadow: "0 0 12px hsl(187 100% 50% / 0.8)" }} />
                  </motion.div>
                )}

                {/* Done flash */}
                {isDone && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ background: "hsl(var(--success) / 0.25)" }}
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
                <CheckCircle2 className="h-3.5 w-3.5 text-success" />
              ) : (
                <ScanLine className={`h-3.5 w-3.5 ${isActive ? "text-secondary" : "text-muted-foreground"}`} />
              )}
              <span className={isDone ? "text-success" : ""}>{STATUS_TEXT[phase]}</span>
            </div>
            <span className="font-mono text-muted-foreground">{progress}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
              style={{
                background: isDone ? "var(--gradient-lavender-emerald)" : "var(--gradient-lavender-cyan)",
              }}
            />
          </div>
        </div>

        {/* Extracted data table */}
        <div className="mt-auto rounded-xl border border-white/10 bg-background/40 p-3">
          <div className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Extracted Data
          </div>
          <ul className="space-y-1">
            {FIELDS.map((f, i) => {
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
                          f.isStatus ? (isDone ? "text-success" : "text-secondary") : "text-foreground"
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
      </div>
    </div>
  );
};

export default DocumentParseDemo;
