// import Image from "next/image";
// import React from "react";
// import { IconType } from "react-icons";
// interface CardProps {
//   title: string;
//   icon?: IconType;
//   description: string;
// }
// const Card: React.FC<CardProps> = ({ title, icon: Icon, description }) => {
//   return (
//     <div className="flex items-center justify-center w-full gap-4 h-96 bg-slate-100 shadow-md rounded-md">
//       <div className="">
//         {Icon && <Icon size={50} className="text-blue-700" />}
//       </div>
//       <div className="flex flex-col gap-1">
//         <h2 className="text-neutral-600 text-xl font-bold">{title}</h2>
//         <p className="text-sm text-neutral-600">{description}</p>
//       </div>
//     </div>
//   );
// };
// export default Card;

import Image from "next/image";
import React from "react";

const Card = ({ imageSrc, title, description, buttonTxt, link }) => {
  return (
    <div className="rounded-md shadow-lg  m-2 bg-gray-200 max-h-fit h-96">
      <div className="  group" >
        {imageSrc && <Image src={imageSrc} alt="" height={50} width={50} className="w-full rounded-t-md h-40 object-cover  group-hover:scale-95 transition-transform duration-300 ease-in-out" />}
          {title && <h3 className="mx-2 my-[5%]">{title}</h3>}
          {description && <p className="mx-2 my-[5%]">{description}</p>}
         {link && buttonTxt && <div className="flex items-center justify-center m-2"><a className="flex items-center justify-center w-[90%] p-2 rounded-md bg-blue-900 text-gray-100" href={link}>{buttonTxt}</a></div>}
      </div>
    </div>
  );
};
export default Card;
