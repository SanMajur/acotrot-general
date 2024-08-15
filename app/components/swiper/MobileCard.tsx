"use client";
import React, { useState, useRef } from "react";
import services from "@/app/data";
import Image from "next/image";
import MobileDesc from "./MobileDesc";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MobileCard() {
  const [activeSlide, setActiveSlide] = useState(0);

  const next = () => {
    activeSlide === services.length - 1
      ? setActiveSlide(0)
      : setActiveSlide(activeSlide + 1);
  };

  const previous = () => {
    activeSlide === 0
      ? setActiveSlide(services.length - 1)
      : setActiveSlide(activeSlide - 1);
  };
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      <div className="relative w-full mx-auto max-w-xl shadow-2xl rounded-md">
        <div className="w-full  justify-center items-center transition-transform ease-in-out duration-500 rounded-md max-w-xl h-[32rem]  mx-auto overflow-hidden  group">
          {services.map((img, index) => (
            <SwiperSlide
              className={` ${
                index === activeSlide
                  ? "block w-full object-cover  transition-transform duration-500 ease-in-out h-[32rem]"
                  : "hidden"
              }`}
              key={index}
            >
              <Image
                src={img.imageUrl}
                alt=""
                width={400}
                height={400}
                className="transition-transform group-hover:scale-110 duration-300 w-full h-[32rem] rounded-md"
              />
            </SwiperSlide>
          ))}
          <MobileDesc
            previous={previous}
            next={next}
            activeSlide={activeSlide}
          />
        </div>

        <div className="">
          <button
            onClick={previous}
            className={`${
              activeSlide === 0
                ? "hidden"
                : "absolute -left-7 cursor-pointer block w-[24px] h-[16px] z-10 transform -translate-y-[50%] top-[50%] bg-arrowLeft bg-no-repeat transition-all duration-500 ease-in-out"
            }`}
          ></button>

          <button
            onClick={next}
            className={`${
              activeSlide === services.length - 1
                ? "hidden"
                : "absolute -right-7 cursor-pointer block w-[24px] h-[16px] z-10 transform -translate-y-[50%] top-[50%] bg-arrowRight bg-no-repeat transition-all duration-500 ease-in-out"
            }`}
          ></button>
        </div>
      </div>
    </Swiper>
  );
}
