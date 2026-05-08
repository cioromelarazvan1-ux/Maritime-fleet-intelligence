import { Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const Footer = () => {
  const { resetConsent } = useCookieConsent();
  
  return (
    <footer className="py-12 md:py-16">
      <div className="container-narrow">
        <div className="w-full h-px bg-slate-700/30 mb-8" />

        {/* Contact + Location — centered above main row */}
        <div className="flex flex-col items-center gap-1.5 mb-8">
          <a
            href="mailto:razvan@888aisystems.com"
            className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors tracking-wide glow-cyan"
            style={{ textShadow: "0 0 12px rgba(0,209,255,0.45)" }}
          >
            razvan@888aisystems.com
          </a>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">
            Maritime Hub: Constanța, Romania&nbsp;|&nbsp;Global Operations
          </span>
        </div>

        <div className="text-center text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-medium">
          © 2026 888 AI Systems. Tactical Intelligence for the High Seas. 
          <span className="mx-1.5 md:mx-2">·</span>
          <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
          <span className="mx-1.5 md:mx-2">·</span>
          <button onClick={resetConsent} className="hover:text-cyan-400 transition-colors">Cookie Settings</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
