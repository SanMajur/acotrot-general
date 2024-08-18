import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import MuiBreadcrumbs from "../components/MuiBreadcrumbs";
import MuiCard from "../components/MuiCard";

export default function ServicesPage() {
  return (
    <Box className="relative">
      <CardMedia
        component={"img"}
        image="/images/construction.jpg"
        alt="contruction"
        className="h-[390px] w-full"
      />
      <Box
        component={"div"}
        className="absolute top-0 left-0 right-0 h-[390px] bg-black/75"
      ></Box>
      <Box className="px-8 absolute top-44 left-0 right-0 text-gray-100 flex items-center justify-center flex-col text-center">
        <Typography variant="h3" component={"h1"} gutterBottom>
          Our Products
        </Typography>
        <MuiBreadcrumbs
          mainLink={"/"}
          subLink={false}
          homeLinkText={"Home"}
          subLinkText={false}
          finalLinkText={"Our Services"}
        />
      </Box>
      <Box className="flex justify-around flex-wrap flex-row gap-12 my-8">
        <MuiCard
          title="Construction Material"
          description="Acotrot General Trading offers a broad array of health and safety products. From reflective tapes to gloves, we have products to keep everyone safe"
          subTitle={"Construction & Building Materials"}
          category={"Building & Construction"}
          imageUrl={"/images/construction.jpg"}
          altText={"construction site"}
          link={"../services/#"}
        />
      </Box>
    </Box>
  );
}
