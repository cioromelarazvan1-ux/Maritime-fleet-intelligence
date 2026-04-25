import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does Thorne handle STCW endorsement validation?",
    a: "Our agent extracts STCW II/1, II/2, III/1, III/2 and any flag-state endorsement from a scanned certificate, cross-references issuing authority, and flags expiries 90 / 60 / 30 days out. All findings are produced with an MLC 2006-compliant audit trail.",
  },
  {
    q: "Where is crew personal data hosted?",
    a: "Lovable Cloud regions (EU and US available). All seafarer PII is encrypted at rest and in transit. We support data residency requirements for flag states and clients that operate under EU GDPR or comparable regimes.",
  },
  {
    q: "Will it integrate with our existing crewing system (Compas, OCS, ShipNet)?",
    a: "Yes. Thorne is built to sit alongside your CMMS or crewing platform via REST and SFTP feeds. Most pilots are connected within 10 working days; we handle the integration mapping during onboarding.",
  },
  {
    q: "How does PSC Risk Scoring work?",
    a: "We model historical Paris MoU, Tokyo MoU and US Coast Guard inspection outcomes against your vessel's certificate state, crew composition, and prior findings. The score updates as your documents change and is refreshed before each ETA.",
  },
  {
    q: "How long is onboarding?",
    a: "A typical 5–15 vessel fleet is live in 2 weeks. The Technical Audit is the first step — we map your existing certificate inventory and quantify the time savings before any commitment.",
  },
  {
    q: "What about offline vessels?",
    a: "The vessel client syncs incrementally over low-bandwidth satellite links and queues offline. Shore office sees the latest known good state plus pending updates per vessel.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-16 md:py-24">
    <div className="container-narrow">
      <div className="mb-10 max-w-2xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          FAQ
        </div>
        <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
          <span className="text-gradient">The questions superintendents</span>{" "}
          <span className="text-gradient-cyan">always ask first.</span>
        </h2>
      </div>

      <div className="glass rounded-2xl px-6 md:px-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/10 last:border-0">
              <AccordionTrigger className="text-left font-display text-base font-medium hover:no-underline md:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground md:text-base">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
