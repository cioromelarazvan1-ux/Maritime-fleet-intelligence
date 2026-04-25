const logos = ["DNV", "Lloyd's Register", "ABS", "Bureau Veritas", "ClassNK", "IMO"];

const TrustStrip = () => (
  <section aria-label="Trusted by" className="border-y border-white/5 py-10">
    <div className="container-narrow">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Aligned with leading flag states & class societies
      </p>
      <div className="grid grid-cols-2 items-center gap-x-8 gap-y-4 opacity-60 sm:grid-cols-3 md:grid-cols-6">
        {logos.map((l) => (
          <div
            key={l}
            className="text-center font-display text-sm font-medium tracking-wide text-muted-foreground transition-opacity hover:opacity-100"
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
