import { Anchor } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-white/5 py-8">
    <div className="container-narrow">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-2 font-display">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground glow-cyan">
            <Anchor className="h-3.5 w-3.5" />
          </span>
          <span className="text-foreground">888</span> AI Systems
        </div>

        {/* Right: copyright */}
        <div className="text-xs text-slate-400">
          © 2026 888 AI Systems. Tactical Intelligence for the High Seas.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
