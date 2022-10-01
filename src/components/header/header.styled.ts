import { Button, Toolbar, AppBar, Box } from "@mui/material";
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

export const AppBarStyled = styled(AppBar)({
  position: "absolute",
  background: "#e3ded8",
  boxShadow: "none",
});

export const ImgLogo = styled("img")({
  width: "15%",
  "&:hover": {
    cursor: "pointer",
  },
});

export const IconButtonStyled = styled(Box)({
  background: "#e3ded8",
  "&:hover": {
    background: "none",
  },
  borderRadius: "none",
});

export const ButtonStyled = styled(Button)({
  fontSize: 16,
  color: "#5d5a5a",
  margin: "0 10px",
  fontFamily: "Cormorant Garamond, serif",
});

export const ToolbarStyled = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const AccountAndCartBoxStyled = styled(Box)({
  width: "5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#7a7975",
});
