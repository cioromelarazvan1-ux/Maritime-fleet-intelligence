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
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            {[
              { value: "16+",    label: "Years sea-going experience behind the platform" },
              { value: "150+",   label: "STCW certificate types the platform is built to track" },
              { value: "$10K+",  label: "Cost of a single avoidable port detention" },
              { value: "2026",   label: "Early access — founding partner cohort open" },
            ].map((m) => (
              <div key={m.label} className="flex flex-col items-center gap-2">
                <div className="font-display text-4xl font-semibold text-gradient-cyan md:text-5xl">
                  {m.value}
                </div>
                <div className="text-xs text-muted-foreground leading-snug">{m.label}</div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-xs text-slate-500">
            Pre-launch platform — figures reflect the problem space and founder credentials, not pilot results.
          </p>

          <div className="mt-8">
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
