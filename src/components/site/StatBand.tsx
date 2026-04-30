import { motion } from "framer-motion";
import CountUp from "./CountUp";

const StatBand = () => (
  <section className="py-16 md:py-24">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="glass-strong relative overflow-hidden rounded-3xl p-10 text-center md:p-16"
      >
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: "var(--gradient-cyan)", filter: "blur(80px)" }} />
        <div className="relative">
          <div className="font-display text-6xl font-semibold leading-none md:text-8xl lg:text-9xl">
            <CountUp to={92} suffix="%" className="text-gradient-cyan" />
          </div>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Reduction in manual data entry across crewing operations.
          </p>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-6">
            {[
              { v: 38, suffix: "h", l: "Saved / vessel / month" },
              { v: 99.4, suffix: "%", decimals: 1, l: "Cert capture accuracy" },
              { v: null, suffix: "", l: "Detentions in pilot fleet" },
            ].map((m) => (
              <div key={m.l}>
                <div className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                  {m.v !== null ? (
                    <CountUp to={m.v} suffix={m.suffix} decimals={m.decimals ?? 0} />
                  ) : (
                    <span className="text-success">Zero ✓</span>
                  )}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{m.l}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[11px] text-muted-foreground/50">
            Pilot fleet results · 2024 · Based on 12 vessels over 9 months
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default StatBand;
