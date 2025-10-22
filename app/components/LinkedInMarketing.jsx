import React from "react";
import Image from "next/image";

import Search from "../../public/images/card-search.png";
import Write from "../../public/images/write.png";
import Internet from "../../public/images/internet.png";

const LinkedInMarketing = () => {
  return (
    <>
      <section className="bg-[#f3f6ff] py-20 lg:px-5 md:px-4 px-3">
        <div className="container mx-auto">
          <div className="text-center mx-auto max-w-4xl">
            <h2>
              Leverage the top LinkedIn marketing experts to actually drive
              closed deals
            </h2>
            <p className="mt-5">
              Crafting the right LinkedIn outreach strategy takes continuous
              optimization. Let our experts help you discover hidden sales
              opportunities so you can close more deals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 py-6 my-10">
            <div className="flex flex-col lg:items-start lg:text-left items-center text-center max-w-sm mx-auto p-6 lg:py-0 lg:border-l-4 lg:border-t-0 border-t-4 border-[#3f00ff]">
              <Image
                src={Search}
                alt="Placeholder"
                className="w-24 h-24 rounded-full mb-4"
                width={24}
                height={24}
                unoptimized={true}
              />
              <h3 className="mb-2 !font-bold">
                Attract hundreds of hot leads on LinkedIn
              </h3>
              <p className="text-gray-600 !text-[16px]">
                Once your campaign has started, you can then expect dozens or
                even hundreds of hot leads per month, all generated on
                auto-pilot.
              </p>
            </div>

            <div className="flex flex-col lg:items-start lg:text-left items-center text-center max-w-sm mx-auto p-6 lg:py-0 lg:border-l-4 lg:border-t-0 border-t-4 border-[#3f00ff]">
              <Image
                src={Write}
                alt="Placeholder"
                className="w-24 h-24 rounded-full mb-4"
                width={24}
                height={24}
                unoptimized={true}
              />
              <h3 className="mb-2 !font-bold">
                Learn how to be an expert at LinkedIn selling
              </h3>
              <p className="text-gray-600 !text-[16px]">
                We're more than just a LinkedIn lead generation tool. We'll
                teach you all our best practices when it comes to closing deals
                on LinkedIn.
              </p>
            </div>

            <div className="flex flex-col lg:items-start lg:text-left items-center text-center max-w-sm mx-auto p-6 lg:py-0 lg:border-l-4 lg:border-t-0 border-t-4 border-[#3f00ff]">
              <Image
                src={Internet}
                alt="Placeholder"
                className="w-24 h-24 rounded-full mb-4"
                width={24}
                height={24}
                unoptimized={true}
              />
              <h3 className="mb-2 !font-bold">
                U.S. based dedicated Account Managers
              </h3>
              <p className="text-gray-600 !text-[16px]">
                We are committed to your success and will support you through
                weekly reporting, monthly strategy calls and ongoing campaign
                improvements.
              </p>
            </div>
          </div>
          <div className="btn-wrapper text-center">
            <button className="btn btn-secondary mt-5">
              Free Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LinkedInMarketing;
