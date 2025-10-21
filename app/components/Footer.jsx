import React from "react";
import Image from "next/image";

import Message from "../../public/images/message.png";
import LinkedIn from "../../public/images/linkedIn.png";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font my-10">
        <div className="container px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          {/* <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Tailblocks</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div> */}
          <div className="flex-grow flex flex-wrap  -mb-10 md:text-left text-center justify-center order-first">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li className="mb-4">
                  <a className="text-[#4b4b4b] hover:text-gray-800">
                    LinkedIn Lead Gen
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-[#4b4b4b] hover:text-gray-800">
                    Cold Calling Lead Gen
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-[#4b4b4b] hover:text-gray-800">
                    White-label Service
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-[#4b4b4b] hover:text-gray-800">
                    Cold Email Outreach
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li className="mb-4">
                  <a className="text-[#4b4b4b] hover:text-gray-800">
                    Client Reviews
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-[#4b4b4b] hover:text-gray-800">
                    Case Studies
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-[#4b4b4b] hover:text-gray-800">
                    Referral Program
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-[#4b4b4b] hover:text-gray-800">
                    LinkedIn Course
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li className="mb-4">
                  <a className="text-[#4b4b4b] hover:text-gray-800">FAQs</a>
                </li>
                <li className="mb-4">
                  <a className="text-[#4b4b4b] hover:text-gray-800">Blog</a>
                </li>
                <li className="mb-4">
                  <a className="text-[#4b4b4b] hover:text-gray-800">About</a>
                </li>
                <li className="mb-4">
                  <a className="text-[#4b4b4b] hover:text-gray-800">Careers</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-75 text-center px-4">
              <nav className="list-none mb-10 bg-[#fafafa] p-6 rounded-md ">
                <li className="mb-4 flex items-center">
                  <Image
                    src={Message}
                    alt=""
                    height={12}
                    width={12}
                    className="mr-2  w-3 h-3"
                  />
                  <a className="text-[#4b4b4b] hover:text-gray-800">
                    support@cleverly.co
                  </a>
                </li>
                <li className="mb-4 flex items-center">
                  <Image
                    src={Message}
                    alt=""
                    height={12}
                    width={12}
                    className="mr-2  w-3 h-3"
                  />
                  <a className="text-[#4b4b4b] hover:text-gray-800">
                    info@cleverly.co
                  </a>
                </li>
                <li className="mb-4 flex items-center">
                  <Image
                    src={LinkedIn}
                    alt=""
                    height={12}
                    width={12}
                    className="mr-2  w-3 h-3"
                  />
                  <a className="text-[#4b4b4b] hover:text-gray-800">Cleverly</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-2 px-5  flex-wrap flex-col sm:flex-row justify-center">
          <p className="text-[#969696] !text-[9px] text-center leading-[140%] mb-2">
            © Copyright 2025 Lead Generation, Inc. All rights reserved. Various
            trademarks held by their respective owners. <br />
          </p>
          <p className="text-[#969696] !text-[9px] text-center leading-[140%]">
            Cleverly is not a LinkedIn product. Cleverly is not endorsed by
            LinkedIn and is not affiliated with LinkedIn.
          </p>
          <div className="">
            <ul className="flex justify-center gap-10 mt-2 text-[#333c]">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
