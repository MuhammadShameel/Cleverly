"use client";

import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
// import { testimonials } from "../lib/testimonials-data";

const testimonials = [
  {
    id: 1,
    name: "NICKALE",
    company: "GREEN PACE FINANCIAL",
    service: "Financial Services",
    role: "Coaches & Consultants",
    stats: [
      "23 mending booked in 5 months",
      "$430K in high index sales in 2 years",
    ],
    videoUrl: "https://player.vimeo.com/video/1024463377",
    thumbnail:
      "https://cdn.prod.website-files.com/5d83f4db894d70b084ded055/672277d58c8fabd88142c671_Green%20Pace%20Financial.png",
  },
  {
    id: 2,
    name: "CHARTERIE",
    company: "APP LAYS",
    service: "Software Development",
    role: "Corporating",
    stats: [
      "$15,000 in closed deals in 2 months",
      "$24,545 revenue generated in 3 months",
    ],
    videoUrl: "https://player.vimeo.com/video/1024463377",
    thumbnail:
      "https://cdn.prod.website-files.com/5d83f4db894d70b084ded055/672277d58c8fabd88142c671_Green%20Pace%20Financial.png",
  },
  {
    id: 3,
    name: "MIDDEN VIRTIV",
    company: "PRIEST PACE FINANCIAL",
    service: "Financial Services",
    role: "FULL TO FILE",
    stats: ["45 clients onboarded in 3 months", "$120K in revenue generated"],
    videoUrl: "https://player.vimeo.com/video/1024463377",
    thumbnail:
      "https://cdn.prod.website-files.com/5d83f4db894d70b084ded055/672277d58c8fabd88142c671_Green%20Pace%20Financial.png",
  },
  {
    id: 4,
    name: "SOME SAW/SAIN",
    company: "Cleverly",
    service: "Sistema Management",
    role: "Consulting",
    stats: [
      "$15,000 in closed deals in 2 months",
      "95% client satisfaction rate",
    ],
    videoUrl: "https://player.vimeo.com/video/1024463377",
    thumbnail:
      "https://cdn.prod.website-files.com/5d83f4db894d70b084ded055/672277d58c8fabd88142c671_Green%20Pace%20Financial.png",
  },
];

export default function TestimonialsSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg transition-all duration-300 font-semibold flex items-center mx-auto hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>Show More Success Stories</span>
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
