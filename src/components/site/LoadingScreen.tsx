import { useState, useEffect } from "react";
import { Anchor } from "lucide-react";

const LoadingScreen = () => {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500);
    const t2 = setTimeout(() => setPhase(2), 1000);
    const t3 = setTimeout(() => setPhase(3), 2000);
    const t4 = setTimeout(() => setVisible(false), 2500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center transition-opacity duration-500 ${phase === 3 ? "opacity-0" : "opacity-100"}`}>
      <div className={`flex flex-col items-center gap-4 transition-all duration-700 ${phase >= 0 ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
        {/* Logo icon */}
        <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
          <Anchor className="h-8 w-8 text-cyan-400" />
        </div>
        {/* Company name */}
        <div className={`text-center transition-all duration-700 delay-100 ${phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h1 className="text-white text-2xl font-bold tracking-wide font-display">888 AI Systems</h1>
          <p className="text-cyan-400/70 text-[10px] mt-1 tracking-[0.2em] uppercase font-medium">Tactical Intelligence for the High Seas</p>
        </div>
      </div>
      {/* Progress bar */}
      <div className={`fixed bottom-0 left-0 right-0 transition-all duration-500 ${phase >= 2 ? "opacity-100" : "opacity-0"}`}>
        <p className="text-center text-slate-500 text-[10px] mb-3 tracking-[0.15em] uppercase font-medium">Initialising Fleet Intelligence Layer...</p>
        <div className="h-[2px] w-full bg-slate-900">
          <div className={`h-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-300 transition-all duration-1000 ease-out ${phase >= 2 ? "w-full" : "w-0"}`} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
