import React from "react";

import TestimonialSection from "../components/TestimonialsSection";

const ClientReviews = () => {
  return (
    <>
      <section className="hero-section bg-linear-to-b from-[#0d0033] to-[#3301cc] py-20 text-white lg:px-5 md:px-4 px-3">
        <div className="container mx-auto">
          <div className="text-center mx-auto">
            <div className="content-wrapper">
              <h1 className="py-3 font-bold max-w-4xl mx-auto font-geomanist">
                1,000+ Five-star Reviews
              </h1>
              <p className="py-3 max-w-3xl mx-auto">
                See our testimonials to experience the impact of our strategies
                through the eyes of our clients.
              </p>
            </div>
            <div className="mt-12 text-center mx-auto flex flex-col justify-center items-center">
              <button className="btn btn-orange">Free Consultaion</button>
            </div>
          </div>
        </div>
      </section>
      <TestimonialSection />
    </>
  );
};

export default ClientReviews;
