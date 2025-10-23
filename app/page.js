import React from "react";

import HeroSection from "./components/HeroSection";
import GenerateLeads from "./components/GenerateLeads";
import LinkedInRevenue from "./components/LinkedInRevenue";
import LinkedInMarketing from "./components/LinkedInMarketing";
import LinkedInSales from "./components/LinkedInSales";
import Packages from "./components/Packages";
import FooterBanner from "./components/FooterBanner.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GenerateLeads />
      <LinkedInRevenue />
      <LinkedInMarketing />
      <LinkedInSales />
      <Packages />
      <FooterBanner />
    </>
  );
}
