import { motion } from "framer-motion";
import { Clock, FileWarning, ShieldAlert } from "lucide-react";

const items = [
  {
    icon: ShieldAlert,
    stat: "$50,000+",
    title: "Avg cost of one PSC detention",
    body: "Lost charter days, port fees, and delayed cargo — before any flag-state penalties.",
  },
  {
    icon: Clock,
    stat: "120 hrs",
    title: "Lost monthly to manual cert tracking",
    body: "On a 10-vessel fleet. Time your superintendents should be spending on operations.",
  },
  {
    icon: FileWarning,
    stat: "1 in 4",
    title: "Detentions cite crew certification gaps",
    body: "MLC 2006 non-conformities and expired STCW endorsements remain top-three findings.",
  },
];

const CostOfInaction = () => (
  <section className="py-16 md:py-24">
    <div className="container-narrow">
      <div className="mb-12 max-w-2xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-xs font-medium text-warning">
          The Cost of Inaction
        </div>
        <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
          <span className="text-gradient">Manual errors aren't an annoyance.</span>{" "}
          <span className="text-warning">They're detentions.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-warning/15 text-warning">
              <it.icon className="h-5 w-5" />
            </div>
            <div className="font-display text-3xl font-semibold text-warning">{it.stat}</div>
            <div className="mt-1 text-base font-medium">{it.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CostOfInaction;
