import React from "react";
import services from "../data";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

type Props = {
  previous: any;
  next: any;
  activeSlide: any;
};

export default function Description({ previous, next, activeSlide }: Props) {
  return (
    <div className="grid place-items-start w-full bg-[#e7dfd9]  relative rounded-br-3xl">
      <div className="uppercase text-sm absolute right-4 top-2 underline underline-offset-4">
        our services
      </div>
      {services.map((elem, idx) => (
        <div
          className={
            idx === activeSlide
              ? `block w-full h-[80vh] object-cover transition-all p-16 duration-500 ease-in-out`
              : "hidden"
          }
          key={idx}
        >
          <motion.div
            initial={{
              opacity: idx === activeSlide ? 0 : 0.5,
              scale: idx === activeSlide ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeSlide ? 1 : 0.5,
              scale: idx === activeSlide ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="py-16 text-5xl font-extrabold">{elem.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-40 italic text-gray-600">
              {elem.description}
            </div>
          </motion.div>

          <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10">
            learn more
          </button>
          <div className="absolute bottom-1 w-full flex justify-center items-center">
            <div
              onClick={previous}
              className="absolute bottom-2 cursor-pointer"
            >
              <MdArrowLeft size={20} />
            </div>
            <div onClick={next} className="absolute bottom-2 cursor-pointer">
              {" "}
              <MdArrowRight size={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
