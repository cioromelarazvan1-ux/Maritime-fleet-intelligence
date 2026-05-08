const logos = ["DNV", "Lloyd's Register", "ABS", "Bureau Veritas", "ClassNK", "IMO", "BIMCO", "Intertanko"];

const TrustStrip = () => (
  <section aria-label="Trusted by" className="border-y border-white/5 py-10 overflow-hidden">
    <div className="container-narrow">
      <p className="mb-7 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Built in compliance with the world's top class societies &amp; flag states
      </p>
    </div>

    {/* Infinite marquee / Horizontal Scroll on Mobile */}
    <div className="relative overflow-x-auto overflow-y-hidden pb-4 md:overflow-visible md:pb-0">
      {/* fade masks (hidden on mobile to show scroll intent) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-background to-transparent md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-background to-transparent md:block" />

      <div className="flex trust-marquee gap-8 px-6 w-max md:gap-12 md:px-0">
        {[...logos, ...logos].map((l, i) => (
          <div
            key={`${l}-${i}`}
            className="flex items-center justify-center min-w-[120px] h-11 rounded-lg border border-white/8 bg-white/[0.03] px-6 py-2.5 font-display text-sm font-medium tracking-wide text-muted-foreground whitespace-nowrap transition-all duration-300 hover:border-primary/50 hover:text-foreground hover:bg-white/[0.06]"
          >
            {l}
          </div>
        ))}
      </div>
    </div>

    <div className="container-narrow mt-8">
      <p className="text-center text-[10px] md:text-xs text-slate-400 opacity-60 max-w-2xl mx-auto leading-relaxed">
        888 AI Systems is an independent software platform. All referenced organisations are compliance frameworks we are built upon, not official endorsement partners.
      </p>
    </div>
  </section>
);

export default TrustStrip;
