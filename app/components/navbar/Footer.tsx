import React from "react";
import Link from "next/link";
import { MdEmail, MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white p-4 ">
      <div className="lg:container mx-auto flex flex-col">
        <ul className="flex flex-col md:flex-row justify-center  items-center uppercase gap-2 md:gap-12 py-4">
          <li className="hover:text-gray-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link href="/about">About us</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link href="/contact">Contact us</Link>
          </li>
          <li className="hover:text-gray-600">
            <h2>Services</h2>
          </li>
          <li className="hover:text-gray-600">
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>

        <div className="flex flex-col lg:flex-row  justify-center lg:justify-between items-center lg:pb-4 md:px-8">
          <div className="flex gap-2 text-2xl lg:text-xl  items-center ">
            <Link href={"#"}>
              <MdFacebook className="text-gray-200 hover:text-gray-600" />
            </Link>
            <Link href={"#"}>
              <FaInstagram className="text-gray-200 hover:text-gray-600" />
            </Link>
            <Link href={"#"}>
              <FaLinkedin className="text-gray-200 hover:text-gray-600" />
            </Link>
            <Link href={"#"}>
              <FaXTwitter className="text-gray-200 hover:text-gray-600" />
            </Link>
          </div>
          <div className="py-2 lg:py-0">
            <p className="text-center  pt-2">
              &copy; 2024 Acotrot General Trading Co. ltd
            </p>
          </div>

          <div className="flex space-x-2 items-center">
            <FaLocationDot className="text-gray-300 text-xl" />
            <span className="">Aweil, Juba, & Wau South Sudan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
