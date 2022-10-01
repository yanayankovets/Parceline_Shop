import { styled } from "@mui/system";
import { Box, Button, TextareaAutosize } from "@mui/material";

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

export const ContactBox = styled(Box)({
  "& > :not(style)": {
    m: 1,
    width: "40ch",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
  },
});

export const LabelStyled = styled("p")({
  textAlign: "left",
  color: "#5d5a5a",
});

export const TextareaAutosizeStyled = styled(TextareaAutosize)({
  minWidth: 398,
  maxWidth: 398,
  border: "1px solid rgb(192 199 187)",
  borderRadius: 4,
});

export const SubmitButtonStyled = styled(Button)({
  height: "2.5rem",
  width: "6rem",
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
