import { motion } from "framer-motion";
import { Search, ShieldCheck, BarChart3, Zap } from "lucide-react";
import { useSectionTracking } from "@/hooks/useSectionTracking";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const steps = [
  {
    number: "01",
    icon: Search,
    color: "text-primary",
    bg: "bg-primary/15",
    border: "border-primary/30",
    title: "Intelligent Sourcing",
    body: (
      <ul className="mt-2 space-y-1 text-xs text-muted-foreground list-none sm:text-sm">
        <li className="flex gap-2"><div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />Scans global databases &amp; incoming CVs.</li>
        <li className="flex gap-2"><div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />Specialised in: Cruise, Expedition, Ferries, LPG, Container.</li>
      </ul>
    ),
  },
  {
    number: "02",
    icon: ShieldCheck,
    color: "text-success",
    bg: "bg-success/15",
    border: "border-success/30",
    title: "Automated Verification",
    body: (
      <ul className="mt-2 space-y-1 text-xs text-muted-foreground list-none sm:text-sm">
        <li className="flex gap-2"><div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-success/60" />Instant STCW &amp; Medical fitness cross-checks.</li>
        <li className="flex gap-2"><div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-success/60" />Real-time Flag State endorsement verification.</li>
      </ul>
    ),
  },
  {
    number: "03",
    icon: BarChart3,
    color: "text-secondary",
    bg: "bg-secondary/15",
    border: "border-secondary/30",
    title: "Technical Ranking",
    body: (
      <ul className="mt-2 space-y-1 text-xs text-muted-foreground list-none sm:text-sm">
        <li className="flex gap-2"><div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-secondary/60" />Evaluates rank-specific competence &amp; sea-time.</li>
        <li className="flex gap-2"><div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-secondary/60" />Matches exact engine types &amp; operational requirements.</li>
      </ul>
    ),
  },
  {
    number: "04",
    icon: Zap,
    color: "text-cyan-400",
    bg: "bg-cyan-500/20",
    border: "border-cyan-500/30",
    title: "Smart Deployment",
    body: (
      <ul className="mt-2 space-y-1 text-xs text-muted-foreground list-none sm:text-sm">
        <li className="flex gap-2"><div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500/60" />Direct integration with leading crewing platforms — COMPAS, Adonis, ShipNet.</li>
        <li className="flex gap-2"><div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500/60" />Automates contract generation &amp; embarkation paperwork.</li>
      </ul>
    ),
  },
];

const RecruitmentFunnel = () => {
  const sectionRef = useSectionTracking("funnel");
  
  return (
    <section ref={sectionRef} id="crew-deployment" className="py-16 md:py-20">
    <div className="container-narrow">
      {/* Header */}
      <div className="mb-14 max-w-2xl">
        <RevealOnScroll direction="up" delay={0}>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-widest uppercase text-cyan-400">
            Crew Deployment Pipeline
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
            <span className="text-gradient">The 888 AI</span>{" "}
            <span className="text-gradient-cyan">Crew Deployment Funnel.</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            From CV to embarkation — a fully automated pipeline built for crewing managers and fleet operators.
          </p>
        </RevealOnScroll>
      </div>

      {/* Steps grid */}
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-5">
        {/* Connecting line (desktop horizontal) */}
        <div className="pointer-events-none absolute top-[2.6rem] left-[12.5%] right-[12.5%] hidden h-px md:block"
          style={{ background: "linear-gradient(90deg, hsl(187 100% 50% / 0.4), hsl(258 90% 76% / 0.4), hsl(160 84% 39% / 0.4), hsl(36 100% 64% / 0.4))" }}
        />

        {/* Connecting line (mobile vertical) */}
        <div className="pointer-events-none absolute left-[2.75rem] top-8 bottom-8 w-px md:hidden"
          style={{ background: "linear-gradient(180deg, hsl(187 100% 50% / 0.4), hsl(258 90% 76% / 0.4), hsl(160 84% 39% / 0.4), hsl(36 100% 64% / 0.4))" }}
        />

        {steps.map((step, i) => (
          <RevealOnScroll key={step.title} direction="up" delay={0.1 * i} className="h-full">
            <div className="glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-1 h-full">
            {/* Step number watermark */}
            <div className="absolute -top-2 -right-1 font-display text-6xl font-bold leading-none text-white/[0.04] select-none">
              {step.number}
            </div>

            {/* Icon */}
            <div className={`relative mb-4 grid h-11 w-11 place-items-center rounded-xl border ${step.border} ${step.bg} ${step.color}`}>
              <step.icon className="h-5 w-5" />
            </div>

            {/* Step label */}
            <div className={`mb-2 text-[10px] font-semibold uppercase tracking-widest ${step.color}`}>
              Step {step.number}
            </div>

            <h3 className="font-display text-base font-semibold leading-tight md:text-lg">
              {step.title}
            </h3>
            <div className="mt-2">
              {step.body}
            </div>
          </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 text-center text-xs text-muted-foreground/60"
      >
        Average end-to-end processing time: <span className="text-primary font-medium">under 90 seconds per CV</span>
      </motion.p>
    </div>
  </section>
);
};

export default RecruitmentFunnel;
