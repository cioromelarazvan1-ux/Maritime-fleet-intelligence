import { motion } from "framer-motion";
import { Settings, ShieldAlert, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const modules = [
  {
    icon: Settings,
    title: "Technical Management",
    body: "Agentic workflows for PMS optimization and technical audits.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: ShieldAlert,
    title: "Operational Safety",
    body: "Real-time compliance monitoring and ISM/MLC 2006 integration.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/20",
    border: "border-cyan-500/20",
  },
  {
    icon: LineChart,
    title: "Vessel Performance",
    body: "AI-driven data analysis for engine room and deck efficiency.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/20",
    border: "border-cyan-500/20",
  },
];

const StrategicGap = () => (
  <section id="vision" className="py-16 md:py-24">
    <div className="container-narrow">
      <div className="mb-14 max-w-2xl">
        <RevealOnScroll direction="up" delay={0}>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-widest uppercase text-cyan-400">
            Maritime AI Operating System
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
            <span className="text-white">One Intelligence Layer.</span>{" "}
            <span className="text-gradient-cyan">Every Operational Domain.</span>
          </h2>
          <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground list-none md:text-lg">
            <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Add capabilities as your fleet grows — no rip-and-replace.</li>
            <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Planned Maintenance and crewing unified in one system.</li>
            <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Every vessel, every update, in real time.</li>
          </ul>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
        {modules.map((m, i) => (
          <RevealOnScroll key={m.title} direction="up" delay={0.1 * i} className="h-full">
            <div className={`glass relative overflow-hidden rounded-2xl border-t border-t-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t hover:border-t-primary/30 h-full`}>
            {/* Modular connection nodes */}
            <div className="absolute -top-1 right-6 flex gap-1 opacity-50">
              <div className="h-2 w-1.5 rounded-b-sm bg-white/20" />
              <div className="h-2 w-1.5 rounded-b-sm bg-white/20" />
              <div className="h-2 w-1.5 rounded-b-sm bg-white/20" />
            </div>

            <div className={`mb-4 grid h-10 w-10 place-items-center rounded-lg border ${m.border} ${m.bg} ${m.color}`}>
              <m.icon className="h-5 w-5" />
            </div>

            <h3 className="font-display text-lg font-semibold text-foreground">
              {m.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {m.body}
            </p>
            
            <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-background/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
              EARLY ACCESS Q4 2026
            </div>
          </div>
          </RevealOnScroll>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button
          variant="outline"
          size="lg"
          asChild
          className="rounded-full border-primary/30 px-10 py-6 font-medium transition-all hover:bg-primary/10 hover:border-primary/50"
        >
          <a href="#contact">Join the Early Access List →</a>
        </Button>
      </div>
    </div>
  </section>
);

export default StrategicGap;
