"use client";
import React, { useCallback, useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { slides } from "../data";

export default function Hero({ autoSlide = false, autoSlideInterval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, nextSlide]);
  return (
    <div className="h-[480px] relative">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
        className=" w-full h-full bg-center bg-cover transition-transform ease-out duration-500"
      >
        <div className="w-full h-full bg-black/70 group">
          {/* left arrow */}
          <button className="hidden group-hover:flex justify-center items-center absolute top-[50%] translate-x-0 translate-y-[50%] left-5  rounded-full bg-gray-200 text-black cursor-pointer md:w-12 md:h-12">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </button>
          {/* right arrow */}
          <button className="hidden group-hover:flex justify-center items-center absolute top-[50%] translate-x-0 translate-y-[50%] right-5  rounded-full bg-gray-200 text-black cursor-pointer md:w-12 md:h-12">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </button>
        </div>
        <div className="absolute -bottom-8 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className={`transition-all w-3 h-3 bg-black  rounded-full cursor-pointer ${
                  currentIndex === slideIndex ? "p-2" : "bg-opacity-50"
                }`}
                onClick={() => goToSlide(slideIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
