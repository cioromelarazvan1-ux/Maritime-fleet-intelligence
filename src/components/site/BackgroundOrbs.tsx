import { useEffect, useState } from "react";

const BackgroundOrbs = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Existing Glows */}
      <div
        className="orb-drift absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl will-change-transform"
        style={{ background: "radial-gradient(circle, hsl(218 58% 30% / 0.6), transparent 70%)" }}
      />
      
      {!isMobile && (
        <>
          <div
            className="orb-drift absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl will-change-transform"
            style={{
              background: "radial-gradient(circle, hsl(191 100% 50% / 0.3), transparent 70%)",
              animationDelay: "-7s",
            }}
          />
          <div
            className="orb-drift absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl will-change-transform"
            style={{
              background: "radial-gradient(circle, hsl(218 58% 40% / 0.4), transparent 70%)",
              animationDelay: "-14s",
            }}
          />
        </>
      )}
      
      {/* Deep Ocean Blue Glow — Balance for Navigation Teal */}
      <div
        className="orb-drift absolute -bottom-40 -left-20 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl will-change-transform"
        style={{
          background: "radial-gradient(circle, hsl(222 100% 40% / 0.4), transparent 70%)",
          animationDelay: "-5s",
        }}
      />

      {/* Navigation Intercepts */}
      <div className="vector-line top-[30%] rotate-[-4deg]" />
      <div className="vector-line top-[70%] rotate-[2deg]" />
      
      <div className="bg-vignette" />
      <div className="bg-grain" />

      {/* Deep Water Ambient Glows */}
    </div>
  );
};

export default BackgroundOrbs;
