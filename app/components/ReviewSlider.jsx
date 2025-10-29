// /app/components/ReviewSlider.js

"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// --- Helper Components for Icons ---

// A simple Star icon
const StarIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" />
  </svg>
);

// A simple Trustpilot logo
const TrustpilotLogo = ({ className }) => (
  <svg
    className={className}
    width="115"
    height="28"
    viewBox="0 0 115 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M104.594 16.5333H114.394L110.457 11.0533L114.394 5.68H104.594L100.657 11.0533L104.594 16.5333Z"
      fill="#00B67A"
    />
    <path
      d="M0.393799 5.68H10.1938L6.2568 11.0533L10.1938 16.5333H0.393799L4.3308 11.0533L0.393799 5.68Z"
      fill="#00B67A"
    />
    <path
      d="M23.5137 10.98C23.5137 7.76 21.0537 5.3 17.8337 5.3C14.6137 5.3 12.1537 7.76 12.1537 10.98C12.1537 14.2 14.6137 16.66 17.8337 16.66C21.0537 16.66 23.5137 14.2 23.5137 10.98ZM17.8337 14.36C16.3337 14.36 15.1137 13.14 15.1137 11.64V10.32C15.1137 8.82 16.3337 7.6 17.8337 7.6C19.3337 7.6 20.5537 8.82 20.5537 10.32V11.64C20.5537 13.14 19.3337 14.36 17.8337 14.36Z"
      fill="#191919"
    />
    <path
      d="M33.2738 5.68V16.12H30.3138V7.9H30.2538L27.1338 10.5V7.6L30.5538 5.68H33.2738Z"
      fill="#191919"
    />
    <path
      d="M40.9138 13.78L43.8738 5.68H46.9938L42.5538 16.12H39.5538L35.1138 5.68H38.2338L40.9138 13.78Z"
      fill="#191919"
    />
    <path
      d="M57.6738 13.84V16.12H49.8138V5.68H57.3738V7.96H52.7738V10.06H56.8338V12.34H52.7738V13.84H57.6738Z"
      fill="#191919"
    />
    <path d="M62.3537 5.68H65.3137V16.12H62.3537V5.68Z" fill="#191919" />
    <path
      d="M74.9538 5.68H77.9138V13.84H82.8138V16.12H74.9538V5.68Z"
      fill="#191919"
    />
    <path
      d="M93.3138 12.04L95.5938 5.68H98.6538L93.7338 16.12H90.5538L87.5538 10.24V16.12H84.5938V5.68H87.7938L90.7338 11.44L93.3138 12.04Z"
      fill="#191919"
    />
  </svg>
);

// Reusable 5-star rating component
const StarRating = () => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} className="w-6 h-6 text-[#00B67A]" />
    ))}
  </div>
);

// --- The Review Data ---
// You can easily add or remove reviews here
const reviewData = [
  {
    title: "created clarity for me",
    text: "created clarity for me",
    author: "Anthony",
    date: "October 10",
  },
  {
    title: "Friendly, Professional and Timely",
    text: "From first contact through to the kick-off, the team at Cleverly were friendly...",
    author: "Chris Sweeney",
    date: "October 8",
  },
  {
    title: "Trail Magic Production recommends Cl...",
    text: "Trail Magic Production is my company and I just started my Cleverly journey, Ri...",
    author: "Maddy",
    date: "October 1",
  },
  {
    title: "Excellent Service!",
    text: "So far, so good. The team has been very professional and the process was seamless.",
    author: "Jane Doe",
    date: "September 30",
  },
];

// --- The Main Slider Component ---
const ReviewSlider = () => {
  return (
    <section className="w-full py-12 px-4">
      <Swiper
        // Install modules
        modules={[Navigation, Autoplay]}
        // Navigation arrows
        navigation={true}
        // Autoplay
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // Looping
        loop={true}
        // Space between slides
        spaceBetween={30}
        // Responsive breakpoints
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper" // A custom class for styling
      >
        {/* Slide 1: Main Trustpilot Card */}
        <SwiperSlide>
          <div className="flex flex-col h-full space-y-2">
            <StarRating />
            <h3 className="text-2xl font-bold text-gray-900">Excellent</h3>
            <p className="text-sm text-gray-600">Based on 1,084 reviews</p>
            {/* <TrustpilotLogo className="mt-4" /> */}
          </div>
        </SwiperSlide>

        {/* Map over your review data for the rest of the slides */}
        {reviewData.map((review, index) => (
          <div className="flex flex-col h-full space-y-2 ">
            <SwiperSlide key={index}>
              <StarRating />
              <div>
                <h4 className="text-lg font-bold text-gray-900 truncate">
                  {review.title}
                </h4>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {review.text}
                </p>
                <p className="text-sm text-gray-500 pt-2">
                  {review.author}, {review.date}
                </p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewSlider;
