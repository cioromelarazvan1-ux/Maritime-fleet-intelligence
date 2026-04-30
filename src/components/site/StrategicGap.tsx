import { motion } from "framer-motion";
import { Settings, ShieldAlert, LineChart } from "lucide-react";

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
    color: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
  },
  {
    icon: LineChart,
    title: "Vessel Performance",
    body: "AI-driven data analysis for engine room and deck efficiency.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
];

const StrategicGap = () => (
  <section id="vision" className="py-20 md:py-32">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-2xl"
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
          Future-Ready Architecture
        </div>
        <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
          <span className="text-gradient">Extensible Intelligence:</span>{" "}
          <span className="text-gradient-cyan">Beyond the Crewing Office.</span>
        </h2>
        <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground list-none md:text-lg">
          <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Modular agentic architecture.</li>
          <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Scalable technical PMS optimization.</li>
          <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Real-time fleet-wide data sync.</li>
        </ul>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
        {modules.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`glass relative overflow-hidden rounded-2xl border-t border-t-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t hover:border-t-primary/30`}
          >
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
              Plug-in Ready
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StrategicGap;
