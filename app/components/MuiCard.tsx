import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Box,
  Button,
  CardActionArea,
} from "@mui/material";
import { MuiButton } from "./MuiButton";

type Props = {
  title: any;
  description: any;
  imageUrl?: any;
  subTitle: any;
  category: any;
  altText: any;
  link: any;
};

export default function MuiCard({
  title,
  description,
  imageUrl,
  subTitle,
  category,
  altText,
  link,
}: Props) {
  return (
    // sm:max-w-[18rem]  md:max-w-[16rem] mx-auto sm:mx-0
    <Card
      sx={{ maxWidth: 405 }}
      className="relative w-full md:w-[45%] lg:w-[25%] transition-all duration-300"
    >
      <CardActionArea href={link}>
        <CardMedia
          component={"img"}
          image={imageUrl}
          alt={altText}
          className="h-[217px] w-full"
        />
        <CardContent>
          <Box className="bg-black/80 absolute top-36 left-0 right-0">
            <Typography
              variant="h5"
              className="flex items-center justify-center py-2 text-sm text-gray-100 gap-2"
            >
              {subTitle}
            </Typography>
          </Box>
          <Box className="bg-gray-100 absolute top-52 right-4 border border-gray-500 w-36 rounded-full">
            <Typography variant="h5" className="text-xs  py-1 text-center ">
              {category}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              component="h1"
              className="my-4 text-sky-600 text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              className="text-base text-gray-600 mb-4"
            >
              {description}
            </Typography>
          </Box>
          <Box>
            <Button variant="outlined" component="button">
              Learn More
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
