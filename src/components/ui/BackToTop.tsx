import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
};

export default BackToTop;
