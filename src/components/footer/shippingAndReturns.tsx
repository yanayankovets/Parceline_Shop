import React from "react";
import { TypographyHeadStyled } from "../main/mainPage.styled";
import {
  ContainerStyled,
  SectionsBoxStyled,
  SubtitleHeadStyled,
  SubtitleTextStyled,
} from "./footer.styled";

export const ShippingAndReturns = () => {
  return (
    <ContainerStyled>
      <TypographyHeadStyled>Shipping & Returns</TypographyHeadStyled>

      <SectionsBoxStyled>
        <SubtitleHeadStyled>Shipping</SubtitleHeadStyled>
        <SubtitleTextStyled>
          Shipping costs are calculated according to the purchase amount.
        </SubtitleTextStyled>
        <SubtitleTextStyled>
          Shipping carrier : Canada Post or Chit-Chat
        </SubtitleTextStyled>
        <SubtitleTextStyled>
          Order processing time : 3-5 working days
        </SubtitleTextStyled>
        <SubtitleTextStyled>
          Order processing time for lamps : 2-3 weeks
        </SubtitleTextStyled>
        <SubtitleTextStyled>
          Free pick-up is available at our studio in Montreal. Enter the coupon
          code PICKUPMTL at checkout.
        </SubtitleTextStyled>
      </SectionsBoxStyled>

      <SectionsBoxStyled>
        <SubtitleHeadStyled>Taxes and duty</SubtitleHeadStyled>
        <SubtitleTextStyled>
          Provincial and federal taxes will be added for all Canadian customers.
        </SubtitleTextStyled>
        <SubtitleTextStyled>
          Please note that duties may apply to international shipping. Buyers
          are responsible for all customs and import taxes that may apply.
        </SubtitleTextStyled>
        <SubtitleTextStyled>
          Parceline ceramique is not responsible for delays due to customs.
        </SubtitleTextStyled>
      </SectionsBoxStyled>

      <SectionsBoxStyled>
        <SubtitleHeadStyled>Return policy</SubtitleHeadStyled>
        <SubtitleTextStyled>
          We are happy to accept exchanges. We do not accept returns or
          cancellations. Please contact us if you have any problems with your
          order.
        </SubtitleTextStyled>
        <SubtitleTextStyled>Conditions of exchange</SubtitleTextStyled>
        <SubtitleTextStyled>
          Buyers are responsible for all shipping costs, included return
          shipping costs. If the item is not returned in its original condition,
          the buyer is responsible for any loss in value.
        </SubtitleTextStyled>
      </SectionsBoxStyled>

      <SectionsBoxStyled>
        <SubtitleHeadStyled>Final sale</SubtitleHeadStyled>
        <SubtitleTextStyled>
          Because of the nature of the items, unless they arrive damaged or
          defective, we can't accept returns for :
        </SubtitleTextStyled>
        <SubtitleTextStyled>- Custom orders</SubtitleTextStyled>
        <SubtitleTextStyled>- Sale items</SubtitleTextStyled>
      </SectionsBoxStyled>
    </ContainerStyled>
  );
};
