import Button from "./Button";
import Link from "next/link";
import Card from "./Card";
import {
  MdAgriculture,
  MdConstruction,
  MdEmojiTransportation,
  MdHotel,
} from "react-icons/md";
import {FaOilWell} from "react-icons/fa"

export default function Hero() {
  return (
    <div className="relative ">
      <div className="flex items-center justify-center h-[32rem] md:h-[37rem] bg-hero-bg bg-fixed bg-cover bg-center bg-norepeat"></div> 
      <div className="h-[32rem] md:h-[37rem] absolute top-0 left-0 right-0 bg-black/40"></div>
      <section className="absolute top-20 left-0 right-0 flex flex-col px-8 md:max-w-4xl xl:max-w-6xl mx-auto lg:px-0 z-10">
        <h1 className="text-[2.5rem] md:text-[3.5rem]  text-gray-200 font-bold capitalize  tracking-wide leading-tight md:leading-snug md:w-[80%]">
          going forward with full momentum
        </h1>
        <p className="text-gray-200 pt-8 text-lg  md:w-[60%]">
          Welcome to Acotrot General Trading Company Limited., Your dependable
          partner for a diverse range of services and products sourced from all
          corners of the world.
        </p>
        <Link href="/contact" className="w-28">
          <Button title="Contact us" />
        </Link>
      </section>

      <section className="bg-gray-200 px-8 flex flex-col z-10">
        <h2 className="text-3xl text-neutral-800 md:text-center font-semibold my-4 border-b border-blue-400 py-2 mt-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start lg:grid-cols-3 gap-8 mt-4 lg:container lg:mx-auto  mb-8">
          <Card
            title="Agriculture"
            description="On-demand farming support services"
            icon={MdAgriculture}
          />
          <Card
            title="Construction"
            description="On-demand construction project solutions"
            icon={MdConstruction}
          />
          <Card
            title="Transportation"
            description="On-demand transportation logistics solutions."
            icon={MdEmojiTransportation}
          />
          <Card
            title="Accomodation"
            description="On-demand personalized lodging services."
            icon={MdHotel}
          />
          <Card 
            title="Well Drilling"
            description="On-demand reliable well drilling."
            icon={FaOilWell}
            />
        </div>
      </section>
      <section className="bg-gray-800 h-72"></section>
    </div>
  );
}
