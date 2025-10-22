import React from "react";

import HeroSection from "./components/HeroSection";
import GenerateLeads from "./components/GenerateLeads";
import LinkedInRevenue from "./components/LinkedInRevenue";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GenerateLeads />
      <LinkedInRevenue />
    </>
  );
}
