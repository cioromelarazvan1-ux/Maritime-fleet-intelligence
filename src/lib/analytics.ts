import posthog from "posthog-js";

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || "https://eu.posthog.com";

export const initAnalytics = (consent: string | null) => {
  if (!POSTHOG_KEY) return;
  if (consent !== "accepted") return;

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    persistence: "localStorage",
    autocapture: true,
    capture_pageview: true,
    disable_session_recording: false,
  });
};

export const trackEvent = (
  eventName: string,
  properties?: Record<string, unknown>
) => {
  if (!posthog.__loaded) return;
  posthog.capture(eventName, properties);
};

export const identifyUser = (
  email: string,
  properties?: Record<string, unknown>
) => {
  if (!posthog.__loaded) return;
  posthog.identify(email, properties);
};

export const resetUser = () => {
  if (!posthog.__loaded) return;
  posthog.reset();
};

export const captureUTMParams = () => {
  const params = new URLSearchParams(window.location.search);
  const utm = {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_content: params.get("utm_content"),
    utm_term: params.get("utm_term"),
  };

  const hasUTM = Object.values(utm).some(Boolean);
  if (hasUTM) {
    localStorage.setItem("888_utm_params", JSON.stringify(utm));
    trackEvent("utm_captured", utm);
  }
};
