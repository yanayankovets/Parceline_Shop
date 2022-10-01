import React from "react";
import { TypographyHeadStyled } from "../main/mainPage.styled";
import {
  ContainerStyled,
  MainTextWithMarginStyled,
  SectionsBoxStyled,
  SubtitleTextStyled,
} from "./footer.styled";

export const CareAndCleaning = () => {
  return (
    <ContainerStyled>
      <TypographyHeadStyled>Care & Cleaning</TypographyHeadStyled>

      <SectionsBoxStyled>
        <MainTextWithMarginStyled>
          All our products are dishwasher safe (remove strings or power cords
          before washing hanging planters or lamps).
        </MainTextWithMarginStyled>
        <MainTextWithMarginStyled>
          Pieces from the stoneware and speckled collections aren't microwave
          safe due to a risk of overheating. Please avoid sudden heat shock and
          changes in temperature. Items may break if dropped. We cannot be held
          responsible for damages due to improper use or accidents.
        </MainTextWithMarginStyled>
        <SubtitleTextStyled>
          Because each piece is handmade, there may be variations in glaze,
          dimensions or other features.
        </SubtitleTextStyled>
      </SectionsBoxStyled>
    </ContainerStyled>
  );
};
