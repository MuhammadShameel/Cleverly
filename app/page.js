import React from "react";

import HeroSection from "./components/HeroSection";
import GenerateLeads from "./components/GenerateLeads";
import LinkedInRevenue from "./components/LinkedInRevenue";
import LinkedInMarketing from "./components/LinkedInMarketing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GenerateLeads />
      <LinkedInRevenue />
      <LinkedInMarketing />
    </>
  );
}
