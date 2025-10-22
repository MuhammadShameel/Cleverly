import React from "react";
import Image from "next/image";

import Stars from "../../public/images/stars.png";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section bg-gradient-to-b from-[#0d0033] to-[#3301cc] py-20 text-white lg:px-5 md:px-4 px-3">
        <div className="container mx-auto">
          <div className="text-center mx-auto">
            <div className="content-wrapper">
              <h1 className="py-3 font-bold max-w-4xl mx-auto">
                Scale your leads on LinkedIn and get B2B meetings that turn into
                predictable revenue, done-for-you.
              </h1>
              <p className="py-3 max-w-3xl mx-auto">
                Cleverly uses data from thousands of outbound B2B campaigns to
                send proven, personalized messages to your dream clients on
                LinkedIn — getting positive responses straight to your inbox.
              </p>
            </div>
            <div className="mt-20 text-center mx-auto flex flex-col justify-center items-center">
              <p className="!text-[14px]">#1 LinkedIn Lead Generation Agency</p>
              <button className="btn btn-orange my-3">Free Consultaion</button>
              <Image src={Stars} alt="" width={200} height={200} />
              <ul className="lg:flex md:flex-row flex-col gap-10 pt-10">
                <li className="lg:my-0 my-5">
                  <span className="text-[1.5rem] font-bold">224.7 K</span>
                  <p>Client leads generated</p>
                </li>
                <li className="lg:my-0 my-5">
                  <span className="text-[1.5rem] font-bold">$51.2 M</span>
                  <p>Client revenue generated</p>
                </li>
                <li className="lg:my-0 my-5">
                  <span className="text-[1.5rem] font-bold">$312 M</span>
                  <p>Client pipeline generated</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
