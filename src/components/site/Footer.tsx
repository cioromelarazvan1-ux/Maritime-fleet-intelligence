import { Anchor, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const Footer = () => {
  const { resetConsent } = useCookieConsent();
  
  return (
    <footer className="py-12 md:py-16">
      <div className="container-narrow">
        <div className="w-full h-px bg-slate-700/30 mb-8" />

        {/* Tier 1 — Contact + Location */}
        <div className="flex flex-col items-center gap-1.5 mb-8">
          <a
            href="mailto:razvan@888aisystems.com"
            className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors tracking-wide glow-cyan"
            style={{ textShadow: "0 0 12px rgba(0,209,255,0.45)" }}
          >
            razvan@888aisystems.com
          </a>
          <span className="text-[10px] text-slate-300 uppercase tracking-wide md:tracking-widest">
            Maritime Hub · Constanța, Romania · Global Operations
          </span>
        </div>

        {/* Tier 2 — Social icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/company/888-ai-systems"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="888 AI Systems on LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-white/[0.06] text-slate-300 transition-all duration-200 hover:border-primary/50 hover:bg-white/[0.10] hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61572083986720"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="888 AI Systems on Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-white/[0.06] text-slate-300 transition-all duration-200 hover:border-primary/50 hover:bg-white/[0.10] hover:text-primary"
          >
            <Facebook className="h-4 w-4" />
          </a>
        </div>

        {/* Visual separator between Tier 2 and Tier 3 */}
        <div className="max-w-2xl mx-auto border-t border-slate-700/40 my-6" />

        {/* Tier 3 — Brand stamp */}
        <p className="text-center text-sm font-medium uppercase tracking-wider md:tracking-widest text-cyan-400 mb-4">
          Tactical Intelligence for the High Seas
        </p>

        {/* Tier 4 — Legal */}
        <div className="text-center text-xs text-slate-400">
          © 2026 888 AI Systems
          <span className="mx-1.5">·</span>
          <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
          <span className="mx-1.5">·</span>
          <button onClick={resetConsent} className="hover:text-cyan-400 transition-colors">Cookie Settings</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
