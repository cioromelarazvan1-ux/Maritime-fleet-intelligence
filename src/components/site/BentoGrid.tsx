import { motion } from "framer-motion";
import { AlertTriangle, CalendarClock, LayoutDashboard } from "lucide-react";
import DocumentParseDemo from "./DocumentParseDemo";

const SectionHeader = () => (
  <div className="mb-12 max-w-2xl">
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
      The Agentic Stack
    </div>
    <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
      <span className="text-gradient">Four agents.</span>{" "}
      <span className="text-gradient-cyan">One compliant fleet.</span>
    </h2>
    <p className="mt-4 text-muted-foreground md:text-lg">
      Purpose-built for Fleet Managers and Technical Superintendents who can't afford another PSC detention.
    </p>
  </div>
);

const tile =
  "glass relative overflow-hidden rounded-2xl transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-1";

const BentoGrid = () => (
  <section id="features" className="py-16 md:py-24">
    <div className="container-narrow">
      <SectionHeader />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
        {/* Featured demo: spans 2 cols, 2 rows */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 md:row-span-2"
        >
          <div className={tile + " h-full"}>
            <DocumentParseDemo />
          </div>
        </motion.div>

        {/* Rotation Scheduling */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={tile}
        >
          <div className="flex h-full flex-col p-6">
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
              <CalendarClock className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold">Predictive Rotation Scheduling</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Avoid MLC 2006 fatigue breaches and shave up to <span className="text-foreground">38%</span> off
              last-minute crew flight costs.
            </p>
            {/* Mini visual */}
            <div className="mt-4 space-y-1.5">
              {[
                { w: "70%", c: "from-primary to-secondary" },
                { w: "50%", c: "from-secondary to-primary" },
                { w: "85%", c: "from-primary/60 to-success" },
              ].map((b, i) => (
                <div key={i} className="h-2 rounded-full bg-white/5">
                  <div className={`h-full rounded-full bg-gradient-to-r ${b.c}`} style={{ width: b.w }} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Compliance Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={tile}
        >
          <div className="flex h-full flex-col p-6">
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold">Fleet Compliance Dashboard</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Live STCW &amp; MLC 2006 readiness for every vessel — drill from fleet view to a single endorsement.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[98, 94, 87].map((v, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-background/40 p-2 text-center">
                  <div className="font-display text-base font-semibold text-success">{v}%</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">MV {i + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* PSC Risk — full width tile beneath */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={tile + " mt-5 grid grid-cols-1 gap-6 p-6 md:grid-cols-[auto,1fr,auto] md:items-center"}
      >
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-warning/15 text-warning">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold">Predictive PSC Risk Scoring</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Predict Port State Control inspection outcomes before arrival. Surface the documents most likely to be challenged at Paris MoU and Tokyo MoU ports.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-background/40 px-4 py-3">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">MV Aurora · Rotterdam</div>
            <div className="font-display text-lg font-semibold text-success">Low risk · 4%</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default BentoGrid;
