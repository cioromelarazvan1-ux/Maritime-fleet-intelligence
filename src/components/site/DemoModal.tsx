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
      <div className="aspect-video w-full overflow-hidden rounded-b-lg bg-black/40">
        <div className="grid h-full place-items-center text-center text-muted-foreground">
          <div>
            <div className="mb-2 font-display text-lg text-foreground">Demo video coming soon</div>
            <p className="max-w-sm text-sm">
              Drop your Loom or YouTube embed URL here when ready — the modal is wired up.
            </p>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default DemoModal;
