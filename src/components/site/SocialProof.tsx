import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import { useSectionTracking } from "@/hooks/useSectionTracking";
import { useEffect } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const dataCards = [
  {
    eyebrow: "DETENTION REALITY",
    stat: "4.03%",
    body: "Port State Control detention rate across the Paris MoU region in 2024 — up from 3.81% the year before. Crew-related and certificate deficiencies remain among the most cited inspection findings.",
    source: "Paris MoU 2024 Annual Report",
  },
  {
    eyebrow: "DOCUMENTATION REALITY",
    stat: "2,327",
    body: "The number of times 'Certificate & Documentation' was logged as a deficiency in 2024 Mediterranean MoU inspections — the single largest deficiency category. Year-over-year detentions rose 20%.",
    source: "Mediterranean MoU 2024 Annual Report",
  },
  {
    eyebrow: "WORKFORCE REALITY",
    stat: "89,510",
    body: "Additional STCW-certified officers projected to be needed by 2026 to operate today's 74,000+ vessel world fleet. Compliance complexity is growing faster than the workforce.",
    source: "BIMCO/ICS Seafarer Workforce Report",
  },
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

      {/* Data cards */}
      <div className="relative">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
          {dataCards.map((card, i) => (
            <RevealOnScroll key={i} direction="up" delay={0.15 + (i * 0.1)}>
              <div className="glass-strong flex flex-col rounded-2xl border border-cyan-500/20 border-t-2 border-t-cyan-500 bg-slate-800/50 p-8 h-full">
                {/* Eyebrow */}
                <div className="mb-4 text-xs font-medium uppercase tracking-wider text-cyan-400">
                  {card.eyebrow}
                </div>

                {/* Statistic */}
                <div className="mb-5 font-display text-5xl font-bold text-cyan-400">
                  {card.stat}
                </div>

                {/* Body */}
                <p className="flex-1 text-sm leading-relaxed text-slate-300 mb-6">
                  {card.body}
                </p>

                {/* Source */}
                <div className="border-t border-white/5 pt-4 text-xs italic text-slate-500">
                  {card.source}
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

