"use client";
import React, { useCallback, useEffect, useState } from "react";
import services from "../../data";
import Image from "next/image";
import Description from "./Description";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const next = useCallback(() => {
    activeSlide === services.length - 1
      ? setActiveSlide(0)
      : setActiveSlide(activeSlide + 1);
  }, [activeSlide]);
  const previous = () => {
    activeSlide === 0
      ? setActiveSlide(services.length - 1)
      : setActiveSlide(activeSlide - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeSlide, next]);

  return (
    <div className=" w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
      <div className="w-full flex justify-center items-center transition-transform ease-in-out duration-500 rounded-2xl">
        {services.map((pic, idx) => (
          <div
            className={`${
              idx === activeSlide
                ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            } `}
            key={idx}
          >
            <Image
              src={pic.imageUrl}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-tl-3xl"
            />
          </div>
        ))}
        <Description
          previous={previous}
          next={next}
          activeSlide={activeSlide}
        />
      </div>
    </div>
  );
}
