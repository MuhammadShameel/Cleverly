// /app/components/Navbar.jsx

"use client"; // Required for using React Hooks (useState)
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // State to manage the mobile menu's open/closed status
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Add z-50 to the nav to ensure it stays above the slide-down menu (which will be z-40)
    <nav className="relative z-50 lg:px-5 md:px-4 px-3">
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

          {/* === Desktop Menu === */}
          <ul className="hidden lg:flex">
            <li className="nav-link p-3.5">
              <Link href={""}>Services</Link>
            </li>
            <li className="nav-link p-3.5">
              <Link href={""}>Results</Link>
            </li>
            <li className="nav-link p-3.5">
              <Link href={""}>Pricing</Link>
            </li>
            <li className="nav-link p-3.5">
              <Link href={""}>Cold Email</Link>
            </li>
            <li className="nav-link p-3.5">
              <Link href={""}>Resources</Link>
            </li>
          </ul>

          {/* === Desktop Button === */}
          <button className="btn btn-primary !hidden lg:block">
            Free Consultation
          </button>

          {/* === Mobile Toggle Button === */}
          {/* This button will stay visible on top of the menu (z-50) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block lg:hidden z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // Cross Icon (when menu is open)
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 22.5L7.5 7.5"
                  stroke="#161616" // Dark stroke for visibility
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
            ) : (
              // Hamburger Icon (in the purple circle)
              <div className="w-10 h-10 bg-[#3f00ff] rounded-full flex items-center justify-center">
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
            )}
          </button>
        </div>
      </div>

      {/* === Mobile Menu (Slide-down) === 
        CHANGES:
        1. 'top-0 left-0 h-full w-full': Makes it full screen.
        2. 'z-40': Places it *behind* the navbar (which is z-50).
        3. 'pt-20': Adds padding to the top so content starts *below* the navbar.
        4. '${isOpen ? "translate-y-0" : "-translate-y-full"}`: Animates vertically.
      */}
      <div
        className={`fixed top-0 left-0 h-full w-full 
                  bg-[#251e41] p-6 pt-20 
                  transform transition-transform duration-300 ease-in-out z-40
                  ${isOpen ? "translate-y-0" : "-translate-y-full"}
                  lg:hidden`}
      >
        {/* Mobile Menu Links (vertical layout) */}
        <ul className="flex flex-col space-y-4">
          <li>
            <Link
              href={""}
              className="text-white text-2xl font-bold p-3.5"
              onClick={() => setIsOpen(false)} // Closes menu on click
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="text-white text-2xl font-bold p-3.5"
              onClick={() => setIsOpen(false)} // Closes menu on click
            >
              Results
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="text-white text-2xl font-bold p-3.5"
              onClick={() => setIsOpen(false)} // Closes menu on click
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="text-white text-2xl font-bold p-3.5"
              onClick={() => setIsOpen(false)} // Closes menu on click
            >
              Cold Email
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="text-white text-2xl font-bold p-3.5"
              onClick={() => setIsOpen(false)} // Closes menu on click
            >
              Resources
            </Link>
          </li>
          {/* Mobile "Free Consultation" Button */}
          <li className="pt-6">
            <div className="btn btn-primary text-center">Free Consultation</div>
          </li>
        </ul>
      </div>

      {/* The backdrop is no longer needed because the menu itself is full-screen */}
    </nav>
  );
};

export default Navbar;
