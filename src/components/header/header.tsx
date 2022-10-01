import React, { useState } from "react";
import { Container, Box, Modal } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import {
  style,
  IconButtonStyled,
  ButtonStyled,
  ToolbarStyled,
  ImgLogo,
  AppBarStyled,
  AccountAndCartBoxStyled,
} from "./header.styled";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks/reduxHooks";
import SignInPageForm from "../signForm/signForm";
import logo from "../../icons/LogoParceline.png";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cartArr = useAppSelector((state) => state.list.value);
  const navigate = useNavigate();

  return (
    <>
      <AppBarStyled>
        <Container sx={{ width: "100%" }}>
          <ToolbarStyled>
            <ImgLogo src={logo} alt="" onClick={() => navigate("/")} />
            <IconButtonStyled>
              <Box mr={12}>
                <ButtonStyled onClick={() => navigate("/")}>Home</ButtonStyled>
                <ButtonStyled onClick={() => navigate("/shop")}>
                  Shop
                </ButtonStyled>
                <ButtonStyled onClick={() => navigate("/story")}>
                  Our Story
                </ButtonStyled>
                <ButtonStyled onClick={() => navigate("/contact")}>
                  Contact
                </ButtonStyled>
              </Box>
            </IconButtonStyled>
            <AccountAndCartBoxStyled>
              <AccountBoxOutlinedIcon
                sx={{ cursor: "pointer" }}
                onClick={handleOpen}
              />
              <ShoppingCartOutlinedIcon
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/cart")}
              />
              <p>({cartArr.length})</p>
            </AccountAndCartBoxStyled>
          </ToolbarStyled>
        </Container>
      </AppBarStyled>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{<SignInPageForm />}</Box>
      </Modal>

      <SignInPageForm open={open} handleClose={handleClose} />
    </>
  );
};
