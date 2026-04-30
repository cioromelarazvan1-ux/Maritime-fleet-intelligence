import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Play, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DemoModal from "./DemoModal";
import CountUp from "./CountUp";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="top" className="relative py-20 md:pt-28 md:pb-32">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <ShieldCheck className="h-3.5 w-3.5" />
            Agentic AI for Crewing, Crew Complement &amp; STCW Compliance
          </div>

          <h1 className="relative font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl overflow-hidden py-2">
            <span className="text-white">The Maritime Industry’s</span>
            <br />
            <span className="text-gradient-cyan text-glow-cyan">Fleet Intelligence Layer.</span>
            
            {/* Scanning line effect */}
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "linear",
                repeatDelay: 0.5
              }}
              style={{
                background: "linear-gradient(to bottom, transparent, hsl(191 100% 50% / 0.1), transparent)",
                height: "50%",
                zIndex: 10
              }}
            />
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-xl">
            Moving beyond legacy manning. Agentic AI built to navigate the regulatory and operational complexity of the modern ocean.
          </p>

          <div className="mt-14 flex flex-col items-center justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => setOpen(true)}
              className="group rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 font-medium glow-cyan pulse-cta transition-all hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5 fill-current transition-transform group-hover:scale-110" />
              Explore System
            </Button>
          </div>

          {/* Live metric strip — CountUp animated */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass mx-auto mt-16 grid max-w-3xl grid-cols-3 divide-x divide-white/10 rounded-2xl p-5"
          >
            {[
              { to: 92, suffix: "%", prefix: "", label: "Cognitive Load Reduction" },
              { to: 38, suffix: "h",  prefix: "", label: "Response Acceleration" },
              { to: 50, suffix: "k+", prefix: "$", label: "Avg detention avoided" },
            ].map((m) => (
              <div key={m.label} className="px-4 text-center first:pl-0 last:pr-0">
                <div className="font-display text-2xl font-semibold text-gradient-cyan md:text-3xl">
                  <CountUp to={m.to} prefix={m.prefix} suffix={m.suffix} duration={1.8} />
                </div>
                <div className="mt-1 text-xs leading-tight text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/50"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      </div>

      <DemoModal open={open} onOpenChange={setOpen} />

      {/* Generative Topographic Waves — Anchored to Hero Bottom */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="topo-wave" />
        <div className="topo-wave" />
        <div className="topo-wave" />
        <div className="topo-wave" />
      </div>
    </section>
  );
};

export default Hero;
