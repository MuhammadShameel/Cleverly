import React from "react";

const CheckmarkIcon = () => (
  <svg
    className="min-w-6 h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM9.70711 11.2426C9.31658 10.8521 8.68342 10.8521 8.29289 11.2426C7.90237 11.6331 7.90237 12.2663 8.29289 12.6568L11.1213 15.4852L16.0711 10.5355C16.4616 10.145 16.4616 9.5118 16.0711 9.12128C15.6805 8.73076 15.0474 8.73076 14.6569 9.12128L11.1213 12.6568L9.70711 11.2426Z"
      fill="#4000FF"
    ></path>
  </svg>
);

const CrossIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L10.5858 12L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L12 10.5858L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L13.4142 12L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L12 13.4142L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071Z"
      fill="#FF1010"
    ></path>
  </svg>
);

const helloListData = [
  "Clear lead criteria",
  "Data-backed strategy from top performers",
  "Hyper-personalized messaging",
  "Multi-channel approach",
  "Consistent lead nurturing",
  "Continuous tests and optimizing campaigns",
  "Leverage technology and automation",
  "The best new practices done for you",
];

const goodbyeListData = [
  "Low-quality leads",
  "Getting ghosted",
  "Poor targeting",
  "Generic messaging",
  "Ineffective follow-up",
  "Competition and saturation",
  "Poor targeting",
  "Adopting to prospecting trends",
];

const LinkedInSales = () => {
  return (
    <>
      <section className="lg:px-5 md:px-4 px-3 py-20 ">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2>10X your LinkedIn sales outreach, productivity, and results</h2>
            <p className="mt-5">
              We leverage high performing data from executing thousands of
              successful LinkedIn campaigns in every industry to target & engage
              your most qualified decision makers, driving them directly into
              your sales funnel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 py-6 my-10">
            <div className="flex flex-col  text-start py-16 px-7 rounded-sm shadow-[0_1.49px_5px_#7d6ba40d,_0_12.06px_17.87px_#6320ee05,_0_22.56px_33.42px_#6320ee05,_0_1.49px_2.21px_#7d6ba40d] bg-gradient-to-b from-[#fdfcff] to-[#faf8ff] border border-solid border-[#eff3f6]">
              <div className="content-wrapper">
                <h3 className="mb-2 !font-bold text-black">Say hello to:</h3>
                <ul className="mt-5">
                  {helloListData.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 mt-5">
                      <CheckmarkIcon />
                      <span className="lg:text-xl md:text-lg sm:text-[16px] text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col  text-start py-16 px-7 rounded-sm shadow-[0_1.49px_5px_#7d6ba40d,_0_12.06px_17.87px_#6320ee05,_0_22.56px_33.42px_#6320ee05,_0_1.49px_2.21px_#7d6ba40d] bg-gradient-to-b from-[#fdfcff] to-[#faf8ff] border border-solid border-[#eff3f6]">
              <div className="content-wrapper">
                <h3 className="mb-2 !font-bold text-black">Say goodbye to:</h3>
                <ul className="mt-5">
                  {goodbyeListData.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 mt-5">
                      <CrossIcon />
                      <span className="lg:text-xl md:text-lg sm:text-[16px] text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
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

export default LinkedInSales;
