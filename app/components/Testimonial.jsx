import React from "react";
import SwiperMarquee from "./Marquee";

const Testimonial = () => {
  return (
    <>
      <section className="py-20">
        <div className="lg:px-5 md:px-4 px-3 ">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h2>LinkedIn leads won for 10,000+ clients</h2>
            </div>
          </div>
        </div>
        <SwiperMarquee />
      </section>
    </>
  );
};

export default Testimonial;
