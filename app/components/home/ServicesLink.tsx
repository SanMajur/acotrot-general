import services from "@/app/data";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  activeLink: any;
};

export default function ServicesLink({ activeLink }: Props) {
  return (
    <div>
      {services.map((links, index) => (
        <Link
          key={index}
          href={links.link}
          className={
            index === activeLink
              ? "flex items-center gap-4 p-8 text-red-700 absolute bottom-2 uppercase font-normal text-base"
              : "hidden"
          }
        >
          Read More
          <FaArrowRight className="transition-transform group-hover:scale-x-150 duration-300" />
        </Link>
      ))}
    </div>
  );
}
