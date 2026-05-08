import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

const DemoModal = ({ open, onOpenChange }: Props) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-3xl border-white/10 bg-card p-0">
      <DialogHeader className="px-6 pt-6">
        <DialogTitle className="font-display">888 AI Systems — Platform Walkthrough</DialogTitle>
      </DialogHeader>
      <div className="w-full overflow-hidden rounded-b-lg bg-black/40 px-8 py-12">
        <div className="flex flex-col items-center text-center gap-6 max-w-md mx-auto">
          {/* Icon */}
          <div className="grid h-14 w-14 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
          {/* Heading */}
          <div>
            <div className="font-display text-xl font-semibold text-foreground mb-3">
              Walkthrough video — in production
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A 2-minute founder-led walkthrough is on the way. In the meantime, the fastest way to see how 888 AI Systems works is a 30-minute call.
            </p>
          </div>
          {/* CTA */}
          <a
            href="https://calendly.com/razvan-888aisystems/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 shadow-[0_0_15px_rgba(0,209,255,0.2)]"
          >
            Book a Call with Razvan
          </a>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default DemoModal;
