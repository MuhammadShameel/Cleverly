// /app/components/Navbar.jsx

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Reusable SVG Components ---
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
// --- End of SVG Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Stop background scroll when mobile menu is open
  useEffect(() => {
    // This effect is not strictly needed for this menu type,
    // but good to keep if your menu list becomes long.
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
    // nav is sticky, z-50 (on top), with a white background
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2">
          {/* === Logo === */}
          <Link href={"/"} className="logo-wrapper">
            <Image
              src={"/images/logo.svg"}
              alt="Cleverly Logo"
              width={150}
              height={50}
            />
          </Link>

          {/* === Centered Desktop Menu === */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex">
              <li className="nav-link px-[12.8px]! py-3.5">
                <Link href={""}>Services</Link>
              </li>
              <li className="nav-link px-[12.8px]! py-3.5">
                <Link href={""}>Results</Link>
              </li>
              <li className="nav-link px-[12.8px]! py-3.5">
                <Link href={""}>Pricing</Link>
              </li>
              <li className="nav-link px-[12.8px]! py-3.5">
                <Link href={""}>Cold Email</Link>
              </li>
              <li className="nav-link px-[12.8px]! py-3.5">
                <Link href={""}>Resources</Link>
              </li>
            </ul>
          </div>

          {/* === Desktop Buttons === */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="btn btn-primary">Free Consultation</button>
          </div>

          {/* === Mobile Toggle Button === */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center z-50 w-10 h-10"
            aria-label="Toggle menu"
          >
            {/* This toggle logic is now correct.
              When the menu slides down, the toggle is part of the
              sticky nav, so it remains visible.
            */}
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* === Mobile Menu (Slide-down from navbar) === */}
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
          {/* We use the styling from your image (white bg, etc.) */}
          <ul className="flex flex-col pb-6">
            <li className="border-b border-gray-200">
              <Link
                href={""}
                className="flex justify-between items-center text-black font-bold text-lg py-4"
                onClick={() => setIsOpen(false)}
              >
                Services
                <DropdownArrowIcon />
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                href={""}
                className="flex justify-between items-center text-black font-bold text-lg py-4"
                onClick={() => setIsOpen(false)}
              >
                Results
                <DropdownArrowIcon />
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                href={""}
                className="flex justify-between items-center text-black font-bold text-lg py-4"
                onClick={() => setIsOpen(false)}
              >
                Pricing
                <DropdownArrowIcon />
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                href={""}
                className="text-black font-bold text-lg py-4 flex"
                onClick={() => setIsOpen(false)}
              >
                Cold Email
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                href={""}
                className="flex justify-between items-center text-black font-bold text-lg py-4"
                onClick={() => setIsOpen(false)}
              >
                Resources
                <DropdownArrowIcon />
              </Link>
            </li>

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
