import React from "react";

import HeroSection from "./components/HeroSection";
import GenerateLeads from "./components/GenerateLeads";
import LinkedInRevenue from "./components/LinkedInRevenue";
import LinkedInMarketing from "./components/LinkedInMarketing";
import LinkedInSales from "./components/LinkedInSales";
import Packages from "./components/Packages";
import FooterBanner from "./components/FooterBanner.jsx";
import Testimonial from "./components/Testimonial";
import CaseStudySlider from "./components/CaseStudySlider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Testimonial />
      <CaseStudySlider />
      <GenerateLeads />
      <LinkedInRevenue />
      <LinkedInMarketing />
      <LinkedInSales />
      <Packages />
      <FooterBanner />
    </>
  );
}
