import { useState, useEffect } from "react";

type ConsentStatus = "accepted" | "declined" | "essential_only" | null;

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("888_cookie_consent") as ConsentStatus;
    if (stored) {
      setConsent(stored);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("888_cookie_consent", "accepted");
    setConsent("accepted");
    setShowBanner(false);
  };

  const essentialOnly = () => {
    localStorage.setItem("888_cookie_consent", "essential_only");
    setConsent("essential_only");
    setShowBanner(false);
  };

  const decline = () => {
    localStorage.setItem("888_cookie_consent", "declined");
    setConsent("declined");
    setShowBanner(false);
  };

  const resetConsent = () => {
    localStorage.removeItem("888_cookie_consent");
    setConsent(null);
    setShowBanner(true);
  };

  return {
    consent,
    showBanner,
    acceptAll,
    essentialOnly,
    decline,
    resetConsent,
    hasConsented: consent === "accepted",
    hasEssentialOnly: consent === "essential_only",
    hasDeclined: consent === "declined"
  };
};
