import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { trackEvent } from "@/lib/analytics";
import { useSectionTracking } from "@/hooks/useSectionTracking";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const faqs = [
  {
    q: "How much time will my crewing team actually save?",
    a: [
      "Automates CV parsing and certificate verification end-to-end.",
      "Replaces manual data entry, expiry tracking, and cross-checking with intelligent workflows.",
      "Specific time savings are quantified for each pilot partner during the technical audit at onboarding."
    ],
  },
  {
    q: "How does the AI ensure seafarer quality?",
    a: [
      "Built with the operational logic of a Chief Engineer — not generic HR software.",
      "Cross-references sea-time, engine types, and vessel class experience.",
      "Ranks candidates by actual technical readiness, not just certificate presence."
    ],
  },
  {
    q: "Is this limited to crewing and recruitment?",
    a: [
      "Crew compliance and crew complement are the foundation — where we start.",
      "Built to scale into Technical Management and PMS automation.",
      "Roadmap includes Fleet Safety, ISM compliance tracking, and PMS integration."
    ],
  },
  {
    q: "How does 888 AI Systems handle STCW endorsement validation?",
    a: [
      "Extracts STCW II/1, II/2, III/1, III/2 from scanned certificates.",
      "Cross-references issuing authorities.",
      "Flags expiries at 90, 60, and 30 days.",
      "Produces an MLC 2006-compliant audit trail."
    ],
  },
  {
    q: "Will it integrate with our existing crewing system (COMPAS, Adonis, ShipNet)?",
    a: [
      "Sits alongside your CMMS or crewing platform via REST and SFTP feeds.",
      "Designed for connection within 10 working days for typical fleet integrations.",
      "Integration mapping and data field alignment are fully handled by the 888 team during onboarding."
    ],
  },
  {
    q: "Where is crew personal data hosted?",
    a: [
      "AWS infrastructure (EU and US regions available).",
      "Seafarer PII is encrypted at rest and in transit.",
      "Supports data residency requirements for EU GDPR and flag state compliance obligations."
    ],
  },
  {
    q: "How long is onboarding?",
    a: [
      "Designed for a 5–15 vessel fleet to go live in approximately 2 weeks.",
      "Begins with a Technical Audit.",
      "Maps your existing certificate inventory to establish a baseline and quantify projected time savings before go-live."
    ],
  },
];

const FAQ = () => {
  const sectionRef = useSectionTracking("faq");
  
  return (
    <section ref={sectionRef} id="faq" className="py-16 md:py-20">
    <div className="container-narrow">
      <div className="mb-14 max-w-2xl">
        <RevealOnScroll direction="up" delay={0}>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-widest uppercase text-cyan-400">
            Intelligence FAQ
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
            <span className="text-white">Common Questions</span>{" "}
            <span className="text-gradient-cyan">from Fleet Operators.</span>
          </h2>
        </RevealOnScroll>
      </div>

      <RevealOnScroll direction="up" delay={0.1}>
        <div className="glass-strong rounded-2xl px-6 md:px-8 border border-white/5">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10 last:border-0">
                <AccordionTrigger 
                  className="text-left font-display text-base font-medium hover:no-underline md:text-lg"
                  onClick={() => trackEvent("faq_item_opened", { question: f.q })}
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground md:text-base">
                  <ul className="space-y-2 list-none pb-2">
                    {f.a.map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);
};

export default FAQ;
