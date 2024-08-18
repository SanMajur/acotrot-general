import ServicesCard from "./ServicesCard";
import { Box, Typography, Button } from "@mui/material";
import MuiCard from "./MuiCard";
import ContactButton from "./contact/ContactButton";
import { MuiButton } from "./MuiButton";

export default function Hero() {
  return (
    <div className="relative">
      <div className=" h-screen bg-hero-bg md:bg-fixed bg-cover bg-center bg-norepeat"></div>
      <div className="h-screen absolute top-0 left-0 right-0 bg-black/40"></div>
      <section className="absolute top-20 left-0 right-0 flex flex-col px-8 md:max-w-4xl xl:max-w-6xl mx-auto lg:px-0 z-10 mt-20">
        <h1 className="text-[2.5rem] md:text-[3.5rem]  text-gray-200 font-bold capitalize  tracking-wide leading-tight md:leading-snug md:w-[80%]">
          going forward with full momentum
        </h1>
        <p className="text-gray-200 pt-8 text-lg md:w-[60%]">
          Welcome to Acotrot General Trading Company Limited., Your dependable
          partner for a diverse range of services and products sourced from all
          corners of the world.
        </p>

        <div className="mb-6">
          <ContactButton title="Contact us" link={"/contact"} />
        </div>
      </section>

      <Box
        component={"section"}
        className="my-[50px] mx-[8.3333%] "
        aria-label="about-us"
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          className="capitalize text-cyan-800"
        >
          Things to know about Acotrot General Trading Company Limited
        </Typography>
        <Typography variant="body1" gutterBottom>
          We work with the leading producers, manufacturers and brands in the
          world.
        </Typography>
      </Box>
      <Box
        component={"section"}
        className=" bg-gray-200 py-4"
        aria-label="our-products"
      >
        <Box className="my-[50px] mx-[8.3333%] sm:mx-[6.3333%]">
          <Box className="mb-8 text-center">
            <Typography
              variant="subtitle2"
              gutterBottom
              className="text-cyan-600"
            >
              Acotrot General Trading Products
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className="capitalize font-semibold"
            >
              our Supply Lines
            </Typography>
            <Typography variant="body1" className="">
              Acotrot General Trading company limited specializes in the suplly
              of a wide range of products and goods, including but not limited
              to the following:
            </Typography>
          </Box>
          <Box className="flex justify-around flex-wrap flex-row gap-12 my-8">
            <MuiCard
              title="Construction Material"
              // description="Acotrot General Trading offers a diverse range of high-quality construction materials tailored for various building and infrastructure projects. Our product portfolio includes cement, steel rebars, aggregates, bricks, and concrete blocks, all sourced from reputable manufacturers. Acotrot ensures that each material meets stringent industry standards, providing durability, strength, and reliability for both small-scale and large-scale construction needs. With a focus on quality and customer satisfaction, Acotrot General Trading is a trusted partner for contractors, builders, and developers."
              description="Acotrot General Trading offers a diverse range of high-quality construction materials tailored for various building and infrastructure projects."
              subTitle={"Construction & Building Materials"}
              category={"Building & Construction"}
              imageUrl={"/images/construction.jpg"}
              altText={"construction site"}
              link={"../services/construction-materials"}
            />

            <MuiCard
              title="Health and Medical"
              description="Acotrot General Trading deals with the sales and service of laboratory equipment, medical devices, hospital furniture, and accessories."
              subTitle={"Medical Equipments"}
              category={"Health & Wellness"}
              imageUrl={"/images/medic-equipments.avif"}
              altText={"Medical equipment"}
              link={"../services"}
            />

            <MuiCard
              title="Consumer Goods"
              // Acotrot General Trading offers a diverse range of high-quality consumer goods, including essential household items, personal care products, and everyday necessities. Their carefully curated selection features trusted brands and products that meet the highest standards of quality and value. Whether you need kitchen staples, cleaning supplies, or personal grooming items, Acotrot provides reliable options that cater to the daily needs of consumers. With a commitment to customer satisfaction, Acotrot General Trading ensures that their consumer goods enhance convenience and comfort in everyday life.
              description="Acotrot General Trading offers a diverse range of high-quality consumer goods, including essential household items, and everyday necessities."
              subTitle={"Consumer Products"}
              category={"Retail Trading"}
              imageUrl={"/images/grocery.avif"}
              altText={"E-commerce"}
              link={"../services"}
            />
          </Box>
        </Box>
        <Box className="p-8">
          <Typography className="flex flex-col gap-4">
            Explore our product page to discover our wide-ranging portfolio of
            product offerings.{" "}
            <MuiButton link={"../our-products"} btnText={"Explore More"} />
          </Typography>
        </Box>
      </Box>
      <Box
        component={"section"}
        className=" bg-gray-50 py-8 "
        aria-label="our-products"
      >
        <Box className="text-center my-[50px] mx-[8.3333%] sm:mx-[6.3333%]">
          <Typography
            variant="subtitle2"
            gutterBottom
            className="text-cyan-600"
          >
            Our Services
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className="capitalize font-medium"
          >
            We offer a wide range of services to drive progress!
          </Typography>
          <Typography variant="body1" className="">
            At Acotrot, we deliver a range of services to our clients in the
            Republic of South Sudan and globally.
          </Typography>
        </Box>
        <Box className="flex justify-between items-center flex-col text-center my-[50px] mx-[8.3333%] sm:mx-[6.3333%]">
          <ServicesCard
            title={"Logistics and Shipping"}
            icon={"/images/shipping.png"}
            description={
              "At Acotrot General Trading, our shipping services encompass integrated logistics, warehouse management, ship ownership, and end-to-end freight management."
            }
          />
          <ServicesCard
            title={"Import & Export"}
            icon={"/images/import&export.png"}
            description={
              "At Acotrot General Trading, we handle and process numerous shipments each month for both local and international markets."
            }
          />
          <ServicesCard
            title={"Procurement"}
            icon={"/images/procument.png"}
            description={
              "We take pride in our highly trusted distribution network, delivering numerous orders across South Sudan and around the world."
            }
          />

          <ServicesCard
            title={"E-Commerce"}
            icon={"/images/e-commerce.png"}
            description={
              "We provide comprehensive online solutions, optimizing product presentation and search capabilities, and facilitating the buying and selling of products online."
            }
          />
        </Box>
      </Box>
    </div>
  );
}
