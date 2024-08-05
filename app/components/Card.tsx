import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";
interface CardProps {
  title: string;
  icon?: IconType;
  description: string;
}
const Card: React.FC<CardProps> = ({ title, icon: Icon, description }) => {
  return (
    <div className="flex w-96 gap-4 ">
      <div className="">
        {Icon && <Icon size={50} className="text-blue-700" />}
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-neutral-600 text-xl font-bold">{title}</h2>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
    </div>
  );
};
export default Card;
