import { motion } from "framer-motion";
import { Wrench, Shield, TrendingUp, Clock, Clipboard, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { useSectionTracking } from "@/hooks/useSectionTracking";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const capabilities = [
  {
    icon: Wrench,
    title: "Planned Maintenance Intelligence",
    description: "AI-scheduled PMS that predicts failures before they cost you.",
  },
  {
    icon: Shield,
    title: "ISM & Safety Compliance",
    description: "Non-conformity patterns detected and resolved automatically.",
  },
  {
    icon: TrendingUp,
    title: "Vessel Performance Analytics",
    description: "Engine room and deck efficiency tracked across your entire fleet.",
  },
  {
    icon: Clock,
    title: "Crew Fatigue & Hours Monitoring",
    description: "MLC 2006 working hours violations flagged before they happen.",
  },
  {
    icon: Clipboard,
    title: "Port State Control Readiness",
    description: "Deficiency prediction and inspection preparation — automated.",
  },
  {
    icon: FileText,
    title: "Operational Document Intelligence",
    description: "Risk assessments, PTW and incident reports drafted by AI.",
  },
];

const BeyondCrewing = () => {
  const sectionRef = useSectionTracking("beyond_crewing");
  
  return (
    <section ref={sectionRef} id="beyond" className="py-16 md:py-24">
    <div className="container-narrow">
      {/* Header */}
      <div className="mb-14 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-widest uppercase text-cyan-400">
          The Bigger Picture
        </div>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl mb-4">
          <span className="text-white">Crewing is where we start.</span>
          <span className="block mt-3 text-xl font-medium text-cyan-400 md:text-2xl">Because every vessel, every department and every challenge deserves better tools.</span>
        </h2>
        <p className="mx-auto max-w-2xl text-slate-400 md:text-lg">
          888 AI Systems is not a recruiting tool. It is an intelligence layer — starting with the most compliance-critical layer of your fleet, and expanding across every operational domain where seafarers and shore teams need better tools, faster answers, and fewer manual processes.
        </p>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <RevealOnScroll key={c.title} direction="up" delay={0.08 * i}>
            <div className="group rounded-2xl border border-slate-700/50 bg-slate-900/40 p-8 transition-all hover:border-cyan-500/50 h-full">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
              <c.icon className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="mb-2 font-display text-lg font-bold text-white">{c.title}</h3>
            <p className="text-sm leading-relaxed text-slate-400">{c.description}</p>
          </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Footer text and CTA */}
      <div className="mt-16 flex flex-col items-center text-center">
        <p className="mb-6 text-xs uppercase tracking-wider text-slate-400">
          On the roadmap — capabilities currently in vision stage.
        </p>
        <p className="mb-8 text-sm font-medium tracking-wide text-slate-500">
          All modules connect to the same Fleet Intelligence Layer. One system. Full visibility.
        </p>

      </div>
    </div>
  </section>
);
};

export default BeyondCrewing;
