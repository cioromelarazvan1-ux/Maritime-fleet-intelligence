const BackgroundOrbs = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div
      className="orb-drift absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
      style={{ background: "radial-gradient(circle, hsl(258 90% 60% / 0.6), transparent 70%)" }}
    />
    <div
      className="orb-drift absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl"
      style={{
        background: "radial-gradient(circle, hsl(187 100% 50% / 0.5), transparent 70%)",
        animationDelay: "-7s",
      }}
    />
    <div
      className="orb-drift absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl"
      style={{
        background: "radial-gradient(circle, hsl(280 90% 60% / 0.5), transparent 70%)",
        animationDelay: "-14s",
      }}
    />
    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  </div>
);

export default BackgroundOrbs;
