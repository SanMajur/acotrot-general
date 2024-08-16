"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return (
    <header className="bg-gray-100 text-gray-800 shadow-md fixed top-0 right-0 left-0 z-50">
      <nav className="lg:container mx-auto flex justify-between items-center relative px-8 py-2">
        <Logo />
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
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
              className="hover:bg-gray-400 py-4 cursor-pointer border-b border-gray-500 border-t"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link className="block px-8" href="/">
                Home
              </Link>
            </li>
            <li
              className="hover:bg-gray-400 py-4 cursor-pointer border-b border-gray-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link className="block px-8" href="/about">
                About
              </Link>
            </li>
            <li
              className=" hover:bg-gray-400 py-4 cursor-pointer border-b border-gray-500 "
              onClick={() => setDropdown(!dropdown)}
            >
              <h2 className=" px-8 flex justify-between items-center">
                Services{" "}
                <MdArrowDropUp
                  size={25}
                  className={`${dropdown ? "w-10" : "rotate-180"}`}
                />
              </h2>
              <ul className="px-12 hidden">
                <li className="hover:bg-gray-600 py-4 cursor-pointer">
                  <Link href="">Agriculture</Link>
                </li>
                <li className="hover:bg-gray-600 py-4 cursor-pointer">
                  <Link href="">Construction</Link>
                </li>
                <li className="hover:bg-gray-600 py-4 cursor-pointer">
                  <Link href="">Consumer Goods</Link>
                </li>
                <li className="hover:bg-gray-600 py-4 cursor-pointer">
                  <Link href="">Transportation</Link>
                </li>
                <li className="hover:bg-gray-600 py-4 cursor-pointer">
                  <Link href="">Well Drilling</Link>
                </li>
                <li className="hover:bg-gray-600 py-4 cursor-pointer">
                  <Link href="">Accomodation</Link>
                </li>
              </ul>
            </li>
            <li
              className=" hover:bg-gray-400 py-4 cursor-pointer border-b border-gray-500 "
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link className="block px-8" href="/contact">
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
