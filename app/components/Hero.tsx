import Button from "./contact/Button";
import MobileCard from "../components/home/MobileCard";
import Slider from "./home/swiper/Slider";

export default function Hero() {
  return (
    <div className="relative ">
      <div className=" h-screen bg-hero-bg md:bg-fixed bg-cover bg-center bg-norepeat"></div>
      <div className="h-screen absolute top-0 left-0 right-0 bg-black/40"></div>
      <section className="absolute top-20 left-0 right-0 flex flex-col px-8 md:max-w-4xl xl:max-w-6xl mx-auto lg:px-0 z-10 mt-20">
        <h1 className="text-[2.5rem] md:text-[3.5rem]  text-gray-200 font-bold capitalize  tracking-wide leading-tight md:leading-snug md:w-[80%]">
          going forward with full momentum
        </h1>
        <p className="text-gray-200 pt-8 text-lg  md:w-[60%]">
          Welcome to Acotrot General Trading Company Limited., Your dependable
          partner for a diverse range of services and products sourced from all
          corners of the world.
        </p>

        <div className="mb-6">
          <Button title="Contact us" link={"/contact"} />
        </div>
      </section>

      <section className=" my-[50px] mx-[8.3333%]">
        <h1 className="text-[calc(27.648px+6.912*(100vw-320px)/320)] font-normal my-[50px] mx-0 uppercase text-[#333]">
          our <strong className="block">services</strong>
        </h1>
        <Slider />
      </section>
    </div>
  );
}
