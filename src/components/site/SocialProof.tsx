import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import { useSectionTracking } from "@/hooks/useSectionTracking";
import { useEffect } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const painPoints = [
  {
    quote: "We manage vessels across multiple flag states. Every crew rotation means hours of manual STCW cross-checking across spreadsheets. One missed certificate expiry could trigger a PSC detention and cost us $50,000 in delays.",
    name: "Fleet Manager",
    company: "Tanker Operator — Mediterranean",
    flag: "🇬🇷",
    initials: "FM"
  },
  {
    quote: "Our MLC 2006 audit preparation takes days of manual document gathering. We are always reactive, never proactive. One inspector finding what we missed could ground our vessel and make headlines for the wrong reasons.",
    name: "DPA",
    company: "Container Fleet — Northern Europe",
    flag: "🇩🇪",
    initials: "DPA"
  },
  {
    quote: "We have evaluated generic HR platforms. None of them understand safe manning certificates, flag state endorsements or vessel-type competency matrices. We are still running crew planning on Excel in 2026.",
    name: "VP Marine Operations",
    company: "Offshore Operator — North Sea",
    flag: "🇳🇴",
    initials: "VP"
  }
];

const SocialProof = () => {
  const sectionRef = useSectionTracking("social_proof");

  useEffect(() => {
    trackEvent("social_proof_viewed");
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-black/20 overflow-hidden">
    <div className="container-narrow">
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-widest uppercase text-cyan-400">
          Does This Sound Familiar?
        </div>
        <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
          The reality inside every fleet operation right now.
        </h2>
      </div>

      {/* Pain point cards */}
      <div className="relative">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
          {painPoints.map((t, i) => (
            <RevealOnScroll key={i} direction="up" delay={0.15 + (i * 0.1)}>
              <div className="glass-strong flex flex-col rounded-2xl border border-cyan-500/20 border-t-2 border-t-cyan-500 bg-slate-800/50 p-8 relative h-full overflow-hidden">
                <p className="text-slate-300 leading-relaxed mb-8 flex-1">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="h-12 w-12 shrink-0 rounded-full border-2 border-cyan-500 flex items-center justify-center font-display font-bold text-cyan-400 text-xs" style={{ backgroundColor: '#1e293b', aspectRatio: '1 / 1' }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-cyan-400 text-sm flex items-center gap-1.5 whitespace-nowrap">
                      {t.company} <span className="text-[14px]">{t.flag}</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>


    </div>
  </section>
  );
};

export default SocialProof;
