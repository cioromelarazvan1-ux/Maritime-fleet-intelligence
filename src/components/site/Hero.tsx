import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DemoModal from "./DemoModal";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="top" className="relative pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <ShieldCheck className="h-3.5 w-3.5" />
            Agentic AI for Crewing & Manning
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-gradient">Automated Compliance.</span>
            <br />
            <span className="text-gradient-cyan">Zero Detentions.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Thorne is the agentic platform that keeps your fleet STCW-current, MLC 2006-compliant,
            and Port State Control-ready — without your team chasing paperwork.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-7 font-medium glow-cyan"
            >
              <a href="#audit">
                Request Technical Audit
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setOpen(true)}
              className="rounded-full border border-white/10 hover:bg-white/5 text-foreground px-7"
            >
              <Play className="mr-1 h-4 w-4 fill-current" />
              Watch Demo
            </Button>
          </div>

          {/* Live metric strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass mx-auto mt-16 grid max-w-3xl grid-cols-3 divide-x divide-white/10 rounded-2xl p-5"
          >
            {[
              { v: "92%", l: "Manual entry reduction" },
              { v: "38h", l: "Saved per vessel/month" },
              { v: "$50k+", l: "Avg detention avoided" },
            ].map((m) => (
              <div key={m.l} className="px-4 text-left first:pl-0 last:pr-0">
                <div className="font-display text-2xl font-semibold text-gradient-cyan md:text-3xl">{m.v}</div>
                <div className="mt-1 text-xs leading-tight text-muted-foreground">{m.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <DemoModal open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default Hero;
