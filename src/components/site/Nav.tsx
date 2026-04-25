import { Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#features", label: "Features" },
  { href: "#roi", label: "ROI" },
  { href: "#founder", label: "Founder" },
  { href: "#faq", label: "FAQ" },
];

const Nav = () => (
  <header className="sticky top-0 z-50 w-full">
    <div className="container-narrow mt-4">
      <nav className="glass flex items-center justify-between rounded-full px-5 py-2.5">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-background">
            <Anchor className="h-4 w-4" />
          </span>
          Thorne <span className="text-muted-foreground font-normal">Maritime</span>
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
        <Button
          asChild
          size="sm"
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
        >
          <a href="#audit">Request Audit</a>
        </Button>
      </nav>
    </div>
  </header>
);

export default Nav;
