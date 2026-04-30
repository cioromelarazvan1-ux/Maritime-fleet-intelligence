import { motion } from "framer-motion";
import { Search, ShieldCheck, BarChart3, Zap } from "lucide-react";

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
        <li className="flex gap-2"><div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />Targets niches: Cruise, Polar Ice, Ferries, LPG, Container.</li>
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
        <li className="flex gap-2"><div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-success/60" />Live Flag State endorsement verification.</li>
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
    color: "text-warning",
    bg: "bg-warning/15",
    border: "border-warning/30",
    title: "Smart Deployment",
    body: (
      <ul className="mt-2 space-y-1 text-xs text-muted-foreground list-none sm:text-sm">
        <li className="flex gap-2"><div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-warning/60" />Seamless Force Deployment software integration.</li>
        <li className="flex gap-2"><div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-warning/60" />Automates contract generation &amp; embarkation.</li>
      </ul>
    ),
  },
];

const RecruitmentFunnel = () => (
  <section id="funnel" className="py-20 md:py-32">
    <div className="container-narrow">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-14 max-w-2xl"
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          How It Works
        </div>
        <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
          <span className="text-gradient">The 888 AI</span>{" "}
          <span className="text-gradient-cyan">Force Deployment Funnel.</span>
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          From sourcing to deployment — a fully automated pipeline built for HCI and Fleet Command Directors focusing on Mission-Ready Deployment.
        </p>
      </motion.div>

      {/* Steps grid */}
      <div className="relative grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {/* Connecting line (desktop only) */}
        <div className="pointer-events-none absolute top-[2.6rem] left-[12.5%] right-[12.5%] hidden h-px md:block"
          style={{ background: "linear-gradient(90deg, hsl(187 100% 50% / 0.4), hsl(258 90% 76% / 0.4), hsl(160 84% 39% / 0.4), hsl(36 100% 64% / 0.4))" }}
        />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-1"
          >
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
          </motion.div>
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

export default RecruitmentFunnel;
