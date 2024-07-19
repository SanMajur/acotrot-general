"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { slides } from "../data";

interface CarouselProps {
  slides: any;
  parentWidth: number;
}
// const sliderStyles ={
//   height: '100%',
//   position: 'relative'
// }
const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  // backgroundImage: `url(${slides[currIndex].url})`
};
const slideContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 0.3s",
};

const slideContainerOverflowStyles = {
  overflow: "hidden",
  height: "100%",
};

const Carousel: React.FC<CarouselProps> = ({ slides, parentWidth }) => {
  const timerRef = useRef<any | null>(null);
  const [currIndex, setCurrIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  }, [currIndex, slides]);

  const goToSlide = (slideIndex: any) => {
    setCurrIndex(slideIndex);
  };

  const getSlideStylesWithBackground = (slideIndex: any) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  });
  const getSlideContainerStylesWithWidth = () => ({
    ...slideContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currIndex * parentWidth)}px)`,
  });
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [nextSlide]);
  return (
    <div className="h-full relative ">
      <div className=" absolute z-30 w-full h-full bg-black/50 group ">
        <div
          style={{ transform: "translate(0, -50%)" }}
          className="hidden group-hover:flex justify-center items-center absolute top-[50%] rounded-full bg-white/50 hover:bg-gray-800 hover:text-gray-300 hover:ring-2 left-8 md:left-12 lg:left-24 text-5xl text-black z-10 cursor-pointer "
          onClick={prevSlide}
        >
          <BsChevronCompactLeft />
        </div>
        <div
          style={{ transform: "translate(0, -50%)" }}
          className="hidden group-hover:flex justify-center items-center absolute top-[50%]  rounded-full bg-white/50 hover:bg-gray-800 hover:text-gray-300 hover:ring-2 right-8 md:right-12 lg:right-24 text-5xl text-black  z-10 cursor-pointer "
          onClick={nextSlide}
        >
          <BsChevronCompactRight />
        </div>
      </div>

      <div style={slideContainerOverflowStyles}>
        <div style={getSlideContainerStylesWithWidth()}>
          {slides.map((_: any, slideIndex: any) => (
            <div
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {slides.map((slide: any, slideIndex: any) => (
          <div
            key={slideIndex}
            className="mx-1 cursor-pointer text-3xl hover:text-gray-500"
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
