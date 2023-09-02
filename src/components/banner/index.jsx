import { Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6"> Huge Collections</Typography>
        <BannerTitle variant="h2"> New Bags</BannerTitle>
        <BannerDescription variant="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio
          cupiditate, ullam illum corrupti quisquam!
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
