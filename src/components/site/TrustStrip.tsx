const logos = ["DNV", "Lloyd's Register", "ABS", "Bureau Veritas", "ClassNK", "IMO", "BIMCO", "Intertanko"];

const TrustStrip = () => (
  <section aria-label="Trusted by" className="border-y border-white/5 py-10 overflow-hidden">
    <div className="container-narrow">
      <p className="mb-7 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Recognised by the world's top class societies &amp; flag states
      </p>
    </div>

    {/* Infinite marquee */}
    <div className="relative">
      {/* fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="flex trust-marquee gap-12 w-max">
        {[...logos, ...logos].map((l, i) => (
          <div
            key={`${l}-${i}`}
            className="flex items-center justify-center rounded-lg border border-white/8 bg-white/[0.03] px-5 py-2.5 font-display text-sm font-medium tracking-wide text-muted-foreground whitespace-nowrap transition-all hover:border-primary/30 hover:text-foreground hover:bg-white/[0.06]"
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
