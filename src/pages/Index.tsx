import BackgroundOrbs from "@/components/site/BackgroundOrbs";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import TrustStrip from "@/components/site/TrustStrip";
import StatBand from "@/components/site/StatBand";
import BentoGrid from "@/components/site/BentoGrid";
import CostOfInaction from "@/components/site/CostOfInaction";
import RoiCalculator from "@/components/site/RoiCalculator";
import Founder from "@/components/site/Founder";
import FAQ from "@/components/site/FAQ";
import AuditForm from "@/components/site/AuditForm";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Thorne Maritime — Automated STCW & MLC 2006 Compliance for Fleets";
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Agentic AI for crewing & manning. Cut manual entry 92%, eliminate PSC detentions, and stay STCW/MLC 2006 compliant across your fleet.",
    );
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
      <BackgroundOrbs />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <StatBand />
        <BentoGrid />
        <CostOfInaction />
        <RoiCalculator />
        <Founder />
        <FAQ />
        <AuditForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
