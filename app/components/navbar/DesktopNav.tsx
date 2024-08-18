import Link from "next/link";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";

export default function DesktopNav() {
  return (
    <ul className="hidden lg:flex ">
      <li className="px-4 hover:border-b-2 border-cyan-600 py-4 cursor-pointer">
        <Link className="scroll-mt-20" href="/">
          Home
        </Link>
      </li>
      <li className="px-4 hover:border-b-2 border-cyan-600 py-4 cursor-pointer">
        <Link className="scroll-mt-20" href="/about">
          About
        </Link>
        <li
          id="bouton"
          className="p-4 cursor-pointer relative  flex flex-col justify-center group/bouton"
        >
          <h2 className="flex justify-between items-center relative w-full">
            Services
            <MdArrowDropDown
              size={25}
              className="group-hover/bouton:rotate-180"
            />
          </h2>
          <ul className="absolute w-60  top-full -right-[4.5rem] bg-gray-100 origin-top opacity-0 hidden  group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all duration-300 ease-in-out items-center flex-col justify-center">
            <li className="border-b border-stone-200  w-full">
              <Link
                href="../../services/agriculture"
                className="block px-8 py-4 text-center"
              >
                Agriculture
              </Link>
            </li>
            <li className="w-full border-b border-stone-200">
              <Link
                href="../../services/construction"
                className="block px-8 py-4 text-center"
              >
                Construction
              </Link>
            </li>
            <li className="w-full border-b border-stone-200">
              <Link
                href="../../services/consumer-goods"
                className="block px-8 py-4 text-center"
              >
                Consumer Goods
              </Link>
            </li>
            <li className="w-full border-b border-stone-200">
              <Link
                href="../../services/transportation"
                className="block px-8 py-4 text-center"
              >
                Transportation
              </Link>
            </li>
            <li className="w-full border-b border-stone-200 ">
              <Link
                href="../../services/well-drilling"
                className="block px-8 py-4 text-center"
              >
                Well Drilling
              </Link>
            </li>
            <li className="w-full border-none border-stone-200">
              <Link
                href="../../services/accomodation"
                className="block px-8 py-4 text-center"
              >
                Accomodation
              </Link>
            </li>
          </ul>
        </li>
      </li>
      <li
        id="bouton"
        className="p-4 cursor-pointer relative  flex flex-col justify-center group/bouton"
      >
        <h2 className="flex justify-between items-center relative w-full">
          Services
          <MdArrowDropDown
            size={25}
            className="group-hover/bouton:rotate-180"
          />
        </h2>
        <ul className="absolute w-60  top-full -right-[4.5rem] bg-gray-100 origin-top opacity-0 hidden  group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all duration-300 ease-in-out items-center flex-col justify-center">
          <li className="border-b border-stone-200  w-full">
            <Link
              href="../../services/agriculture"
              className="block px-8 py-4 text-center"
            >
              Agriculture
            </Link>
          </li>
          <li className="w-full border-b border-stone-200">
            <Link
              href="../../services/construction"
              className="block px-8 py-4 text-center"
            >
              Construction
            </Link>
          </li>
          <li className="w-full border-b border-stone-200">
            <Link
              href="../../services/consumer-goods"
              className="block px-8 py-4 text-center"
            >
              Consumer Goods
            </Link>
          </li>
          <li className="w-full border-b border-stone-200">
            <Link
              href="../../services/transportation"
              className="block px-8 py-4 text-center"
            >
              Transportation
            </Link>
          </li>
          <li className="w-full border-b border-stone-200 ">
            <Link
              href="../../services/well-drilling"
              className="block px-8 py-4 text-center"
            >
              Well Drilling
            </Link>
          </li>
          <li className="w-full border-none border-stone-200">
            <Link
              href="../../services/accomodation"
              className="block px-8 py-4 text-center"
            >
              Accomodation
            </Link>
          </li>
        </ul>
      </li>
      <li className="px-4 hover:border-b-2 border-cyan-600 py-4 cursor-pointer">
        <Link className="scroll-mt-20" href="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}
