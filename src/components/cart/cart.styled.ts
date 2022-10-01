import { styled } from "@mui/system";
import {
  Typography,
  Box,
  Link,
  TableCell,
  TableRow,
  Button,
  TextareaAutosize,
  TableHead,
  Paper,
} from "@mui/material";
import { ItemNameStyled } from "../shop/shop.styled";

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

export const EmptyCartStyled = styled(Typography)({
  color: "#646463",
  fontSize: 18,
  fontWeight: 300,
  lineHeight: "30px",
  fontFamily: "Montserrat, sans-serif",
  margin: "2rem 0",
});

export const ShopLinkStyled = styled(Link)({
  color: "#acb0a4",
  fontSize: 18,
  fontWeight: 300,
  lineHeight: "30px",
  fontFamily: "Montserrat, sans-serif",
  margin: "2rem 0 0 0.3rem",
  textDecoration: "none",
  "&:hover": {
    cursor: "pointer",
    opacity: 0.7,
  },
});

// ---------- TABLE ----------------

export const PaperStyled = styled(Paper)({
  marginTop: "3rem",
});

export const TableRowStyled = styled(TableRow)({
  background: "#e3ded8",
});

// ---------- TABLE HEAD ----------------

export const TableHeadStyled = styled(TableHead)({
  justifyContent: "center",
  textAlign: "center",
});

export const HeadTableCellStyled = styled(TableCell)({
  color: "#262626",
  fontSize: 14,
  fontWeight: 300,
  lineHeight: "30px",
  fontFamily: "Cormorant Garamond,serif",
  width: "15%",
});

export const HeadTableCellProductStyled = styled(HeadTableCellStyled)({
  width: "50%",
  paddingLeft: "3rem",
});

export const HeadTableCellExitStyled = styled(HeadTableCellStyled)({
  width: "5%",
});

// ---------- TABLE CELL ----------------

export const TableCellProductStyled = styled(TableCell)({
  display: "flex",
  alignItems: "center",
});

export const QuantityCellStyled = styled(Box)({
  width: "50px",
  padding: "5px",
  border: "1px solid #edecea",
  borderRadius: "10%",
  color: "#646463",
  fontSize: 14,
  marginLeft: "5rem",
});

export const PriceCellStyled = styled(TableCell)({
  color: "#646463",
  fontSize: 18,
  fontWeight: 300,
  lineHeight: "30px",
  fontFamily: "Montserrat, sans-serif",
});

export const TableCellExit = styled(TableCell)({
  color: "#262626",
  opacity: 0.7,
  "&:hover": {
    cursor: "pointer",
  },
});

export const TableItemNameStyled = styled(ItemNameStyled)({
  fontFamily: "Montserrat, sans-serif",
  color: "#646463",
  fontSize: 18,
  fontWeight: 300,
});

// ------------ Total Block --------------

export const TotalAndPayBoxStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2rem",
});

export const TotalBoxStyled = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  fontFamily: "Cormorant Garamond,serif",
  color: "#646463",
  fontSize: "30px",
});

export const OrderButtonStyled = styled(Button)({
  marginTop: "2rem",
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

export const CartImgStyled = styled("img")({
  width: "30%",
  boxSizing: "border-box",
  marginRight: "1.5rem",
  "&:hover": {
    cursor: "pointer",
    opacity: 0.7,
  },
});

export const PayBoxStyled = styled(Box)({
  height: "50px",
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 90px",
});

export const PayImageStyled = styled("img")({
  width: "90px",
  height: "50px",
  border: "1px solid gray",
  borderRadius: "10%",
  boxSizing: "border-box",
  cursor: "pointer",
});

export const InstructionsStyled = styled(Typography)({
  fontFamily: "Cormorant Garamond,serif",
  color: "#646463",
  fontSize: "16px",
  marginBottom: "1rem",
});

export const TextareaAutosizeStyled = styled(TextareaAutosize)({
  width: 500,
  border: "1px solid rgb(192 199 187)",
  borderRadius: 4,
  outline: "none",
});
