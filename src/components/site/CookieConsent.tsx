import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const { showBanner, acceptAll, essentialOnly, decline } = useCookieConsent();

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/30 px-6 py-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
        >
          <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-left">
              <p className="text-sm font-bold text-white mb-1">We use cookies</p>
              <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
                888 AI Systems uses essential cookies to operate this site, and optional analytics cookies to understand how fleet operators interact with our platform. We never sell your data. All data is hosted on EU servers in compliance with GDPR.{" "}
                <Link to="/privacy" className="text-cyan-500 hover:underline font-medium">Read our Privacy Policy</Link>
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 shrink-0">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={decline}
                className="text-slate-400 hover:text-white hover:bg-white/5 rounded-full px-4"
              >
                Decline
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={essentialOnly}
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-full px-5"
              >
                Essential Only
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                onClick={acceptAll}
                className="bg-cyan-500 text-black hover:bg-cyan-400 rounded-full px-5 font-bold"
              >
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
