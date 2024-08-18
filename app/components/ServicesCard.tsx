import { Box, CardMedia, Typography } from "@mui/material";
// import ImportExportIcon from "@mui/icons-material/ImportExport";
import Icon from "@mui/material/Icon";
import Image from "next/image";

type Props = {
  icon: any;
  title: any;
  description: any;
};

export default function ServicesCard({ icon, title, description }: Props) {
  return (
    <Box
      component={"section"}
      className="flex flex-col items-center justify-center"
    >
      <Image src={icon} alt="alt" height="50" width="80" className="my-8 " />
      <Box>
        <Typography variant="h5" gutterBottom className="font-semibold">
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
