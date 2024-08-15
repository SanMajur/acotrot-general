import Link from "next/link";
import React from "react";

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
      </li>
      <li className="px-4 hover:border-b-2 border-cyan-600 py-4 cursor-pointer">
        <h2 className="scroll-mt-20">Services</h2>
      </li>
      <li className="px-4 hover:border-b-2 border-cyan-600 py-4 cursor-pointer">
        <Link className="scroll-mt-20" href="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}
