// src/components/SwiperMarquee.jsx
"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import AirBnb from "../../public/images/testimonials/airbnb.png";
import AirTable from "../../public/images/testimonials/airtable.png";
import Canva from "../../public/images/testimonials/canva.png";
import DocuSign from "../../public/images/testimonials/docusign.png";
import Ebay from "../../public/images/testimonials/ebay.png";
import Figma from "../../public/images/testimonials/figma.png";
import Google from "../../public/images/testimonials/google.png";
import Loom from "../../public/images/testimonials/loom.png";
import Monday from "../../public/images/testimonials/monday.png";
import PayPal from "../../public/images/testimonials/paypal.png";
import Reddit from "../../public/images/testimonials/reddit.png";
import SalesForce from "../../public/images/testimonials/salesforce.png";
import Slack from "../../public/images/testimonials/slack.png";
import Spotify from "../../public/images/testimonials/spotify.png";
import Stripe from "../../public/images/testimonials/stripe.png";
import Upwork from "../../public/images/testimonials/upwork.png";
import Webflow from "../../public/images/testimonials/webflow.png";
import Zapier from "../../public/images/testimonials/zapier.png";

import "swiper/css";
import "swiper/css/autoplay";

// Your image data
const images = [
  AirBnb,
  AirTable,
  Canva,
  DocuSign,
  Ebay,
  Figma,
  Google,
  Loom,
  Monday,
  PayPal,
  Reddit,
  SalesForce,
  Slack,
  Spotify,
  Stripe,
  Upwork,
  Webflow,
  Zapier,
];

export default function SwiperMarquee() {
  return (
    <section className="marquee w-full py-10">
      <Swiper
        // Swiper modules
        modules={[Autoplay]}
        // --- Core Marquee Settings ---

        // Loop forever
        loop={true}
        // Allow all slides to be visible
        slidesPerView={"auto"}
        unselectable="on"
        // No space between slides
        spaceBetween={0}
        // Center the slides (important for the loop)
        centeredSlides={true}
        // Allow touch interactions to slide
        allowTouchMove={false}
        // Disable pausing on hover
        autoplay={{
          delay: 0, // A very small delay to keep it moving
        }}
        // The animation speed
        speed={6000} // A higher number means a slower, smoother animation
      >
        {images.map((imageSrc, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <div className="img-wrapper h-[80px] flex-shrink-0 mx-7">
              <Image
                src={imageSrc}
                alt={`marquee-image-${index}`}
                width={120}
                height={80}
                className="rounded-md object-contain w-full h-full"
                unoptimized={true} // Add if using external URLs that aren't configured in next.config.js
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
