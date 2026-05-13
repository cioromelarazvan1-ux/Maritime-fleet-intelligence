import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const Founder = () => (
  <section id="founder" className="py-16 md:py-20">
    <div className="container-narrow">
      <div className="mb-14 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-widest uppercase text-cyan-400">
          Founder &amp; Chief Engineer
        </div>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          <span className="text-white">Built by the</span>{" "}
          <span className="text-gradient-cyan">Human Element.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-12">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-1 bg-slate-800/30 border border-primary/20 shadow-[0_0_40px_rgba(0,209,255,0.05)]">
            {/* Top accent line */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, hsl(191 100% 50% / 0.5), transparent)" }}
            />

            <div className="grid grid-cols-1 gap-0 md:grid-cols-[340px,1fr]">
              {/* ─── Portrait column ─── */}
              <RevealOnScroll direction="left" delay={0.1} className="h-full">
                <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[calc(1.5rem-4px)] p-8 md:rounded-l-[calc(1.5rem-4px)] md:rounded-r-none bg-black/20 h-full">
                {/* Background glow */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 20%, hsl(191 100% 50% / 0.12) 0%, hsl(264 80% 6% / 0) 70%), radial-gradient(ellipse at 80% 100%, hsl(258 90% 76% / 0.10) 0%, transparent 60%)",
                  }}
                />

                {/* Avatar container */}
                <div className="relative mb-8 group">
                  <div
                    className="absolute -inset-3 rounded-full opacity-40 group-hover:opacity-60 transition-opacity"
                    style={{
                      background: "conic-gradient(from 180deg, hsl(191 100% 50% / 0.4), hsl(258 90% 76% / 0.4), hsl(191 100% 50% / 0.4))",
                      filter: "blur(8px)",
                    }}
                  />
                  
                  {/* Image Placeholder with Initials backup */}
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/20">
                    <img
                      src="/founder-photo.jpg"
                      alt="Razvan Cioromela"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: '50% 40%' }}
                    />
                  </div>
                </div>

                {/* Name & title block */}
                <div className="text-center w-full px-4">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">Razvan Cioromela</h3>
                  <div className="text-sm font-medium text-primary mb-1">Founder — 888 AI Systems</div>
                  <div className="text-xs text-slate-400 mb-3">Staff Chief Engineer, CoC Unlimited</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-tighter flex items-center justify-center gap-1.5 opacity-80">
                    <span>16+ years</span>
                    <span className="h-1 w-1 rounded-full bg-slate-700" />
                    <span>Cruise</span>
                    <span className="h-1 w-1 rounded-full bg-slate-700" />
                    <span>LPG</span>
                    <span className="h-1 w-1 rounded-full bg-slate-700" />
                    <span>Expedition</span>
                    <span className="h-1 w-1 rounded-full bg-slate-700" />
                    <span>Container</span>
                    <span className="h-1 w-1 rounded-full bg-slate-700" />
                    <span>Ferries</span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-col items-center gap-4">
                    <a
                      href="https://calendly.com/razvan-888aisystems/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 rounded-full border border-primary/50 bg-primary/5 px-6 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary/10 hover:border-primary shadow-[0_0_15px_rgba(0,209,255,0.1)]"
                      onClick={() => trackEvent("founder_book_call_clicked")}
                    >
                      Book a Call with Razvan →
                    </a>
                    
                    <div className="flex flex-col items-center gap-3">
                      <a
                        href="https://linkedin.com/in/razvan-cioromela-734067129/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
                        onClick={() => trackEvent("founder_linkedin_clicked")}
                      >
                        <Linkedin className="h-3.5 w-3.5" />
                        Connect on LinkedIn
                      </a>
                      
                      <a
                        href="/888-ai-systems-company-onepager.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-white border-b border-primary/40 hover:border-primary pb-0.5"
                        onClick={() => trackEvent("founder_pdf_download_clicked")}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7 10 12 15 17 10"/>
                          <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        Download Company One-Pager
                      </a>
                    </div>
                  </div>
                </div>
                </div>
              </RevealOnScroll>

              {/* ─── Bio column ─── */}
              <RevealOnScroll direction="right" delay={0.2} className="h-full">
                <div className="flex flex-col justify-center border-t border-white/8 p-8 md:border-l md:border-t-0 md:p-10 lg:p-14 h-full">
                {/* Pull-quote */}
                <blockquote className="relative mb-8">
                  <span
                    className="absolute -top-4 -left-2 font-display text-7xl font-bold leading-none text-primary/20 select-none"
                    aria-hidden="true"
                  >
                    "
                  </span>
                  <p className="font-display text-xl font-semibold leading-snug md:text-2xl lg:text-3xl">
                    <span className="text-gradient">I built 888 AI Systems to bridge</span>{" "}
                    <span className="text-gradient-cyan">deep sea-service knowledge and cutting-edge Agentic AI.</span>
                  </p>
                </blockquote>

                {/* Origin story paragraph */}
                <p className="mb-8 text-[15px] leading-relaxed text-muted-foreground md:text-base">
                  The idea came from personal experience. As a seafarer applying for various job opportunities, I watched AI-powered certificate processing begin to emerge in yacht recruitment — a small but telling signal. I realised that the same intelligence, built with full STCW and MLC 2006 compliance logic and applied at the fleet operator level, could fundamentally change how maritime companies manage their most critical asset: their crew. Very few companies had attempted it. None had built it from the inside — from the engine room up. So I started.
                </p>

                {/* Bio bullet points */}
                <ul className="space-y-4 text-[15px] leading-relaxed text-muted-foreground md:text-base list-none mb-8">
                  <li className="flex gap-3 items-start">
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span><strong className="text-foreground font-medium">Engine-Room Origins:</strong> Founded by Razvan Cioromela, Staff Chief Engineer with 16+ years across Cruise, Expedition, LPG, Container, and Ferries.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span><strong className="text-foreground font-medium">Human-Machine Integration:</strong> Bridging deep technical sea-service with cutting-edge Agentic AI.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span><strong className="text-foreground font-medium">Operational Intelligence:</strong> Automates CV parsing and STCW compliance so Crewing teams focus on vessel deployment, not data entry.</span>
                  </li>
                </ul>

                {/* Upgraded Vision Box */}
                <blockquote className="mt-4 border-l-4 border-primary pl-5 py-2">
                  <p className="text-base md:text-lg font-medium text-white leading-relaxed">
                    "Our roadmap extends beyond crewing — into predictive maintenance, performance analytics, and fleet-wide workforce intelligence. 888 AI Systems is being built as the operating layer for the next generation of ship management."
                  </p>
                  <footer className="mt-3 text-xs tracking-widest uppercase text-slate-500 font-semibold">
                    — Strategic Roadmap
                  </footer>
                </blockquote>

              </div>
              </RevealOnScroll>
            </div>
          </div>
      </div>
    </div>
  </section>
);

export default Founder;
