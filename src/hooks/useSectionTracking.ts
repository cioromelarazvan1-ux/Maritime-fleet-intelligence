import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export const useSectionTracking = (sectionName: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const tracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackEvent("section_viewed", {
            section: sectionName,
          });
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [sectionName]);

  return ref;
};
