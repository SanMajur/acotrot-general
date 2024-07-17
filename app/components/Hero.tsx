import React from "react";
import Carousel from "./Carousel";
import { slides } from "../data";

export default function Hero() {
  return (
    <div>
      <div className="w-full h-[500px]">
        <Carousel slides={slides} parentWidth={1500} />
      </div>
    </div>
  );
}
