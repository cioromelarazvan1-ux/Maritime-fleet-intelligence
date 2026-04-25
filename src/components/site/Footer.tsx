import { Anchor } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-white/5 py-10">
    <div className="container-narrow flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
      <div className="flex items-center gap-2 font-display">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-background">
          <Anchor className="h-3.5 w-3.5" />
        </span>
        <span className="text-foreground">Thorne</span> Maritime
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <a href="#features" className="hover:text-foreground">Features</a>
        <a href="#roi" className="hover:text-foreground">ROI</a>
        <a href="#founder" className="hover:text-foreground">Founder</a>
        <a href="#faq" className="hover:text-foreground">FAQ</a>
        <a href="#audit" className="hover:text-foreground">Request Audit</a>
      </div>
      <div className="text-xs">© {new Date().getFullYear()} Thorne Maritime · Stockholm</div>
    </div>
  </footer>
);

export default Footer;
