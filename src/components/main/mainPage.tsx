import React, { useState } from "react";
import { Box, Modal, TextField } from "@mui/material";
import lightPendants from "../../icons/Light_pendants_main.png";
import speckles from "../../icons/Speckles_main.png";
import dripping from "../../icons/Dripping_main.png";
import pottery from "../../icons/Pottery_main.png";
import {
  style,
  MainPageStyled,
  SubscribeButtonStyled,
  TypographyHeadStyled,
  TypographyTextStyled,
  ReviewStyled,
  ImgGridStyled,
  MainContainer,
  HandmadeBox,
  NewsletterBox,
  NewsletterTextStyled,
  GridStyled,
  QuotesStyled,
  ReviewTextStyled,
  ReviewStyledWithMargin,
  ReviewNameStyled,
  ReviewDateStyled,
  ModalText,
  DivImgStyled,
} from "./mainPage.styled";
import { SingleLineImageList } from "./slider/slider";
import { Error } from "../errors/errors";

export const MainPage = () => {
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const [emailError, setEmailError] = useState("Email is required");
  const [isValid, setIsValid] = useState<boolean>(false);

  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    return email.match(mailFormat) ? setIsValid(true) : null;
  };
  const handleClose = () => {
    setOpen(false);
    setIsValid(false);
    setEmail("");
  };

  const onChangeEmail = (event: any) => {
    if (email.length > 0) {
      setVisible(true);
    }
    if (event.target.value.match(mailFormat)) {
      setEmailError("");
    } else {
      setEmailError("Email is invalid");
    }
    if (emailError == "") {
      setVisible(false);
    }
    setEmail(event.target.value);
  };

  const onSubscribeConfirm = () => handleOpen();

  return (
    <MainContainer>
      <Box>
        <TypographyHeadStyled>
          Bring beauty into the everyday
        </TypographyHeadStyled>
        <TypographyTextStyled>
          Parceline ceramique creates functional and decorative objects designed
          with simple shapes and clean lines.
        </TypographyTextStyled>
        <TypographyTextStyled>
          Our artisanal pieces are all handmade and created with ergonomics in
          mind.
        </TypographyTextStyled>
      </Box>

      <MainPageStyled>
        <DivImgStyled>
          <ImgGridStyled className="scale" src={lightPendants} alt="" />
        </DivImgStyled>
        <DivImgStyled>
          <ImgGridStyled src={dripping} alt="" />
        </DivImgStyled>
        <DivImgStyled>
          <ImgGridStyled src={speckles} alt="" />
        </DivImgStyled>
        <DivImgStyled>
          <ImgGridStyled src={pottery} alt="" />
        </DivImgStyled>
      </MainPageStyled>

      <HandmadeBox>
        <TypographyHeadStyled>Handmade with care</TypographyHeadStyled>
        <TypographyTextStyled>
          Each product is created by hand on the potter's wheel from
          high-quality stoneware or porcelain.
        </TypographyTextStyled>
      </HandmadeBox>

      <SingleLineImageList />

      <NewsletterBox component="form">
        <TypographyHeadStyled>Newsletter</TypographyHeadStyled>
        <NewsletterTextStyled>
          Join the community and receive a 10% discount
        </NewsletterTextStyled>

        <div>
          <TextField
            type="email"
            autoComplete="current-email"
            id="outlined-size-small"
            placeholder="E-mail address"
            size="small"
            value={isValid ? "" : email}
            onChange={onChangeEmail}
          />
          <SubscribeButtonStyled
            variant="contained"
            onClick={onSubscribeConfirm}
          >
            Subscribe
          </SubscribeButtonStyled>
          <Error
            error={
              visible && email.length > 0 ? (
                <p style={{ marginRight: "130px" }}>{emailError}</p>
              ) : null
            }
          />
        </div>
      </NewsletterBox>

      <GridStyled container spacing={3}>
        <ReviewStyled item xs={3}>
          <QuotesStyled>❛❛</QuotesStyled>
          <ReviewTextStyled>
            As gorgeous and whimsical as long had hoped it would be. Honestly,
            the glaze on the inside was so beautiful, I almost didn't want to
            put a plant in it. So pleased with this purchase!
          </ReviewTextStyled>
          <ReviewNameStyled>Td Gille</ReviewNameStyled>
          <ReviewDateStyled>June 2021</ReviewDateStyled>
        </ReviewStyled>

        <ReviewStyledWithMargin item xs={3}>
          <QuotesStyled>❛❛</QuotesStyled>
          <ReviewTextStyled>
            Fabulous planter, so minimalist and clean! Delivery was lightning
            fast! Thanks!
          </ReviewTextStyled>
          <ReviewNameStyled>Catherine</ReviewNameStyled>
          <ReviewDateStyled>November 2020</ReviewDateStyled>
        </ReviewStyledWithMargin>

        <ReviewStyled item xs={3}>
          <QuotesStyled>❛❛</QuotesStyled>
          <ReviewTextStyled>
            This is such a beautiful item! I purchased for a gift and the
            recipient loved it. Perfect for a small plant! Very lightweight and
            an even lip, an indicator of excellent ceramic craftsmanship.
          </ReviewTextStyled>
          <ReviewNameStyled>Monica</ReviewNameStyled>
          <ReviewDateStyled>December 2019</ReviewDateStyled>
        </ReviewStyled>
      </GridStyled>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isValid ? (
            <ModalText>Thanks for subscribing!</ModalText>
          ) : (
            <ModalText>{emailError}</ModalText>
          )}
        </Box>
      </Modal>
    </MainContainer>
  );
};
