import React from "react";
import Image from "next/image";

import Search from "../../public/images/card-search.png";
import Write from "../../public/images/write.png";
import Internet from "../../public/images/internet.png";
import Deal from "../../public/images/deal.png";

const GenerateLeads = () => {
  return (
    <>
      <section className="bg-[#f3f6ff] py-20 lg:px-5 md:px-4 px-3">
        <div className="container mx-auto">
          <div className="text-center mx-auto max-w-4xl">
            <h2>How we generate leads for clients</h2>
            <p className="mt-5">
              We leverage high performing data from executing thousands of
              successful LinkedIn campaigns in every industry to target & engage
              your most qualified decision makers, driving them directly into
              your sales funnel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 my-10">
            <div className="flex flex-col items-center text-center py-6 px-6">
              <Image
                src={Search}
                alt="Placeholder"
                className="w-24 h-24 rounded-full mb-4"
                width={24}
                height={24}
                unoptimized={true}
              />
              <h3 className="mb-2 !font-bold">1. Find Prospects</h3>
              <p className="text-gray-600 !text-[16px]">
                We build targeted and qualified lists of your ideal prospects on
                LinkedIn
              </p>
            </div>

            <div className="flex flex-col items-center text-center py-6 px-6">
              <Image
                src={Write}
                alt="Placeholder"
                className="w-24 h-24 rounded-full mb-4"
                width={24}
                height={24}
                unoptimized={true}
              />
              <h3 className="mb-2 !font-bold">2. Write Messages</h3>
              <p className="text-gray-600 !text-[16px]">
                We write clear, personal cold outreach messages that actually
                get responses
              </p>
            </div>

            <div className="flex flex-col items-center text-center py-6 px-6">
              <Image
                src={Internet}
                alt="Placeholder"
                className="w-24 h-24 rounded-full mb-4"
                width={24}
                height={24}
                unoptimized={true}
              />
              <h3 className="mb-2 !font-bold">3. Execute Outreach</h3>
              <p className="text-gray-600 !text-[16px]">
                We send custom messages to thousands of your ideal prospects
              </p>
            </div>

            <div className="flex flex-col items-center text-center py-6 px-6">
              <Image
                src={Deal}
                alt="Placeholder"
                className="w-24 h-24 rounded-full mb-4"
                width={24}
                height={24}
                unoptimized={true}
              />
              <h3 className="mb-2 !font-bold">4. Close Deals</h3>
              <p className="text-gray-600 !text-[16px]">
                You're instantly notified when leads respond, for you to close
                the deal
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

export default GenerateLeads;
