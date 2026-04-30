import { Anchor, Facebook, Linkedin } from "lucide-react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#funnel", label: "Force Deployment" },
  { href: "#founder", label: "Founder" },
];

const Nav = () => (
  <header className="sticky top-0 z-50 w-full">
    <div className="container-narrow mt-4">
      <nav className="glass flex items-center justify-between rounded-full px-5 py-2.5">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
            <Anchor className="h-4 w-4" />
          </span>
          <span className="text-foreground">888</span>
          <span className="text-muted-foreground font-normal">AI Systems</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Social Icons instead of CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://linkedin.com/in/razvan-cioromela-734067129/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition-all hover:border-primary/30 hover:bg-white/[0.06] hover:text-primary"
          >
            <Linkedin className="h-4 w-4 drop-shadow-[0_0_8px_hsl(191_100%_50%_/_0.3)]" />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61572083986720"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="888 AI Systems on Facebook"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition-all hover:border-primary/30 hover:bg-white/[0.06] hover:text-primary"
          >
            <Facebook className="h-4 w-4 drop-shadow-[0_0_8px_hsl(191_100%_50%_/_0.3)]" />
          </a>
        </div>
      </nav>
    </div>
  </header>
);

export default Nav;
