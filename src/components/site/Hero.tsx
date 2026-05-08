import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Play, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DemoModal from "./DemoModal";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { trackEvent } from "@/lib/analytics";
import { useSectionTracking } from "@/hooks/useSectionTracking";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const sectionRef = useSectionTracking("hero");

  return (
    <section ref={sectionRef} id="home" className="relative pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="container-narrow">
        <RevealOnScroll delay={0} direction="up">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-widest uppercase text-cyan-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              Agentic AI for Crewing, Crew Complement &amp; STCW Compliance
            </div>

            <h1 className="relative font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl overflow-hidden py-2">
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
            The AI operating layer for maritime fleet management — starting with crew compliance, built for everything beyond it.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-400">
            Built from the engine room up — by a Staff Chief Engineer, not a software vendor.
          </p>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="default"
              size="lg"
              onClick={() => {
                setOpen(true);
                trackEvent("hero_cta_clicked", { button: "see_how_it_works" });
              }}
              className="group rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 font-medium glow-cyan pulse-cta transition-all hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5 fill-current transition-transform group-hover:scale-110" />
              See How It Works
            </Button>
            <a
            href="#contact" 
              
              className="text-white/70 font-medium hover:text-white transition-colors duration-200 flex items-center gap-2 group"
              onClick={(e) => { 
  e.preventDefault();
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  trackEvent("hero_cta_clicked", { button: "book_a_demo" });
}}
            >
             Book a Demo <span className="text-cyan-400 group-hover:translate-x-1 transition-transform duration-200">➜</span> 
            </a>
          </div>


        </div>
      </RevealOnScroll>

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
