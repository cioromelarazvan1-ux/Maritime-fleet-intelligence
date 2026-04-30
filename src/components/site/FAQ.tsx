import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much time will my HCI team actually save?",
    a: [
      "Automates CV parsing and certificate verification.",
      "Reduces manual administrative tasks by up to 80%.",
      "Shifts focus from data entry to operational readiness."
    ],
  },
  {
    q: "How does the AI ensure seafarer quality?",
    a: [
      "Built with the logic of a Chief Engineer.",
      "Cross-references sea-time, engine types, and vessel experience.",
      "Ranks candidates based on actual technical readiness."
    ],
  },
  {
    q: "Is this limited to crewing and recruitment?",
    a: [
      "HCI and Crew Complement are the foundation.",
      "Scalable to Technical Management and PMS automation.",
      "Adaptable for Fleet Safety as digital needs evolve."
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
    q: "Will it integrate with our existing crewing system (Compas, OCS, ShipNet)?",
    a: [
      "Sits alongside your CMMS or crewing platform via REST and SFTP feeds.",
      "Most pilots connected within 10 working days.",
      "Integration mapping handled during onboarding."
    ],
  },
  {
    q: "Where is crew personal data hosted?",
    a: [
      "AWS infrastructure (EU and US regions available).",
      "Seafarer PII is encrypted at rest and in transit.",
      "Supports data residency for flag states and EU GDPR."
    ],
  },
  {
    q: "How long is onboarding?",
    a: [
      "Typical 5–15 vessel fleet is live in 2 weeks.",
      "Begins with a Technical Audit.",
      "Maps existing certificate inventory to quantify time savings."
    ],
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 md:py-32">
    <div className="container-narrow">
      <div className="mb-10 max-w-2xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          Technical Performance &amp; HCI Operations
        </div>
        <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
          <span className="text-gradient">Mission-Ready Deployment</span>{" "}
          <span className="text-gradient-cyan">Framework.</span>
        </h2>
      </div>

      <div className="glass rounded-2xl px-6 md:px-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/10 last:border-0">
              <AccordionTrigger className="text-left font-display text-base font-medium hover:no-underline md:text-lg">
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
    </div>
  </section>
);

export default FAQ;
