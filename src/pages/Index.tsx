import BackgroundOrbs from "@/components/site/BackgroundOrbs";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import TrustStrip from "@/components/site/TrustStrip";
import StatBand from "@/components/site/StatBand";
import { useEffect, lazy, Suspense } from "react";
import { initAnalytics, captureUTMParams } from "@/lib/analytics";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { useScrollTracking } from "@/hooks/useScrollTracking";

// Lazy loaded components for performance
const SocialProof = lazy(() => import("@/components/site/SocialProof"));
const BentoGrid = lazy(() => import("@/components/site/BentoGrid"));
const RecruitmentFunnel = lazy(() => import("@/components/site/RecruitmentFunnel"));
const Founder = lazy(() => import("@/components/site/Founder"));
const StrategicGap = lazy(() => import("@/components/site/StrategicGap"));
const BeyondCrewing = lazy(() => import("@/components/site/BeyondCrewing"));
const FAQ = lazy(() => import("@/components/site/FAQ"));
const Consultancy = lazy(() => import("@/components/site/Consultancy"));
const Footer = lazy(() => import("@/components/site/Footer"));
const CookieConsent = lazy(() => import("@/components/site/CookieConsent"));
import LoadingScreen from "@/components/site/LoadingScreen";
import BackToTop from "@/components/ui/BackToTop";

const Index = () => {
  const { consent } = useCookieConsent();
  useScrollTracking();

  useEffect(() => {
    if (consent === "accepted") {
      initAnalytics(consent);
      captureUTMParams();
    }
  }, [consent]);

  useEffect(() => {
    document.title = "888 AI Systems — The Maritime AI Operating Layer";

    const metaTags = [
      { name: "description", content: "888 AI Systems is the maritime AI operating layer — automating crew compliance, planned maintenance, operational safety and vessel performance. Built by a Chief Engineer with 16+ years at sea." },
      { name: "keywords", content: "maritime crewing software, STCW compliance automation, seafarer CV parsing, crew complement management, maritime AI, fleet intelligence, maritime recruitment, MLC 2006, DNV, Lloyd's Register, crewing management system" },
      { name: "author", content: "Razvan Cioromela — 888 AI Systems" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "888 AI Systems — The Maritime Industry's Fleet Intelligence Layer" },
      { property: "og:description", content: "Agentic AI built by a Chief Engineer to automate crew complement, CV parsing and STCW compliance. Zero detentions in pilot fleet." },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:url", content: "https://maritime-fleet-intelligence.vercel.app" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "888 AI Systems — Fleet Intelligence Layer" },
      { name: "twitter:description", content: "Agentic AI for maritime crewing, STCW compliance and crew complement management. Built by a Chief Engineer." },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      const attr = name ? "name" : "property";
      const val = name || property;
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, val!);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content!);
    });

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <>
      <LoadingScreen />
      <BackgroundOrbs />
      <Nav />
      <main role="main">
        <Hero />
        <TrustStrip />
        <StatBand />
        
        <Suspense fallback={<div className="h-20" />}>
          <SocialProof />
          <BentoGrid />
          <RecruitmentFunnel />
          <Founder />
          <StrategicGap />
          <BeyondCrewing />
          <FAQ />
          <Consultancy />
          <Footer />
        </Suspense>
      </main>
      <CookieConsent />
      <BackToTop />
    </>
  );
};

export default Index;
