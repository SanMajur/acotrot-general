import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdFacebook } from "react-icons/md";

export default function ContactInfo() {
  return (
    <div className="flex flex-col space-y-8 justify-between">
      <div className="">
        <h2 className="font-bold text-4xl tracking-wide">Contact Us</h2>
        <p className="pt-2 text-cyan-50 text-sm max-w-80">
          Please enter the details of your request. A member of our support
          staff will respond as soon as possible.
        </p>
      </div>
      <div className="flex flex-col space-y-8">
        <div className="inline-flex space-x-2 items-center">
          <FaPhoneAlt className="text-teal-300 text-xl items-center justify-center" />
          <div className="flex flex-col">
            <span className="">+211 911 025 045 / +211 922 598 581 </span>
            <span className="">+211 910 866 787 / +254 727 269 988</span>
          </div>
        </div>
        <div className="inline-flex space-x-2 items-center">
          <MdEmail className="text-teal-300 text-xl" />
          <span className="">acotrotgeneraltrading@gmail.com</span>
        </div>
        <div className="inline-flex space-x-2 items-center">
          <FaLocationDot className="text-teal-300 text-xl" />
          <span className="">Aweil, Juba, & Wau South Sudan</span>
        </div>
      </div>
      <div className="flex space-x-4 text-lg">
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
    </div>
  );
}
