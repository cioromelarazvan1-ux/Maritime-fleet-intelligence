import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

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
            <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Planned maintenance and crewing unified in one system.</li>
            <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Every vessel, every update, in real time.</li>
          </ul>
        </RevealOnScroll>
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

