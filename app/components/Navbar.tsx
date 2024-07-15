"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Divide as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-gray-800 text-white">
      <nav className="md:container mx-auto flex justify-between items-center relative p-4">
        <div className="text-2xl font-bold">Acotrot</div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </button>
        {/* Mobile Nav */}
        <div
          className={`bg-black/50 ${
            isOpen
              ? "absolute top-20 w-full left-0 h-screen md:hidden transition-all duration-500 ease-in-out"
              : " absolute top-20 w-full -left-[100%] h-screen md:hidden transition-all duration-500 ease-in-out"
          }`}
        >
          <ul
            className="block bg-gray-800 w-60 h-screen"
            onClick={() => setIsOpen(!isOpen)}
          >
            <li className="px-4 hover:bg-gray-400 py-4 cursor-pointer border-b-2 border-gray-500 ">
              <Link className="" href="/">
                Home
              </Link>
            </li>
            <li className="px-4 hover:bg-gray-400 py-4 cursor-pointer border-b-2 border-gray-500 ">
              <Link className="" href="/about">
                About
              </Link>
            </li>
            <li className="px-4 hover:bg-gray-400 py-4 cursor-pointer border-b-2 border-gray-500 ">
              <Link className="" href="/services">
                Services
              </Link>
            </li>
            <li className="px-4 hover:bg-gray-400 py-4 cursor-pointer border-b-2 border-gray-500 ">
              <Link className="" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Desktop nav */}
        <ul className="hidden md:flex ">
          <li className="px-4 hover:border-b-2 border-cyan-600 py-4 cursor-pointer">
            <Link className="" href="/">
              Home
            </Link>
          </li>
          <li className="px-4 hover:border-b-2 border-cyan-600 py-4 cursor-pointer">
            <Link className="" href="/about">
              About
            </Link>
          </li>
          <li className="px-4 hover:border-b-2 border-cyan-600 py-4 cursor-pointer">
            <Link className="" href="/services">
              Services
            </Link>
          </li>
          <li className="px-4 hover:border-b-2 border-cyan-600 py-4 cursor-pointer">
            <Link className="" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
