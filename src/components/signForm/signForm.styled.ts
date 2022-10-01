import { styled } from "@mui/system";
import {
  TextField,
  Typography,
  FormControlLabel,
  Box,
  Link,
} from "@mui/material";
import { SubmitButtonStyled } from "../contact/contact.styled";

export const styledModal = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #7a7975",
  boxShadow: 24,
  p: 4,
};

export const SignFormStyled = styled(Typography)({
  color: "#5d5a5a",
  fontFamily: "Monserrat, sans-serif",
  fontWeight: 600,
  paddingBottom: "1.5rem",
});

export const TextFieldStyled = styled(TextField)({
  width: "83%",
  marginBottom: "1rem",
  outline: "none",
  ".css-1wc848c-MuiFormHelperText-root": {
    color: "#CC0000",
  },
});

export const FormControlLabelStyled = styled(FormControlLabel)({
  color: "#5d5a5a",
  fontFamily: "Monserrat, sans-serif",
  marginLeft: 5,
  ".css-ahj2mt-MuiTypography-root": {
    fontSize: 15,
  },
});

export const SignUpButtonStyled = styled(SubmitButtonStyled)({
  width: "fit-content",
  marginTop: "1rem",
});

export const ExitStyled = styled("div")({
  position: "absolute",
  top: "0.5rem",
  right: "1rem",
  fontSize: 20,
  cursor: "pointer",
});

export const SignInBoxStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  borderTop: "1px solid #7a7975",
  color: "#5d5a5a",
  fontFamily: "Monserrat, sans-serif",
  marginTop: "2rem",
  paddingTop: "1rem",
});

export const SignInLink = styled(Link)({
  textDecoration: "none",
  color: "#5d5a5a",
  fontWeight: 600,
  marginLeft: "5px",
  marginTop: "2px",
  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
});
