import React from "react";
import { TypographyHeadStyled } from "../main/mainPage.styled";
import {
  ContainerStyled,
  SectionsBoxStyled,
  SubtitleHeadStyled,
  SubtitleTextStyled,
  SubtitleTextWithMarginStyled,
} from "./footer.styled";

export const Retailers = () => {
  return (
    <ContainerStyled>
      <TypographyHeadStyled>Retailers</TypographyHeadStyled>

      <SectionsBoxStyled>
        <SubtitleHeadStyled>Montreal :</SubtitleHeadStyled>
        <SubtitleTextWithMarginStyled>
          Femme mécanique design - 2717 Masson, Montreal
        </SubtitleTextWithMarginStyled>
        <SubtitleTextWithMarginStyled>
          Boutique Articho - 300 Villeray, Montreal
        </SubtitleTextWithMarginStyled>
        <SubtitleTextWithMarginStyled>
          Espace Flo - 312 Fleury west, Montreal
        </SubtitleTextWithMarginStyled>
        <SubtitleTextStyled>
          Kitsh à l'Os - 3439 Hochelaga street, Montreal
        </SubtitleTextStyled>
      </SectionsBoxStyled>

      <SectionsBoxStyled>
        <SubtitleHeadStyled>Quebec province :</SubtitleHeadStyled>
        <SubtitleTextWithMarginStyled>
          Twist Baie-Saint-Paul - 45 St-Jean-Baptiste street, Baie-St-Paul
        </SubtitleTextWithMarginStyled>
        <SubtitleTextWithMarginStyled>
          Maison Foret - 1413 de la Sapinière, Val-David
        </SubtitleTextWithMarginStyled>
        <SubtitleTextStyled>
          MBAQ - Parc des Champs-de-Bataille, Québec
        </SubtitleTextStyled>
      </SectionsBoxStyled>
    </ContainerStyled>
  );
};
