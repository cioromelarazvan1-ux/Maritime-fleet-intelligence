import BackgroundOrbs from "@/components/site/BackgroundOrbs";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import TrustStrip from "@/components/site/TrustStrip";
import StatBand from "@/components/site/StatBand";
import BentoGrid from "@/components/site/BentoGrid";
import RecruitmentFunnel from "@/components/site/RecruitmentFunnel";
import Founder from "@/components/site/Founder";
import StrategicGap from "@/components/site/StrategicGap";
import FAQ from "@/components/site/FAQ";
import Consultancy from "@/components/site/Consultancy";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "888 AI Systems — Agentic AI for Crew Complement, CV Parsing & STCW Compliance";
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
      "888 AI Systems: Agentic AI designed by a Chief Engineer to automate Crew Complement optimization, CV parsing, and 100% STCW compliance across your fleet.",
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
        <RecruitmentFunnel />
        <Founder />
        <StrategicGap />
        <FAQ />
        <Consultancy />
      </main>
      <Footer />
    </>
  );
};

export default Index;
