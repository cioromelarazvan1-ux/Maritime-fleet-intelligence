import { Anchor, Facebook, Linkedin, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

const links = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#crew-deployment", label: "Deployment" },
  { href: "#founder", label: "The Founder" },
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-background/90 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.35)]"
        : "bg-transparent"
    }`}>
      <div className="container-narrow mt-4 relative z-50">
        <nav className="glass flex items-center justify-between rounded-full px-4 py-2.5 md:px-5">
          <a href="/"className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
              <Anchor className="h-4 w-4" />
            </span>
            <span className="text-foreground">888</span>
            <span className="text-muted-foreground font-normal">AI Systems</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Action Area */}
          <div className="flex items-center gap-2 md:gap-4">
            <a
              href="#contact"
              onClick={() => trackEvent("navbar_book_demo_clicked")}
              className="rounded-full bg-primary px-3 py-1.5 md:px-5 md:py-2 text-[13px] md:text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary shadow-[0_0_15px_rgba(0,209,255,0.2)]"
            >
              Book a Demo
            </a>

            {/* Desktop Socials */}
            <div className="hidden items-center gap-2 md:flex">
              <a
                href="https://www.linkedin.com/company/121104167"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition-all hover:border-primary/30 hover:bg-white/[0.06] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Linkedin className="h-4 w-4 drop-shadow-[0_0_8px_hsl(191_100%_50%_/_0.3)]" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572083986720"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="888 AI Systems on Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition-all hover:border-primary/30 hover:bg-white/[0.06] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Facebook className="h-4 w-4 drop-shadow-[0_0_8px_hsl(191_100%_50%_/_0.3)]" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center rounded-full p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md lg:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-display">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground transition-colors hover:text-primary active:text-primary"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-6 mt-8">
                <a
                  href="https://www.linkedin.com/company/121104167"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61572083986720"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="888 AI Systems on Facebook"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Facebook className="h-8 w-8" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Static teal hairline */}
      <div className="h-px w-full bg-primary/30" />
    </header>
  );
};

export default Nav;
