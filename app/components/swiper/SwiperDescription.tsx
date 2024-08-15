// import services from "../../data";
// import SwiperLink from "./SwiperLink";

// type Props = {
//   previous: any;
//   next: any;
//   activeSlide: any;
// };

// export default function SwiperDescription({
//   previous,
//   next,
//   activeSlide,
// }: Props) {
//   return (
//     <div className="absolute inset-0 flex flex-col  bg-gradient-to-r from-black to-transparent hover:bg-black/40 transition-transform duration-500 ease-in-out">
//       {services.map((index) => (
//         <div
//           className={
//             index === activeSlide
//               ? "block w-full h-[80vh] object-cover transition-all p-8 duration-500 ease-in-out"
//               : "hidden"
//           }
//           key={index.id}
//         >
//           <h3 className=" text-gray-100 text-2xl uppercase font-light underline underline-offset-[0.75rem]">
//             {index.title}
//           </h3>
//         </div>
//       ))}

//       <SwiperLink activeLink={activeSlide} />
//     </div>
//   );
// }

import services from "@/app/data";
import SwiperLink from "./SwiperLink";

type Props = {
  previous: any;
  next: any;
  activeSlide: any;
};

export default function MobileDesc({ previous, next, activeSlide }: Props) {
  return (
    <div className="absolute inset-0 flex flex-col  bg-gradient-to-r from-black to-transparent hover:bg-black/40 transition-transform duration-500 ease-in-out">
      {services.map((title, index) => (
        <div
          className={
            index === activeSlide
              ? "block w-full h-[80vh] object-cover transition-all p-8 duration-500 ease-in-out"
              : "hidden"
          }
          key={index}
        >
          <h3 className=" text-gray-100 text-2xl uppercase font-light underline underline-offset-[0.75rem]">
            {title.title}
          </h3>
        </div>
      ))}

      <SwiperLink activeLink={activeSlide} />
    </div>
  );
}
