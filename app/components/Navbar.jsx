// /app/components/Navbar.jsx

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const CloseIcon = ({ ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.5 22.5L7.5 7.5"
      stroke="#161616"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M22.5 7.5L7.5 22.5"
      stroke="#161616"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

const HamburgerIcon = ({ ...props }) => (
  <div
    className="w-10 h-10 bg-[#3f00ff] rounded-full flex items-center justify-center"
    {...props}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25 21.25H23.75"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M6.25 15H23.75"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M6.25 8.75H23.75"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </div>
);

const DropdownArrowIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-1"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="#4001ff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconLinkedInLead = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12ZM12 14C8.68629 14 6 16.6863 6 20H18C18 16.6863 15.3137 14 12 14Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
const IconContentService = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM16 13H8V11H16V13ZM16 17H8V15H16V17Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
const IconWhiteLabel = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 13V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V13H21ZM3 11V4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V11H3ZM1 11H23"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
const IconColdEmail = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 10L21 7L17 3L14 6M18 10L13 15L9 11L4 16M18 10L14 6"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
const IconPaidAds = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8C14.2091 8 16 6.20914 16 4C16 1.79086 14.2091 0 12 0C9.79086 0 8 1.79086 8 4C8 6.20914 9.79086 8 12 8ZM21 24V22C21 18.134 17.866 15 14 15H10C6.13401 15 3 18.134 3 22V24H21ZM12 13C15.3137 13 18 10.3137 18 7H6C6 10.3137 8.68629 13 12 13Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
const IconColdCalling = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.364 2.63604C19.9264 4.1984 20.9999 6.264 20.9999 8.5C20.9999 10.736 19.9264 12.8016 18.364 14.364M15.5355 5.46447C16.5052 6.43414 17.0908 7.7347 17.0908 9.09086C17.0908 10.447 16.5052 11.7476 15.5355 12.7173M12.7071 8.29289C13.0976 8.68342 13.0976 9.31658 12.7071 9.70711C12.3166 10.0976 11.6834 10.0976 11.2929 9.70711C10.9024 9.31658 10.9024 8.68342 11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const navLinks = [
  { id: 1, text: "Services", href: "/services", hasDropdown: true },
  { id: 2, text: "Results", href: "/results", hasDropdown: true },
  { id: 3, text: "Pricing", href: "/pricing", hasDropdown: true },
  { id: 4, text: "Cold Email", href: "/cold-email", hasDropdown: false },
  { id: 5, text: "Resources", href: "/resources", hasDropdown: true },
];

const servicesLinks = [
  {
    id: 1,
    text: "LinkedIn Lead Generation",
    href: "/",
    icon: IconLinkedInLead,
  },
  {
    id: 2,
    text: "LinkedIn Content Service",
    href: "/services/linkedin-content",
    icon: IconContentService,
  },
  {
    id: 3,
    text: "White-label Lead Generation",
    href: "/services/white-label",
    icon: IconWhiteLabel,
  },
  {
    id: 4,
    text: "Cold Email Lead Generation",
    href: "/services/cold-email",
    icon: IconColdEmail,
  },
  {
    id: 5,
    text: "LinkedIn Paid Advertising",
    href: "/services/linkedin-ads",
    icon: IconPaidAds,
  },
  {
    id: 6,
    text: "Cold Calling Lead Generation",
    href: "/services/cold-calling",
    icon: IconColdCalling,
  },
];

const resultLinks = [
  {
    id: 7,
    text: "Reviews",
    href: "/client-reviews",
    icon: IconLinkedInLead,
  },
  {
    id: 8,
    text: "Testimonials",
    href: "/client-reviews",
    icon: IconContentService,
  },
  {
    id: 9,
    text: "Case Studies",
    href: "/services/white-label",
    icon: IconWhiteLabel,
  },
  {
    id: 10,
    text: "Compare",
    href: "/services/cold-email",
    icon: IconColdEmail,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md font-geomanist">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2">
          <Link href={"/"} className="logo-wrapper">
            <Image
              src={"/images/logo.svg"}
              alt="Cleverly Logo"
              width={150}
              height={50}
            />
          </Link>

          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex">
              {navLinks.map((link) => (
                <li key={link.id} className="relative group">
                  {link.id === 1 ? (
                    <>
                      <Link
                        href={link.href}
                        className="nav-link  px-[12.8px]! py-3.5 flex items-center gap-1.5 transition-colors duration-200 rounded-[20px] group-hover:bg-[#4001ff] group-hover:text-white!"
                      >
                        {link.text}
                      </Link>

                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4
                                   group-hover:block z-100
                                  transition-opacity duration-300"
                      >
                        <div
                          className="bg-linear-to-b hidden group-hover:block from-[#f5f1ff] to-[#eae3ff] border-2 border-[#4001ff] rounded-2xl shadow-lg
                                    w-max opacity-0 group-hover:opacity-100 p-8"
                        >
                          <div className="grid grid-cols-2 gap-x-12 divide-x divide-purple-200">
                            <div className="flex flex-col gap-6 pr-12">
                              {servicesLinks.slice(0, 3).map((service) => (
                                <Link
                                  key={service.id}
                                  href={service.href}
                                  className="flex items-center gap-3 group/item text-[18px]!"
                                >
                                  <service.icon className="w-6 h-6 text-[#4001ff] transition-colors" />
                                  <span className="text-black font-medium group-hover/item:text-[#4001ff] transition-colors">
                                    {service.text}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <div className="flex flex-col gap-6 ">
                              {servicesLinks.slice(3, 6).map((service) => (
                                <Link
                                  key={service.id}
                                  href={service.href}
                                  className="flex items-center gap-3 group/item text-[18px]!"
                                >
                                  <service.icon className="w-6 h-6 text-[#4001ff] transition-colors" />
                                  <span className="text-black font-medium group-hover/item:text-[#4001ff] transition-colors">
                                    {service.text}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : link.id === 2 ? (
                    <>
                      <Link
                        href={link.href}
                        className="nav-link px-[12.8px] py-3.5 flex items-center gap-1.5 transition-colors duration-200 rounded-[20px] group-hover:bg-[#4001ff] group-hover:text-white!"
                      >
                        {link.text}
                      </Link>

                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4
                                  hidden group-hover:block z-100
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div
                          className="bg-linear-to-b from-[#f5f1ff] to-[#eae3ff] border-2 border-[#4001ff] rounded-2xl shadow-lg
                                    w-max p-8"
                        >
                          <div className="grid grid-cols-1 gap-x-12">
                            <div className="flex flex-col gap-6">
                              {resultLinks.map((result) => (
                                <Link
                                  key={result.id}
                                  href={result.href}
                                  className="flex items-center gap-3 group/item text-[18px]"
                                >
                                  <result.icon className="w-6 h-6 text-[#4001ff] transition-colors" />
                                  <span className="text-black font-medium group-hover/item:text-[#4001ff] transition-colors">
                                    {result.text}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={link.href} className="nav-link p-3.5">
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="btn btn-primary">Free Consultation</button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center z-50 w-10 h-10"
            aria-label="Toggle menu"
          >
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      <div
        className={`absolute top-full left-0 right-0 
                  bg-white shadow-lg 
                  transition-all duration-300 ease-in-out 
                  lg:hidden z-40
                  ${
                    isOpen
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
      >
        <div className="container mx-auto">
          <ul className="flex flex-col pb-6">
            {navLinks.map((link) => (
              <li key={link.id} className="border-b border-gray-200">
                <Link
                  href={link.href}
                  className="flex justify-between items-center text-black font-bold text-lg py-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                  {link.hasDropdown && (
                    <DropdownArrowIcon className="text-[#4001ff]" />
                  )}
                </Link>
              </li>
            ))}

            <li className="pt-4">
              <button className="btn btn-primary text-center w-full">
                Free Consultation
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
