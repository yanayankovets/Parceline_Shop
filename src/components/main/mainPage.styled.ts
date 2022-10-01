import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const MainContainer = styled(Container)({
  marginTop: "9rem",
  boxSizing: "border-box",
  width: "100%",
});

export const MainPageStyled = styled(Grid)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gridColumnGap: "10px",
  gridRowGap: "10px",
  objectFit: "cover",
  justifyContent: "center",
  marginTop: "3rem",
  width: "100%",
});

export const TypographyHeadStyled = styled(Typography)({
  fontWeight: 400,
  fontSize: 30,
  color: "#262626",
  fontFamily: "Cormorant Garamond, serif",
  marginBottom: "0.7rem",
});

export const TypographyTextStyled = styled(Typography)({
  fontWeight: 300,
  fontSize: 15,
  fontFamily: "Monserrat, sans-serif",
  color: "#646463",
});

// ---------- Images --------------

export const DivImgStyled = styled("div")({
  overflow: "hidden",
  background: "#000",
  "&:hover img": {
    transform: "scale(1.1)",
    opacity: 0.7,
  },
});

export const ImgGridStyled = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.25s",
});

// ---------- Subscription --------------

export const SubscribeButtonStyled = styled(Button)({
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

// ---------- Handmade --------------

export const HandmadeBox = styled(Box)({
  margin: "6rem 0 4rem 0",
});

// ---------- Newsletter --------------

export const NewsletterBox = styled(Box)({
  margin: "7rem 0 4rem 0",
  padding: "2.5rem 0 4rem 0",
  border: "0.5px solid #adb3a9",
});

export const NewsletterTextStyled = styled(TypographyTextStyled)({
  fontSize: 17,
  marginBottom: "2.5rem",
});

export const GridStyled = styled(Grid)({
  justifyContent: "center",
  boxSizing: "border-box",
});

// ---------- Reviews --------------

export const ReviewStyled = styled(Grid)({
  display: "block",
  float: "left",
  alignItems: "center",
  margin: "5rem 1rem 1rem 2rem",
  fontWeight: 400,
  fontSize: 15,
  fontFamily: "Monserrat, sans-serif",
  background: "#fafaf9",
  color: "#adb3a9",
});

export const ReviewStyledWithMargin = styled(ReviewStyled)({
  marginBottom: "7.5rem",
});

export const QuotesStyled = styled("div")({
  fontSize: 35,
});

export const ReviewTextStyled = styled(TypographyTextStyled)({
  padding: "1rem 2rem 2rem 1rem",
  fontSize: "17px",
});

export const ReviewNameStyled = styled(TypographyTextStyled)({
  fontSize: "17px",
});

export const ReviewDateStyled = styled(TypographyTextStyled)({
  fontSize: "15px",
  color: "#b4b1b1",
  marginBottom: "1rem",
});

export const ModalText = styled(Typography)({
  textAlign: "center",
  fontWeight: 400,
  fontSize: 16,
  fontFamily: "Monserrat, sans-serif",
  color: "#5b5955",
});
