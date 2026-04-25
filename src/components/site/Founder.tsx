import { motion } from "framer-motion";
import { Anchor } from "lucide-react";

const Founder = () => (
  <section id="founder" className="py-16 md:py-24">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="glass-strong grid grid-cols-1 gap-8 rounded-3xl p-6 md:grid-cols-[260px,1fr] md:items-center md:p-10"
      >
        {/* Portrait placeholder */}
        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl border border-white/10 md:h-64 md:w-64">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at top, hsl(258 90% 50% / 0.6), hsl(264 80% 10%) 70%)",
            }}
          />
          <div className="absolute inset-0 grid place-items-center">
            <Anchor className="h-20 w-20 text-secondary/40" strokeWidth={1.2} />
          </div>
          <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-black/40 px-3 py-2 backdrop-blur">
            <div className="font-display text-sm font-semibold">Captain Elias Thorne</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Founder · Master Mariner</div>
          </div>
        </div>

        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
            From the bridge
          </div>
          <h2 className="font-display text-2xl font-semibold leading-tight md:text-4xl">
            <span className="text-gradient">"I built Thorne because I watched too many crews</span>{" "}
            <span className="text-gradient-cyan">drown in paperwork instead of running the ship."</span>
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            Twenty-five years at sea — twelve as Master across product tankers and LNG carriers. After a single
            STCW endorsement gap caused a 36-hour detention in Singapore, I knew the industry needed an agent
            that actually understands a seafarer's documents — not another spreadsheet.
          </p>
          <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="font-display italic">— E. Thorne</span>
            <span className="h-px flex-1 bg-white/10" />
            <span>Stockholm · Singapore · Manila</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Founder;
