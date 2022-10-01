import React, { useState } from "react";
import { Box, Modal, TextField } from "@mui/material";
import { ModalText, TypographyHeadStyled } from "../main/mainPage.styled";
import { ContainerStyled } from "../footer/footer.styled";
import {
  style,
  ContactBox,
  LabelStyled,
  SubmitButtonStyled,
  TextareaAutosizeStyled,
} from "./contact.styled";
import { Error } from "../errors/errors";

export const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [open, setOpen] = useState(false);

  const [emailError, setEmailError] = useState("Email is required");
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  const onChangeEmail = (event: any) => {
    if (event.target.value.match(mailFormat)) {
      setEmailError("");
    } else {
      setEmailError("Email is invalid");
    }
    setEmail(event.target.value);
  };
  return (
    <>
      <ContainerStyled>
        <TypographyHeadStyled>Contact us</TypographyHeadStyled>
        <ContactBox component="form">
          <Box sx={{ width: "100%" }}>
            <LabelStyled>Name</LabelStyled>
            <TextField
              style={{ width: "40ch" }}
              type="text"
              id="outlined-basic"
              placeholder="Your name"
              variant="outlined"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </Box>

          <Box>
            <LabelStyled>E-mail</LabelStyled>
            <TextField
              type="email"
              id="outlined-basic"
              placeholder="your@email.com"
              variant="outlined"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeEmail(e)
              }
            />
            <Error
              error={email !== "" && emailError ? <p>{emailError}</p> : null}
            />
          </Box>

          <Box>
            <LabelStyled>Message</LabelStyled>
            <TextareaAutosizeStyled
              style={{ width: "40ch" }}
              minRows={6}
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
            />
          </Box>

          <div>
            {name !== "" &&
            email !== "" &&
            emailError === "" &&
            message !== "" ? (
              <SubmitButtonStyled onClick={handleOpen} variant="contained">
                Submit
              </SubmitButtonStyled>
            ) : (
              <SubmitButtonStyled disabled variant="contained">
                Submit
              </SubmitButtonStyled>
            )}
          </div>
        </ContactBox>
      </ContainerStyled>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalText>Thanks! Your message was sent.</ModalText>
        </Box>
      </Modal>
    </>
  );
};
