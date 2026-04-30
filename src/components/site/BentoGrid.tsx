import { motion } from "framer-motion";
import { AlertTriangle, FileSearch, Users, Ship } from "lucide-react";
import DocumentParseDemo from "./DocumentParseDemo";

const SectionHeader = () => (
  <div className="mb-12 max-w-2xl">
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
      The 888 AI Stack
    </div>
    <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
      <span className="text-gradient">Three agents.</span>{" "}
      <span className="text-gradient-cyan">One compliant fleet.</span>
    </h2>
    <p className="mt-4 text-muted-foreground md:text-lg">
      The kernel for Neural Fleet Management—ensuring Digital Seaworthiness through automated crew readiness and real-time data orchestration.
    </p>
  </div>
);

const tile =
  "glass relative overflow-hidden rounded-2xl transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-1 hover:border-primary/30";

const BentoGrid = () => (
  <section id="features" className="py-20 md:py-32">
    <div className="container-narrow">
      <SectionHeader />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-5">
        {/* Featured: AI CV Intelligence — spans 2 cols, 2 rows */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="col-span-2 md:col-span-2 md:row-span-2"
        >
          <div className={tile + " h-full flex flex-col"}>
            {/* Card header */}
            <div className="flex items-start gap-4 border-b border-white/8 p-6 pb-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary/15 text-secondary">
                <FileSearch className="h-5 w-5" />
              </div>
              <div>
                <div className="mb-0.5 inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-secondary">
                  AI CV Intelligence
                </div>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground list-none">
                  <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Latency-Free Vessel Deployment via automated document parsing.</li>
                  <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span className="text-foreground font-medium">Biometric Crew Integration ready</span> for advanced seafarer verification.</li>
                </ul>
              </div>
            </div>
            {/* Live demo */}
            <div className="flex-1">
              <DocumentParseDemo />
            </div>
          </div>
        </motion.div>

        {/* Dynamic Crew Complement Scales */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={tile}
        >
          <div className="flex h-full flex-col p-6">
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold">Dynamic Crew Complement Scales</h3>
            <ul className="mt-2 space-y-1 text-xs text-muted-foreground list-none sm:text-sm">
              <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Real-time monitoring of safe complement requirements.</li>
              <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Fleet-wide <span className="text-foreground">STCW / Medical</span> tracking.</li>
            </ul>
            {/* Mini visual — expiry countdown bars */}
            <div className="mt-4 space-y-2">
              {[
                { name: "STCW CoC", days: 14, pct: "12%", c: "from-warning to-warning/60" },
                { name: "Medical ENG", days: 42, pct: "35%", c: "from-primary to-secondary" },
                { name: "GMDSS GOC",  days: 90, pct: "78%", c: "from-success to-success/70" },
              ].map((b) => (
                <div key={b.name}>
                  <div className="mb-1 flex justify-between text-[10px] text-muted-foreground">
                    <span>{b.name}</span>
                    <span className={b.days < 30 ? "text-warning" : "text-muted-foreground"}>{b.days}d left</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5">
                    <div className={`h-full rounded-full bg-gradient-to-r ${b.c}`} style={{ width: b.pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Full-Spectrum Fleet Readiness */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={tile}
        >
          <div className="flex h-full flex-col p-6">
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-secondary/15 text-secondary">
              <Ship className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold">Full-Spectrum Fleet Readiness</h3>
            <ul className="mt-2 space-y-1 text-xs text-muted-foreground list-none sm:text-sm">
              <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />Agentic models specialized for all vessel classes: Tankers, LNG, Bulk, Offshore, and Cruise.</li>
              <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span className="text-foreground">Full-spectrum compliance</span> for STCW, ISM, and specialized Tanker/Chemical certifications.</li>
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {["TANKER / GAS", "DRY BULK", "OFFSHORE", "PASSENGER"].map((v) => (
                <div key={v} className="rounded-lg border border-white/10 bg-background/40 px-2 py-1.5 text-center">
                  <div className="text-[9px] font-medium uppercase tracking-wider text-secondary leading-tight">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* STCW Expiry Radar — full-width bottom tile */}
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
          <h3 className="font-display text-lg font-semibold">STCW &amp; Medical Expiry Radar</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-none">
            <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning/60" />Deterministic Compliance surfacing expiries proactively at 90 / 60 / 30 days.</li>
            <li className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning/60" />Zero-Error Force Deployment with MLC 2006 audit trail.</li>
          </ul>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-background/40 px-4 py-3">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Next expiry · Fleet</div>
            <div className="font-display text-lg font-semibold text-warning">14 days · STCW CoC</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default BentoGrid;
