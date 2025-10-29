"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";

import CaseStudyModal from "./CaseStudyModal";
import Stars from "../../public/images/blue-stars.svg";
import Person from "../../public/images/profile.jpeg";
import Search from "../..//public/images/search-icon.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    tag: "FULL PiPE",
    category: "Saas",
    tagTheme: "default", // For the purple/default text color
    mainMetric: "41 meetings booked in 3 months",
    secondaryMetric: "33%",
    secondaryMetricLabel: "Reply Rate",

    author: {
      image: Person, // Placeholder path
      name: "Ali Rafie",
      role: "Sales Director",
    },
    rating: null,
    sections: [
      {
        id: "strategy-2",
        icon: "strategy",
        title: "Strategy",
        text: "We focused our market approach on mid-market technology decision-makers, targeting CTOs and IT Directors at high-growth companies (50-1000 employees) showing clear digital transformation signals. We refined our targeting by identifying companies using legacy systems and those with recent funding, then addressed common vendor skepticism by leading with specific value metrics from similar customers (e.g., reduced processing time by 40%) and offering brief product demonstrations. This approach proved highly effective, resulting in a 15% outreach-to-demo conversion rate and 30% trial-to-paid conversion rate.",
      },
      {
        id: "review-2",
        icon: "review",
        title: "Review",
        text: "Great work on the last 2 months of campaigns! We have definitely seen an uptick in leads and closed clients. We should be closing another deal tomorrow!",
      },
    ],
  },
  {
    tag: "FULL PiPE",
    category: "Saas",
    tagTheme: "default", // For the purple/default text color
    mainMetric: "41 meetings booked in 3 months",
    secondaryMetric: "33%",
    secondaryMetricLabel: "Reply Rate",

    author: {
      image: Person, // Placeholder path
      name: "Ali Rafie",
      role: "Sales Director",
    },
    rating: null,
    sections: [
      {
        id: "strategy-2",
        icon: "strategy",
        title: "Strategy",
        text: "We focused our market approach on mid-market technology decision-makers, targeting CTOs and IT Directors at high-growth companies (50-1000 employees) showing clear digital transformation signals. We refined our targeting by identifying companies using legacy systems and those with recent funding, then addressed common vendor skepticism by leading with specific value metrics from similar customers (e.g., reduced processing time by 40%) and offering brief product demonstrations. This approach proved highly effective, resulting in a 15% outreach-to-demo conversion rate and 30% trial-to-paid conversion rate.",
      },
      {
        id: "review-2",
        icon: "review",
        title: "Review",
        text: "Great work on the last 2 months of campaigns! We have definitely seen an uptick in leads and closed clients. We should be closing another deal tomorrow!",
      },
    ],
  },
  {
    tag: "FULL PiPE",
    category: "Saas",
    tagTheme: "default", // For the purple/default text color
    mainMetric: "41 meetings booked in 3 months",
    secondaryMetric: "33%",
    secondaryMetricLabel: "Reply Rate",

    author: {
      image: Person, // Placeholder path
      name: "Ali Rafie",
      role: "Sales Director",
    },
    rating: null,
    sections: [
      {
        id: "strategy-2",
        icon: "strategy",
        title: "Strategy",
        text: "We focused our market approach on mid-market technology decision-makers, targeting CTOs and IT Directors at high-growth companies (50-1000 employees) showing clear digital transformation signals. We refined our targeting by identifying companies using legacy systems and those with recent funding, then addressed common vendor skepticism by leading with specific value metrics from similar customers (e.g., reduced processing time by 40%) and offering brief product demonstrations. This approach proved highly effective, resulting in a 15% outreach-to-demo conversion rate and 30% trial-to-paid conversion rate.",
      },
      {
        id: "review-2",
        icon: "review",
        title: "Review",
        text: "Great work on the last 2 months of campaigns! We have definitely seen an uptick in leads and closed clients. We should be closing another deal tomorrow!",
      },
    ],
  },
  {
    tag: "FULL PiPE",
    category: "Saas",
    tagTheme: "default", // For the purple/default text color
    mainMetric: "41 meetings booked in 3 months",
    secondaryMetric: "33%",
    secondaryMetricLabel: "Reply Rate",

    author: {
      image: Person, // Placeholder path
      name: "Ali Rafie",
      role: "Sales Director",
    },
    rating: null,
    sections: [
      {
        id: "strategy-2",
        icon: "strategy",
        title: "Strategy",
        text: "We focused our market approach on mid-market technology decision-makers, targeting CTOs and IT Directors at high-growth companies (50-1000 employees) showing clear digital transformation signals. We refined our targeting by identifying companies using legacy systems and those with recent funding, then addressed common vendor skepticism by leading with specific value metrics from similar customers (e.g., reduced processing time by 40%) and offering brief product demonstrations. This approach proved highly effective, resulting in a 15% outreach-to-demo conversion rate and 30% trial-to-paid conversion rate.",
      },
      {
        id: "review-2",
        icon: "review",
        title: "Review",
        text: "Great work on the last 2 months of campaigns! We have definitely seen an uptick in leads and closed clients. We should be closing another deal tomorrow!",
      },
    ],
  },
  {
    tag: "FULL PiPE",
    category: "Saas",
    tagTheme: "default", // For the purple/default text color
    mainMetric: "41 meetings booked in 3 months",
    secondaryMetric: "33%",
    secondaryMetricLabel: "Reply Rate",

    author: {
      image: Person, // Placeholder path
      name: "Ali Rafie",
      role: "Sales Director",
    },
    rating: null,
    sections: [
      {
        id: "strategy-2",
        icon: "strategy",
        title: "Strategy",
        text: "We focused our market approach on mid-market technology decision-makers, targeting CTOs and IT Directors at high-growth companies (50-1000 employees) showing clear digital transformation signals. We refined our targeting by identifying companies using legacy systems and those with recent funding, then addressed common vendor skepticism by leading with specific value metrics from similar customers (e.g., reduced processing time by 40%) and offering brief product demonstrations. This approach proved highly effective, resulting in a 15% outreach-to-demo conversion rate and 30% trial-to-paid conversion rate.",
      },
      {
        id: "review-2",
        icon: "review",
        title: "Review",
        text: "Great work on the last 2 months of campaigns! We have definitely seen an uptick in leads and closed clients. We should be closing another deal tomorrow!",
      },
    ],
  },
  {
    tag: "FULL PiPE",
    category: "Saas",
    tagTheme: "default", // For the purple/default text color
    mainMetric: "41 meetings booked in 3 months",
    secondaryMetric: "33%",
    secondaryMetricLabel: "Reply Rate",

    author: {
      image: Person, // Placeholder path
      name: "Ali Rafie",
      role: "Sales Director",
    },
    rating: null,
    sections: [
      {
        id: "strategy-2",
        icon: "strategy",
        title: "Strategy",
        text: "We focused our market approach on mid-market technology decision-makers, targeting CTOs and IT Directors at high-growth companies (50-1000 employees) showing clear digital transformation signals. We refined our targeting by identifying companies using legacy systems and those with recent funding, then addressed common vendor skepticism by leading with specific value metrics from similar customers (e.g., reduced processing time by 40%) and offering brief product demonstrations. This approach proved highly effective, resulting in a 15% outreach-to-demo conversion rate and 30% trial-to-paid conversion rate.",
      },
      {
        id: "review-2",
        icon: "review",
        title: "Review",
        text: "Great work on the last 2 months of campaigns! We have definitely seen an uptick in leads and closed clients. We should be closing another deal tomorrow!",
      },
    ],
  },
];

const CaseStudySlider = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => swiper?.slidePrev();
  const handleNext = () => swiper?.slideNext();

  return (
    <>
      <section className="pb-20">
        <div className="lg:px-5 md:px-4 px-3 ">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h2>100+ LinkedIn case studies</h2>
              <p className="py-3 max-w-3xl mx-auto">
                Results generated for clients across every industry.
              </p>
            </div>

            {/* slider  */}
            <div className="relative pt-12">
              {" "}
              <Swiper
                onSwiper={setSwiper}
                modules={[Navigation, Pagination, Autoplay]}
                onSlideChange={(s) => setActiveIndex(s.realIndex)}
                spaceBetween={30}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination-custom",
                  bulletClass: "swiper-pagination-bullet",
                  bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                }}
                className="custom-swiper-container"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="slider-card bg-[#fbfaff] rounded-lg h-full flex flex-col mt-12">
                      <div className="flex">
                        <div className="swiper-left-content lg:w-2/4 w-full p-[30px]">
                          <div className="font-semibold uppercase">
                            {project.tag} /{" "}
                            <span className="text-[#6320ee]">
                              {project.category}
                            </span>
                          </div>
                          <div className="flex flex-col gap-8 mt-14">
                            <h3 className="text-black">{project.mainMetric}</h3>
                            <div>
                              <h4 className="font-bold text-[#6320ee]!">
                                {project.secondaryMetric}
                              </h4>
                              Reply Rate
                            </div>
                            <div>
                              <Image
                                src={Stars}
                                className=""
                                width={20}
                                height={20}
                                alt=""
                              />
                            </div>
                            <div className="flex items-center gap-5">
                              <div className="profile-img-wrapper ">
                                <Image
                                  src={project.author.image}
                                  className="object-cover w-full! h-full! rounded-[20px]"
                                  width={20}
                                  height={20}
                                  unoptimized={true}
                                  alt=""
                                />
                              </div>
                              <div>
                                <h4>{project.author.name}</h4>
                                <p>{project.author.role}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-right-content lg:w-2/4 w-full p-[30px] min-h-[580px] border-l border-[#e1d9f6]">
                          <span className="bg-[#4001ff] py-1.5 px-3.5 text-[#fbfcfd] leading-normal rounded-full">
                            LinkedIn Lead Generation
                          </span>
                          <div className="flex flex-col mt-10">
                            <div className="flex items-center gap-3 border-b border-[#e1d9f6] pb-2 mb-2">
                              <Image
                                src={Search}
                                alt=""
                                width={10}
                                height={10}
                              />
                              <div className="text-[20px] font-medium leading-normal">
                                Strategy
                              </div>
                            </div>
                            <p className="line-clamp-4 text-[16px]!">
                              {project.sections[0].text}
                            </p>
                            <button
                              href="#"
                              onClick={() =>
                                setSelectedStudy({
                                  ...project,
                                  _section: "strategy",
                                })
                              }
                              className="text-[#4001ff] text-[16px] underline text-start mt-1 cursor-pointer font-bold"
                            >
                              Show more
                            </button>
                          </div>
                          <div className="flex flex-col mt-8">
                            <div className="flex items-center gap-3 border-b border-[#e1d9f6] pb-2 mb-2">
                              <Image
                                src={Search}
                                alt=""
                                width={10}
                                height={10}
                              />
                              <div className="text-[20px] font-medium leading-normal">
                                Reviews
                              </div>
                            </div>
                            <p className="line-clamp-4 text-[16px]!">
                              {project.sections[1].text}
                            </p>
                            <button
                              href="#"
                              onClick={() =>
                                setSelectedStudy({
                                  ...project,
                                  _section: "review",
                                })
                              }
                              className="text-[#4001ff] text-[16px] underline text-start mt-1 font-bold cursor-pointer"
                            >
                              Show more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-12 z-10">
                <div className="swiper-pagination-custom relative w-auto text-center " />
                {/* <div className="swiper-button-prev absolute left-4"></div>
                <div className="swiper-button-next absolute right-4"></div> */}
                <div className="mt-8 flex items-end justify-end gap-32 md:absolute md:bottom-4 md:mt-0 z-1">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="flex h-7 w-7 p-1.5 items-center justify-center rounded-full bg-light-purple cursor-pointer transition-colors duration-200 ease-in-out border border-[#b2a4de] text-[#b2a4de]  hover:border-[#4001ff] hover:text-white hover:bg-[#4001ff]"
                  >
                    {/* SVG Icon for Left Arrow */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      <path
                        d="M19.9375 12.354L7.29167 24.9998L19.9375 37.6457"
                        stroke="currentColor" // Changed to currentColor
                        strokeWidth="2.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M42.7084 25H7.64588"
                        stroke="currentColor" // Changed to currentColor
                        strokeWidth="2.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="flex h-7 w-7 p-1.5 items-center justify-center rounded-full bg-light-purple cursor-pointer transition-colors duration-200 ease-in-out border border-[#b2a4de] text-[#b2a4de] hover:border-[#4001ff] hover:text-white hover:bg-[#4001ff]"
                  >
                    {/* SVG Icon for Right Arrow */}
                    <svg
                      className="rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      <path
                        d="M19.9375 12.354L7.29167 24.9998L19.9375 37.6457"
                        stroke="currentColor" // Changed to currentColor
                        strokeWidth="2.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M42.7084 25H7.64588"
                        stroke="currentColor" // Changed to currentColor
                        strokeWidth="2.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
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

export default CaseStudySlider;
