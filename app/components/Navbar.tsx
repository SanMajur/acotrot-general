"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Divide as Hamburger } from "hamburger-react";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-gray-100 text-gray-900 shadow-md fixed top-0 right-0 left-0 z-50">
      <nav className="lg:container mx-auto flex justify-between items-center relative px-8 py-2">
        <Logo />
        <button
          className="lg:hidden text-blue-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </button>
        {/* Mobile Nav */}
        <div
          className={`bg-black/50  ${
            isOpen
              ? "absolute top-[5.25rem]  w-full left-0 h-screen lg:hidden transition-all duration-500 ease-in-out"
              : " absolute top-[5.25rem]  w-full  -left-[100%] h-screen lg:hidden transition-all duration-500 ease-in-out"
          }`}
        >
          <ul
            className="block bg-gray-800 w-60 h-screen text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <li className="hover:bg-gray-400 py-4 cursor-pointer border-b border-gray-500 border-t">
              <Link className="block px-8" href="/">
                Home
              </Link>
            </li>
            <li className="hover:bg-gray-400 py-4 cursor-pointer border-b border-gray-500">
              <Link className="block px-8" href="/about">
                About
              </Link>
            </li>
            <li className=" hover:bg-gray-400 py-4 cursor-pointer border-b border-gray-500 ">
              <Link className="block px-8" href="/services">
                Services
              </Link>
            </li>
            <li className=" hover:bg-gray-400 py-4 cursor-pointer border-b border-gray-500 ">
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
