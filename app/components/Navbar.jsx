import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
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
          <ul className="flex">
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
          <div className="btn btn-primary">Free Consultation</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
