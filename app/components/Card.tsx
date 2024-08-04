import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function Card({
  cardTitle,
  description,
}: {
  cardTitle: string;
  description: string;
  //image: string;
}) {
  return (
    <div className="">
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <Image
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            width={40}
            height={40}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Button />
            {/* // <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
