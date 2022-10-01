import { styled } from "@mui/system";
import { Container, Grid, Box, Typography } from "@mui/material";
import { Pagination } from "@material-ui/lab";

export const ContainerShopStyled = styled(Container)({
  marginTop: "10rem",
  boxSizing: "border-box",
  width: "90%",
});

export const ShopBoxStyled = styled(Grid)({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gridColumnGap: "30px",
  gridRowGap: "30px",
  marginTop: "2rem",
});

export const ShopItemStyled = styled(Box)({
  marginTop: "2rem",
});

export const ShopImgStyled = styled("img")({
  width: "100%",
  height: "60%",
  objectFit: "cover",
  "&:hover": {
    cursor: "pointer",
    opacity: 0.6,
    transition: "0.2s",
  },
});

export const ShopNameStyled = styled(Typography)({
  margin: "1rem 0 0.4rem 0",
  color: "#717170",
  fontSize: 15,
  fontFamily: "Montserrat",
  "&:hover": {
    cursor: "pointer",
    opacity: 0.7,
  },
});

export const ItemNameStyled = styled(Typography)({
  marginBottom: "0.7rem",
  color: "#262626",
  fontSize: 17,
  fontFamily: "Montserrat",
  lineHeight: "26px",
  "&:hover": {
    cursor: "pointer",
    opacity: 0.8,
    transition: "0.2s",
  },
});

export const ItemPriceStyled = styled(Typography)({
  color: "#646463",
  fontSize: 16,
  fontFamily: "Montserrat,serif",
  lineHeight: "22px",
});

export const PaginationStyled = styled(Pagination)({
  marginTop: "5rem",
  ".MuiPagination-ul": {
    justifyContent: "center",
  },
});
