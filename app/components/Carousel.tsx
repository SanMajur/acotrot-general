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
  transition: "transform ease-out 0.2s",
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
      <div
        style={{ transform: "translate(0, -50%)" }}
        className=" absolute top-[50%] rounded-full bg-white/50 hover:bg-gray-800 hover:text-gray-300 hover:ring-2 left-8 md:left-12 lg:left-24 text-5xl text-black z-10 cursor-pointer "
        onClick={prevSlide}
      >
        <BsChevronCompactLeft />
      </div>
      <div
        style={{ transform: "translate(0, -50%)" }}
        className=" absolute top-[50%]  rounded-full bg-white/50 hover:bg-gray-800 hover:text-gray-300 hover:ring-2 right-8 md:right-12 lg:right-24 text-5xl text-black  z-10 cursor-pointer "
        onClick={nextSlide}
      >
        <BsChevronCompactRight />
      </div>

      <div style={slideContainerOverflowStyles}>
        <div className="absolute w-full h-full top-0 right-0 left-0 bg-black/50"></div>
        <div style={getSlideContainerStylesWithWidth()}>
          {slides.map((_: any, slideIndex: any) => (
            <div
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
              className="relative"
            >
              {slideIndex === currIndex && (
                <div className="absolute top-24 left-16 md:left-28 lg:left-40 flex flex-col justify-center gap-4 w-[25%] md:w-[30%] lg:w-[40%] p-4 bg-black/50 text-white z-50 rounded-lg">
                  <h2 className="text-4xl">{slides[slideIndex].title}</h2>
                  <p className="">{slides[slideIndex].description}</p>
                  <hr />
                  <Link
                    href={"#"}
                    className="px-8 py-2 w-40 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
                  >
                    Learn More
                  </Link>
                </div>
              )}
            </div>
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
