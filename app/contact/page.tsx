import React from "react";
import { FaInstagram, FaLinkedin, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdFacebook } from "react-icons/md";

export default function Contact() {
  return (
    <div className="min-h-screen flex w-full justify-center items-center">
      <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-700 w-full max-w-4xl p-8 md:p-12 md:rounded-xl shadow-lg text-white overflow-hidden">
        <div className="flex flex-col space-y-8 justify-between">
          <div className="">
            <h2 className="font-bold text-4xl tracking-wide">Contact Us</h2>
            <p className="pt-2 text-cyan-100 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              totam beatae, culpa ratione inventore atque dicta quaerat at?
              Molestias totam voluptatem illo delectus odit quo consequatur
              vitae veritatis dolorem itaque.
            </p>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="inline-flex space-x-2 items-center">
              <FaPhoneAlt className="text-teal-300 text-xl" />
              <span className="">+(211) 900000000</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <MdEmail className="text-teal-300 text-xl" />
              <span className="">acotrot@gmail.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <FaLocationDot className="text-teal-300 text-xl" />
              <span className="">Juba, South Sudan</span>
            </div>
          </div>
          <div className="flex space-x-4 text-lg">
            <MdFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaXTwitter />
          </div>
        </div>
        <div className="relative">
          <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-20 -top-28"></div>
          <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-20 -bottom-16"></div>
          <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
            <form action="" className="flex flex-col space-y-4">
              <div className="">
                <label htmlFor="" className="text-sm">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div className="">
                <label htmlFor="" className="text-sm">
                  Email Address
                </label>

                <input
                  type="text"
                  placeholder="Your email"
                  className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div className="">
                <label htmlFor="" className="text-sm">
                  Message
                </label>

                <textarea
                  placeholder="Message"
                  className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  rows={4}
                ></textarea>
              </div>
              <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
