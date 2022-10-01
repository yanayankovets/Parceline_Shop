import React, { useState } from "react";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  Box,
  Modal,
} from "@mui/material";
import { ContainerShopStyled } from "../shop/shop.styled";
import { TypographyHeadStyled, ModalText } from "../main/mainPage.styled";
import {
  style,
  PaperStyled,
  CartImgStyled,
  HeadTableCellStyled,
  PriceCellStyled,
  QuantityCellStyled,
  PayImageStyled,
  PayBoxStyled,
  OrderButtonStyled,
  TotalAndPayBoxStyled,
  TotalBoxStyled,
  TextareaAutosizeStyled,
  InstructionsStyled,
  TableHeadStyled,
  TableCellExit,
  TableItemNameStyled,
  TableCellProductStyled,
  TableRowStyled,
  HeadTableCellProductStyled,
  HeadTableCellExitStyled,
  EmptyCartStyled,
  ShopLinkStyled,
} from "./cart.styled";
import ShopPay from "../../icons/ShopPay.webp";
import PayPal from "../../icons/PayPal.webp";
import GPay from "../../icons/GPay.webp";
import { useAppDispatch, useAppSelector } from "../redux/hooks/reduxHooks";
import { clearCart, removeItem } from "../redux/store/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const cartArr = useAppSelector((state) => state.list.value);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (isAuth) dispatch(clearCart());
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();

  const handleOnClickDelete = (el: any) => {
    cartArr.filter((item: any) => item != el);
    dispatch(removeItem(el));
  };

  return (
    <ContainerShopStyled>
      <TypographyHeadStyled>Cart</TypographyHeadStyled>

      <PaperStyled>
        <Table>
          <TableHeadStyled>
            <TableRowStyled>
              <HeadTableCellProductStyled align="left">
                PRODUCT
              </HeadTableCellProductStyled>
              <HeadTableCellStyled align="right">PRICE</HeadTableCellStyled>
              <HeadTableCellStyled align="right">QUANTITY</HeadTableCellStyled>
              <HeadTableCellStyled align="right">TOTAL</HeadTableCellStyled>
              <HeadTableCellExitStyled align="right"></HeadTableCellExitStyled>
            </TableRowStyled>
          </TableHeadStyled>
          <TableBody>
            {cartArr.length ? (
              cartArr.map((el: any) => (
                <TableRow key={el.value.id + el.value.name}>
                  <TableCellProductStyled component="th" scope="row">
                    <CartImgStyled
                      onClick={() => navigate("/item")}
                      src={"data:image/jpeg;base64," + el.value.image}
                      alt="/"
                    ></CartImgStyled>
                    <TableItemNameStyled onClick={() => navigate("/item")}>
                      {el.value.name}
                    </TableItemNameStyled>
                  </TableCellProductStyled>
                  <PriceCellStyled align="right">
                    ${el.value.price}.00
                  </PriceCellStyled>
                  <TableCell align="center">
                    <QuantityCellStyled>{el.count}</QuantityCellStyled>
                  </TableCell>
                  <PriceCellStyled align="right">
                    ${el.value.price * el.count}.00
                  </PriceCellStyled>
                  <TableCellExit
                    onClick={() => handleOnClickDelete(el)}
                    align="right"
                  >
                    &times;
                  </TableCellExit>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>
                  <EmptyCartStyled>
                    You don't have any items in your cart yet.{" "}
                    <ShopLinkStyled onClick={() => navigate("/shop")}>
                      Continue shopping?
                    </ShopLinkStyled>
                  </EmptyCartStyled>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </PaperStyled>

      <TotalAndPayBoxStyled>
        <TotalBoxStyled>
          <Box>
            Total: $
            {cartArr.reduce(
              (acc: number, curr: any) => acc + curr.value.price * curr.count,
              0
            )}
            .00
          </Box>
          {cartArr.length > 0 ? (
            <OrderButtonStyled variant="contained" onClick={handleOpen}>
              Make an order
            </OrderButtonStyled>
          ) : (
            <OrderButtonStyled variant="contained" disabled>
              Make an order
            </OrderButtonStyled>
          )}
        </TotalBoxStyled>

        <Box>
          <Box>
            <InstructionsStyled>Special instructions</InstructionsStyled>
            <TextareaAutosizeStyled
              aria-label="minimum height"
              minRows={8}
            ></TextareaAutosizeStyled>
          </Box>

          <PayBoxStyled>
            <PayImageStyled src={PayPal} />
            <PayImageStyled src={ShopPay} />
            <PayImageStyled src={GPay} />
          </PayBoxStyled>
        </Box>
      </TotalAndPayBoxStyled>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isAuth ? (
            <ModalText>
              You have made an order! Check your email for details.
            </ModalText>
          ) : (
            <ModalText>
              You aren't authorized!{" "}
              <div>Please, sign in to make an order.</div>
            </ModalText>
          )}{" "}
        </Box>
      </Modal>
    </ContainerShopStyled>
  );
};
