import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function ImageCard({ title, imgSrc, link, ...props }) {
  return (
    <Link Link href={link} className="">
      <div
        {...props}
        className="relative  overflow-hidden rounded-md shadow-lg max-w-sm mx-auto w-full h-[455px] group  mt-8"
      >
        <Image
          src={imgSrc}
          alt=""
          height={80}
          width={100}
          className="transition-transform group-hover:scale-110 duration-300 w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col  bg-gradient-to-t from-black/60 to-transparent hover:bg-black/40">
          <h3 className="p-4 text-gray-100 text-2xl uppercase underline underline-offset-[0.75rem]">
            {title}
          </h3>
          <Link
            href={link}
            className="flex items-center gap-4 p-4 text-red-700 absolute bottom-2 uppercase font-normal text-base"
          >
            Read More
            <FaArrowRight className="transition-transform group-hover:scale-x-150 duration-300" />
          </Link>
        </div>
      </div>
    </Link>
  );
}
