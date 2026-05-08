import { motion } from "framer-motion";
import CountUp from "./CountUp";
import { useSectionTracking } from "@/hooks/useSectionTracking";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const StatBand = () => {
  const sectionRef = useSectionTracking("stats");
  
  return (
    <section ref={sectionRef} className="py-10 md:py-16">
    <div className="container-narrow">
      <RevealOnScroll direction="up" delay={0.1}>
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: "var(--gradient-cyan)", filter: "blur(80px)" }} />
        <div className="relative">
          <div className="font-display text-6xl font-semibold leading-none md:text-8xl lg:text-9xl">
            <CountUp to={92} suffix="%" className="text-gradient-cyan" />
          </div>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Reduction in manual compliance checks across crewing operations.
          </p>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-6">
            {[
              { v: 38, suffix: "h", l: "Hours saved per crew rotation" },
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

          <div className="mt-10">
            <a
              href="/888-ai-systems-platform-vision.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/5 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/10 shadow-[0_0_20px_rgba(0,209,255,0.15)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Platform Vision PDF
            </a>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </div>
  </section>
);
};

export default StatBand;
