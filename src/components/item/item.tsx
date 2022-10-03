import React, { useState } from "react";
import { Box } from "@mui/material";
import { ContainerShopStyled } from "../shop/shop.styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  BoxItemStyled,
  BoxPriceQuantityStyled,
  BoxQuantityStyled,
  ImgItemStyled,
  NameItemStyled,
  ShopNameItemStyled,
  TextItemStyled,
  ShareBoxStyled,
  ShareTextStyled,
  AddToCartButtonStyled,
  DescriptionItemStyled,
  DimensionsStyled,
  ColorsStyled,
  OtherInfoStyled,
  ShareLinkStyled,
  ParametersStyled,
  QuantityBlock,
} from "./item.styled";
import { useAppDispatch, useAppSelector } from "../redux/hooks/reduxHooks";
import { addItem } from "../redux/store/reducers/cartSlice";
import { useNavigate } from "react-router-dom";
import { NotFoundPage } from "../notFoundPage/notFoundPage";

export const Item = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isAdded, setAdded] = useState(false);
  const [count, setCount] = useState(1);

  const setNumberOfItems = ({ target }: any) => {
    let { value } = target;
    value = Math.max(Number(1), Math.min(Number(30), Number(value)));
    setCount(value);
  };

  let cart = useAppSelector((state) => state.list.value);

  const el = useAppSelector((state) => state.chosenItem.value);

  const elementDescription = el !== null ? el.otherInfo.split(".") : "";

  const handleOnClickAddToCart = (el: any) => {
    dispatch(addItem({ id: el.id, value: el, count: count }));
    setAdded(true);
  };

  return (
    <ContainerShopStyled>
      {el !== null ? (
        <BoxItemStyled>
          <ImgItemStyled src={"data:image/jpeg;base64," + el.image} />

          <Box>
            <ShopNameItemStyled onClick={() => navigate("/")}>
              Parceline
            </ShopNameItemStyled>
            <NameItemStyled>{el.name}</NameItemStyled>

            <BoxPriceQuantityStyled>
              <TextItemStyled>${el.price}.00</TextItemStyled>
              <QuantityBlock>
                <TextItemStyled>Quantity</TextItemStyled>
                <BoxQuantityStyled
                  type={"number"}
                  value={count}
                  onChange={setNumberOfItems}
                />
              </QuantityBlock>
            </BoxPriceQuantityStyled>

            <ShareBoxStyled>
              <ShareTextStyled>Share</ShareTextStyled>
              <ShareLinkStyled href="https://www.facebook.com">
                <FacebookIcon />
              </ShareLinkStyled>

              <ShareLinkStyled href="https://www.pinterest.com/">
                <PinterestIcon />
              </ShareLinkStyled>

              <ShareLinkStyled href="mailto:info@parcelineceramique.com">
                <MailOutlineIcon />
              </ShareLinkStyled>
            </ShareBoxStyled>

            {!isAdded && cart.indexOf(el) < 0 ? (
              <AddToCartButtonStyled
                variant="contained"
                onClick={() => handleOnClickAddToCart(el)}
              >
                Add to cart
              </AddToCartButtonStyled>
            ) : (
              <AddToCartButtonStyled variant="contained" disabled>
                Added
              </AddToCartButtonStyled>
            )}
            <DescriptionItemStyled>{el.description}</DescriptionItemStyled>

            <DimensionsStyled>
              Dimensions :
              <ParametersStyled>- diameter : {el.diameter}</ParametersStyled>
              <ParametersStyled>- height : {el.height}</ParametersStyled>
            </DimensionsStyled>

            <ColorsStyled>
              Colors:
              <ParametersStyled>- bowl : grey (stoneware)</ParametersStyled>
              <ParametersStyled>- drips : yellow</ParametersStyled>
            </ColorsStyled>

            <Box>
              {elementDescription.map((el: any, id: number) => (
                <OtherInfoStyled key={id}>{el}.</OtherInfoStyled>
              ))}
            </Box>
          </Box>
        </BoxItemStyled>
      ) : (
        <NotFoundPage />
      )}
    </ContainerShopStyled>
  );
};
