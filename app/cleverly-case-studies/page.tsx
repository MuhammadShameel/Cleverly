"use client"; // 1. Add "use client"

import React, { useState } from "react"; // 2. Import useState
import CaseStudyCard from "../components/CaseStudyCard";
import CaseStudyModal from "../components/CaseStudyModal"; // 3. Import the modal
import { projects } from "../data/caseStudiesData";

const ClientCaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);

  const handleShowMore = (project, section) => {
    setSelectedStudy({
      ...project,
      _section: section,
    });
  };
  return (
    <>
      <section className="hero-section bg-linear-to-b from-[#0d0033] to-[#3301cc] py-20 text-white lg:px-5 md:px-4 px-3">
        <div className="container mx-auto">
          <div className="text-center mx-auto">
            <div className="content-wrapper">
              <h1 className="py-3 font-bold max-w-4xl mx-auto font-geomanist">
                100+ Case Studies
              </h1>
              <p className="py-3 max-w-3xl mx-auto">
                See why thousands of B2B companies across 50+ industries made us
                their growth partner in lead generation and sales.
              </p>
            </div>
            <div className="mt-12 text-center mx-auto flex flex-col justify-center items-center">
              <button className="btn btn-orange">Free Consultaion</button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:px-5 md:px-4 px-3">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <CaseStudyCard
                key={index}
                project={project}
                onShowMore={handleShowMore}
              />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyModal
        project={selectedStudy}
        onClose={() => setSelectedStudy(null)}
      />
    </>
  );
};

export default ClientCaseStudies;
