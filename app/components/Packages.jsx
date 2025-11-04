import React from "react";
import Image from "next/image";

import Check from "../../public/images/points.svg";

const silverPackageFeatures = [
  "Proven done-for-you campaigns",
  "Personalized outreach copy written",
];

const goldPackageFeatures = [
  "Proven done-for-you campaigns",
  "Personalized outreach copy written",
];

const platinumPackageFeatures = [
  "Proven done-for-you campaigns",
  "Personalized outreach copy written",
];

const Packages = () => {
  return (
    <>
      <section className="bg-[#f3f6ff] py-20 lg:px-5 md:px-4 px-3">
        <div className="container mx-auto">
          <div className="text-center mx-auto max-w-4xl">
            <h2>Pricing for LinkedIn lead generation</h2>
            <p className="mt-5">
              Ask about major discounts for teams accounts. Book a call to learn
              more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 py-6 my-10">
            <div className="flex flex-col items-center text-center  mx-auto p-12 bg-white rounded-lg">
              <h3 className="mb-2 text-[#3f00ff] font-bold!">Silver</h3>
              <span className="uppercase font-bold text-[16px] text-black">
                LINKEDIN OUTREACH + Proven sales expert
              </span>
              <div className="border-y border-[#dbe1e9] w-full py-5 my-5">
                <span className="text-2xl font-bold text-black">$397/mo</span>
              </div>
              <span className="uppercase text-[#3f00ff] font-bold">
                500 PROSPECTS PER MONTH
              </span>
              <ul className="mt-1.5 mb-10">
                {silverPackageFeatures.map((feature, index) => {
                  return (
                    <li className="flex text-[#252525] mb-1.5" key={index}>
                      <Image
                        src={Check}
                        alt=""
                        width={22}
                        height={22}
                        className="mr-3"
                      />
                      {feature}
                    </li>
                  );
                })}
              </ul>
              <div className="btn-wrapper text-center">
                <button className="btn btn-secondary mt-5 uppercase">
                  Get Started
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center text-center  mx-auto p-12 bg-white rounded-lg">
              <h3 className="mb-2 text-[#3f00ff] font-bold!">Gold</h3>
              <span className="uppercase font-bold text-[16px] text-black">
                LINKEDIN OUTREACH + Proven sales expert
              </span>
              <div className="border-y border-[#dbe1e9] w-full py-5 my-5">
                <span className="text-2xl font-bold text-black">$697/mo</span>
              </div>
              <span className="uppercase text-[#3f00ff] font-bold">
                500 PROSPECTS PER MONTH
              </span>
              <ul className="mt-1.5 mb-10">
                {goldPackageFeatures.map((feature, index) => {
                  return (
                    <li className="flex text-[#252525] mb-1.5" key={index}>
                      <Image
                        src={Check}
                        alt=""
                        width={22}
                        height={22}
                        className="mr-3"
                      />
                      {feature}
                    </li>
                  );
                })}
              </ul>
              <div className="btn-wrapper text-center">
                <button className="btn btn-secondary mt-5 uppercase">
                  Get Started
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center text-center  mx-auto p-12 bg-white rounded-lg">
              <h3 className="mb-2 text-[#3f00ff] font-bold!">Platinum</h3>
              <span className="uppercase font-bold text-[16px] text-black">
                LINKEDIN OUTREACH + Proven sales expert
              </span>
              <div className="border-y border-[#dbe1e9] w-full py-5 my-5">
                <span className="text-2xl font-bold text-black">$997/mo</span>
              </div>
              <span className="uppercase text-[#3f00ff] font-bold">
                500 PROSPECTS PER MONTH
              </span>
              <ul className="mt-1.5 mb-10">
                {platinumPackageFeatures.map((feature, index) => {
                  return (
                    <li className="flex text-[#252525] mb-1.5" key={index}>
                      <Image
                        src={Check}
                        alt=""
                        width={22}
                        height={22}
                        className="mr-3"
                      />
                      {feature}
                    </li>
                  );
                })}
              </ul>
              <div className="btn-wrapper text-center">
                <button className="btn btn-secondary mt-5 uppercase">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;
