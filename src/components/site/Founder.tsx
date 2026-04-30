import { motion } from "framer-motion";
import { Wrench, Linkedin } from "lucide-react";

const Founder = () => (
  <section id="founder" className="py-20 md:py-32">
    <div className="container-narrow">
      {/* Section eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-secondary uppercase">
          The Story Behind 888 AI Systems
        </div>
        <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
          <span className="text-gradient">Human-Machine Integration.</span>
          <br />
          <span className="text-gradient-cyan">Engineered for Technical Performance.</span>
        </h2>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.65 }}
        className="glass-strong relative overflow-hidden rounded-3xl p-1"
      >
        {/* Top accent line */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(187 100% 50% / 0.5), transparent)" }}
        />

        <div className="grid grid-cols-1 gap-0 md:grid-cols-[300px,1fr]">
          {/* ─── Portrait column ─── */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[calc(1.5rem-4px)] p-8 md:rounded-l-[calc(1.5rem-4px)] md:rounded-r-none">
            {/* Background glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 20%, hsl(187 100% 50% / 0.12) 0%, hsl(264 80% 6% / 0) 70%), radial-gradient(ellipse at 80% 100%, hsl(258 90% 76% / 0.10) 0%, transparent 60%)",
              }}
            />

            {/* Avatar ring */}
            <div className="relative mb-6">
              <div
                className="absolute -inset-2 rounded-full opacity-60"
                style={{
                  background: "conic-gradient(from 180deg, hsl(187 100% 50% / 0.4), hsl(258 90% 76% / 0.4), hsl(187 100% 50% / 0.4))",
                  filter: "blur(6px)",
                }}
              />
              <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-white/10 md:h-44 md:w-44">
                <div
                  className="absolute inset-0"
                  style={{
                    background: "radial-gradient(ellipse at top, hsl(258 90% 30% / 0.9), hsl(264 80% 10%) 80%)",
                  }}
                />
                <div className="absolute inset-0 grid place-items-center">
                  <Wrench className="h-16 w-16 text-primary/50 md:h-20 md:w-20" strokeWidth={1.2} />
                </div>
              </div>
            </div>

            {/* Name & title */}
            <div className="text-center">
              <div className="font-display text-lg font-semibold leading-tight">Razvan Cioromela</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                Founder &amp; Staff Chief Engineer (Chief Engineer Unlimited)
              </div>
              
              <a
                href="https://linkedin.com/in/razvan-cioromela-734067129/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-foreground"
              >
                <Linkedin className="h-3.5 w-3.5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* ─── Bio column ─── */}
          <div className="flex flex-col justify-center border-t border-white/8 p-8 md:border-l md:border-t-0 md:p-10 lg:p-14">
            {/* Pull-quote */}
            <blockquote className="relative mb-7">
              <span
                className="absolute -top-4 -left-2 font-display text-7xl font-bold leading-none text-primary/30 select-none"
                aria-hidden="true"
              >
                "
              </span>
              <p className="font-display text-xl font-semibold leading-snug md:text-2xl lg:text-3xl">
                <span className="text-gradient">I built 888 AI Systems to bridge</span>{" "}
                <span className="text-gradient-cyan">deep sea-service knowledge and cutting-edge Agentic AI.</span>
              </p>
            </blockquote>

            {/* Bio bullet points */}
            <ul className="space-y-4 text-[15px] leading-relaxed text-muted-foreground md:text-base list-none">
              <li className="flex gap-3 items-start">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground font-medium">Engine-Room Origins:</strong> Founded by Razvan Cioromela, Staff Chief Engineer with 16+ years across Cruise, Expedition, LPG, Container, and Ferries.</span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground font-medium">Human-Machine Integration:</strong> Bridging deep technical sea-service with cutting-edge Agentic AI.</span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <span><strong className="text-foreground font-medium">Mission-Ready Deployment:</strong> Automates CV parsing and STCW compliance so HCI teams focus on vessel fleet deployment, not data entry.</span>
              </li>
            </ul>
            <div className="mt-6 rounded-xl border border-secondary/20 bg-secondary/5 px-4 py-3 text-[13px] italic text-secondary/80">
              Building the future of Maritime HCI Tech: scaling from Crew Complement to performance analytics and fleet-wide workforce planning.
            </div>

            {/* Signature */}
            <div className="mt-8 border-t border-white/8 pt-6">
              <span className="font-display text-base italic text-foreground/80">— R. Cioromela</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Founder;
