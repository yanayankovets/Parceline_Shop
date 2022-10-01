import { styled } from "@mui/system";
import { Box, Typography, Button, Link } from "@mui/material";
import { TextField } from "@material-ui/core";

export const BoxItemStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  textAlign: "left",
});

export const ImgItemStyled = styled("img")({
  width: "50%",
  height: "50%",
  objectFit: "cover",
  marginRight: "2rem",
});

export const ShopNameItemStyled = styled(Typography)({
  marginBottom: "3rem",
  color: "#717170",
  fontSize: 22,
  fontFamily: "Montserrat, sans-serif",
  "&:hover": {
    cursor: "pointer",
    opacity: 0.7,
  },
});

export const NameItemStyled = styled(Typography)({
  marginBottom: "4rem",
  color: "#262626",
  fontSize: 30,
  fontFamily: "Cormorant Garamond,serif",
});

export const BoxPriceQuantityStyled = styled(Box)({
  display: "flex",
  width: "16rem",
  justifyContent: "space-between",
});

export const TextItemStyled = styled(Typography)({
  color: "#646463",
  fontSize: 24,
  fontFamily: "Montserrat,serif",
  lineHeight: "22px",
});

export const QuantityBlock = styled(Box)({
  marginLeft: "30px",
  display: "flex",
  width: "400px",
});

export const BoxQuantityStyled = styled(TextField)({
  width: "50px",
  textAlign: "center",
  padding: "0.5rem 1rem",
  border: "1px solid #edecea",
  borderRadius: "10%",
  marginLeft: "16px",
  marginTop: "-0.4rem",
  color: "#646463",
  // textDecoration: 'none',
});

export const ShareBoxStyled = styled(Box)({
  width: "5rem",
  display: "flex",
  justifyContent: "space-between",
  marginTop: "3rem",
});

export const ShareTextStyled = styled(Typography)({
  color: "#646463",
  fontSize: 16,
  fontFamily: "Montserrat,serif",
  lineHeight: "22px",
});

export const ShareLinkStyled = styled(Link)({
  marginLeft: "1rem",
  color: "#646463",
  "&:hover": { opacity: 0.7, cursor: "pointer" },
});

export const AddToCartButtonStyled = styled(Button)({
  margin: "3.2rem 0 2rem 0",
  fontWeight: 400,
  fontSize: 15,
  fontFamily: "Montserrat, sans-serif",
  background: "#adb3a9",
  "&:hover": {
    background: "#979b92",
  },
  "&:active": {
    background: "#979b92",
  },
});

export const DescriptionItemStyled = styled(Typography)({
  marginBottom: "1.5rem",
  color: "#262626",
  fontSize: 26,
  fontFamily: "Cormorant Garamond,serif",
});

export const DimensionsStyled = styled(Box)({
  marginBottom: "1.5rem",
  fontWeight: 700,
  color: "#646463",
  fontSize: 17,
  lineHeight: "30px",
  fontFamily: "Montserrat, sans-serif",
});

export const ColorsStyled = styled(Box)({
  marginBottom: "1.5rem",
  fontWeight: 700,
  color: "#646463",
  fontSize: 17,
  lineHeight: "30px",
  fontFamily: "Montserrat, sans-serif",
});

export const ParametersStyled = styled(Typography)({
  fontSize: 16,
  fontWeight: 300,
});

export const OtherInfoStyled = styled(Typography)({
  marginBottom: "0.5rem",
  color: "#646463",
  fontSize: 16,
  fontWeight: 300,
  lineHeight: "30px",
  fontFamily: "Montserrat, sans-serif",
});
