"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import { MdArrowDropUp } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  return (
    <header className="bg-gray-100 text-gray-800 shadow-md fixed top-0 right-0 left-0 z-50">
      <nav className="lg:container mx-auto flex justify-between items-center relative px-8 py-2">
        <Logo />
        <button className="lg:hidden text-gray-700 focus:outline-none">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </button>
        {/* Mobile Nav */}
        <div
          className={`absolute bg-black/60 top-[5.25rem] z-50 w-full h-screen lg:hidden transition-all duration-500 ease-in-out ${
            isOpen ? " left-0" : "-left-full "
          }`}
        >
          {/* isOpen
               ? "absolute top-[5.25rem] z-50 pointer-events-none   w-full left-0 h-screen lg:hidden transition-all duration-500 ease-in-out"
              : " absolute top-[5.25rem] z-50 pointer-events-none   w-full  -left-[100%] h-screen lg:hidden transition-all duration-500 ease-in-out" */}

          <ul className="block bg-gray-800 w-60 h-screen text-white">
            <li
              className="hover:bg-gray-700 py-4 cursor-pointer border-b border-gray-500 border-t"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link
                className="block px-8"
                href="/"
                onClick={() => setIsDropdown(!isDropdown)}
              >
                Home
              </Link>
            </li>
            <li
              className="hover:bg-gray-700 py-4 cursor-pointer border-b border-gray-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link
                className="block px-8"
                href="/about"
                onClick={() => setIsDropdown(!isDropdown)}
              >
                About
              </Link>
            </li>
            <li
              className=" hover:bg-gray-700  cursor-pointer border-b border-gray-500 "
              onClick={() => setIsDropdown(!isDropdown)}
            >
              <h2 className="px-8 py-4 flex justify-between items-center">
                Our Products{" "}
                <MdArrowDropUp
                  size={25}
                  className={`w-10 ${
                    isDropdown
                      ? "transition-all duration-500 ease-in-out"
                      : "rotate-180 transition-all duration-500 ease-in-out"
                  }`}
                />
              </h2>
              <ul
                className={`transition-all duration-500 ease-in-out ${
                  isDropdown
                    ? "block transition-all duration-500 ease-in-out"
                    : " hidden transition-all duration-500 ease-in-out"
                }`}
              >
                <li
                  className="hover:bg-gray-600 py-4 cursor-pointer px-12 block"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link href="../../our-products/agriculture" className="block">
                    Agriculture
                  </Link>
                </li>
                <li
                  className="hover:bg-gray-600 py-4 cursor-pointer px-12 "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link
                    href="../../our-products/construction"
                    className="block"
                  >
                    Construction
                  </Link>
                </li>
                <li
                  className="hover:bg-gray-600 py-4 cursor-pointer px-12 "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link
                    href="../../our-products/consumer-goods"
                    className="block"
                  >
                    Consumer Goods
                  </Link>
                </li>
                <li
                  className="hover:bg-gray-600 py-4 cursor-pointer px-12 "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link
                    href="../../our-products/transportation"
                    className="block"
                  >
                    Transportation
                  </Link>
                </li>
                <li
                  className="hover:bg-gray-600 py-4 cursor-pointer px-12 "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link
                    href="../../our-products/well-drilling"
                    className="block"
                  >
                    Well Drilling
                  </Link>
                </li>
                <li
                  className="hover:bg-gray-600 py-4 cursor-pointer px-12 "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link
                    href="../../our-products/accomodation"
                    className="block"
                  >
                    Accomodation
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className=" hover:bg-gray-700  cursor-pointer border-b border-gray-500 "
              onClick={() => setIsDropdown(!isDropdown)}
            >
              <h2 className="px-8 py-4 flex justify-between items-center">
                Services{" "}
                <MdArrowDropUp
                  size={25}
                  className={`w-10 ${
                    isDropdown
                      ? "transition-all duration-500 ease-in-out"
                      : "rotate-180 transition-all duration-500 ease-in-out"
                  }`}
                />
              </h2>
              <ul
                className={`transition-all duration-500 ease-in-out ${
                  isDropdown
                    ? "block transition-all duration-500 ease-in-out"
                    : " hidden transition-all duration-500 ease-in-out"
                }`}
              >
                <li
                  className="hover:bg-gray-600 py-4 cursor-pointer px-12 block"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link href="../../services/agriculture" className="block">
                    Agriculture
                  </Link>
                </li>
                <li
                  className="hover:bg-gray-600 py-4 cursor-pointer px-12 "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link href="../../services/construction" className="block">
                    Construction
                  </Link>
                </li>
                <li
                  className="hover:bg-gray-600 py-4 cursor-pointer px-12 "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link href="../../services/consumer-goods" className="block">
                    Consumer Goods
                  </Link>
                </li>
                <li
                  className="hover:bg-gray-600 py-4 cursor-pointer px-12 "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link href="../../services/transportation" className="block">
                    Transportation
                  </Link>
                </li>
                <li
                  className="hover:bg-gray-600 py-4 cursor-pointer px-12 "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link href="../../services/well-drilling" className="block">
                    Well Drilling
                  </Link>
                </li>
                <li
                  className="hover:bg-gray-600 py-4 cursor-pointer px-12 "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link href="../../services/accomodation" className="block">
                    Accomodation
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className=" hover:bg-gray-700 py-4 cursor-pointer border-b border-gray-500 "
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link
                className="block px-8"
                href="/contact"
                onClick={() => setIsDropdown(!isDropdown)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <DesktopNav />
      </nav>
    </header>
  );
}
