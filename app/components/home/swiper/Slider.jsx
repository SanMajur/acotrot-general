"use client";
import React, { useRef, useState } from "react";
import services from "@/app/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef();

  return (
    <div className="relative h-[26rem] sm:h-[20rem] md:h-[19rem] max-w-[24rem] sm:max-w-[33rem] md:container lg:max-w-6xl w-full mx-auto mt-16">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper w-full lg:grid lg:grid-cols-4 lg:gap-4 "
      >
        <div className="relative w-full mx-auto max-w-xl shadow-2xl rounded-md grid gap-4">
          <div className="w-full  transition-transform ease-in-out duration-500 rounded-md max-w-xl lg:max-w-7xl  mx-auto ">
            {services.map((slide, index) => (
              <>
                <SwiperSlide
                  className={`${
                    index === activeSlide ? "group overflow-hidden" : "hidden"
                  }`}
                  key={index}
                >
                  <Image
                    src={slide.imageUrl}
                    alt=""
                    width={400}
                    height={400}
                    className="transition-transform group-hover:scale-110 duration-300 w-full rounded-md h-auto max-w-full"
                  />
                  <div className="absolute inset-0 flex flex-col  bg-gradient-to-r from-black to-transparent hover:bg-black/40 transition-transform duration-500 ease-in-out">
                    <div className="block w-full object-cover transition-all  duration-500 ease-in-out p-8">
                      <h3 className=" text-gray-100 text-lg text-left uppercase font-light underline underline-offset-[0.75rem]">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                  <div className="">
                    <Link
                      href={slide.link}
                      className={
                        "flex items-center gap-4 p-8 text-red-700 absolute bottom-2 uppercase font-light text-base"
                      }
                    >
                      Read More
                      <FaArrowRight className="transition-transform group-hover:scale-x-150 duration-300" />
                    </Link>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </div>
        </div>
      </Swiper>

      <div className="">
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute -left-7 cursor-pointer block w-[24px] h-[16px] z-10 transform -translate-y-[50%] top-[50%] bg-arrowLeft bg-no-repeat transition-all duration-500 ease-in-out"
        ></button>

        <button
          onClick={() => swiperRef.current.slideNext()}
          className="absolute -right-7 cursor-pointer block w-[24px] h-[16px] z-10 transform -translate-y-[50%] top-[50%] bg-arrowRight bg-no-repeat transition-all duration-500 ease-in-out"
        ></button>
      </div>
    </div>
  );
}
