import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export const useScrollTracking = () => {
  useEffect(() => {
    const milestones = [25, 50, 75, 90, 100];
    const reached = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          trackEvent("scroll_depth_reached", {
            depth_percent: milestone,
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
