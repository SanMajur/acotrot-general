import { Box, Link, Typography, Breadcrumbs } from "@mui/material";

type Props = {
  homeLinkText: any;
  subLinkText?: any;
  finalLinkText?: any;
  mainLink: any;
  subLink?: any;
};

export default function MuiBreadcrumbs({
  homeLinkText,
  subLinkText,
  finalLinkText,
  mainLink,
  subLink,
}: Props) {
  return (
    <Box>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator="-"
        className="text-white"
      >
        <Link
          className="text-white hover:underline hover:text-blue-500"
          href={mainLink}
        >
          {homeLinkText}
        </Link>
        {subLink === false && subLinkText === false ? (
          ""
        ) : (
          <Link
            className="text-white hover:underline hover:text-blue-500"
            href={subLink}
          >
            {subLinkText}
          </Link>
        )}
        <Typography color="white">{finalLinkText}</Typography>
      </Breadcrumbs>
    </Box>
  );
}
