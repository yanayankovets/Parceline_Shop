import { styled } from "@mui/system";
import { Typography, Box, Button } from "@mui/material";
import { Swiper } from "swiper/react";

export const SwiperStyled = styled(Swiper)({
  height: "470px",
  ".swiper-button-next:after": {
    color: "white",
  },
  ".swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet":
    {
      background: "white",
    },
  ".swiper-button-prev:after,": {
    color: "white",
  },
});

export const SliderImgStyled = styled("img")({
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
});

export const SwiperLoveBoxStyled = styled(Box)({
  position: "absolute",
  left: "5.5rem",
  top: "8rem",
  textAlign: "left",
});

export const SwiperStonewareBoxStyled = styled(Box)({
  position: "absolute",
  right: "5.5rem",
  top: "8rem",
  textAlign: "right",
});

export const SwiperStoryBoxStyled = styled(Box)({
  position: "absolute",
  left: "40%",
  top: "35%",
  textAlign: "center",
});

export const LoveHeadStyled = styled(Typography)({
  color: "#646463",
  fontSize: 60,
  fontWeight: 400,
  lineHeight: "30px",
  fontFamily: "Cormorant Garamond,serif",
  marginBottom: "2rem",
});

export const LoveTextStyled = styled(Typography)({
  color: "#646463",
  fontSize: 22,
  fontWeight: 300,
  lineHeight: "30px",
  fontFamily: "Montserrat, sans-serif",
  marginBottom: "2rem",
});

export const SliderShopButtonStyled = styled(Button)({
  fontWeight: 400,
  fontSize: 15,
  fontFamily: "Monserrat, sans-serif",
  background: "#adb3a9",
  "&:hover": {
    background: "#979b92",
  },
  "&:active": {
    background: "#979b92",
  },
});
