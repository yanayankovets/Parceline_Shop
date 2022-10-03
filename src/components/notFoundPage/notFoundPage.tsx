import React from "react";
import { TypographyHeadStyled } from "../main/mainPage.styled";
import { ShopLinkStyled } from "../cart/cart.styled";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <TypographyHeadStyled>Page is not found</TypographyHeadStyled>
      <ShopLinkStyled onClick={() => navigate("/shop")}>
        Go to shop?
      </ShopLinkStyled>
    </>
  );
};
