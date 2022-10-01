import React from "react";
import { TypographyHeadStyled } from "../main/mainPage.styled";
import {
  ContainerStyled,
  SectionsBoxStyled,
  SubtitleTextWithMarginStyled,
} from "../footer/footer.styled";
import { ImgStoryStyled } from "./story.styled";
import oneStory from "../../icons/oneStory.png";
import twoStory from "../../icons/twoStory.png";
import threeStory from "../../icons/threeStory.png";
import fourStory from "../../icons/fourStory.png";
import fiveStory from "../../icons/fiveStory.png";

export const Story = () => {
  return (
    <ContainerStyled>
      <TypographyHeadStyled>Our Story</TypographyHeadStyled>

      <SectionsBoxStyled>
        <ImgStoryStyled src={oneStory} alt="" />

        <SubtitleTextWithMarginStyled>
          Parceline ceramique creates functional and decorative objects designed
          to bring beauty into the everyday. With simple shapes and clean lines,
          our artisanal pieces are designed with ergonomics in mind.
        </SubtitleTextWithMarginStyled>
        <SubtitleTextWithMarginStyled>
          Each product is created entirely by hand on the potter's wheel from
          high-quality stoneware or porcelain. Our collections include
          minimalist tableware and decorative pieces.
        </SubtitleTextWithMarginStyled>
        <SubtitleTextWithMarginStyled>
          Céline Fafard is a ceramic artist who founded Parceline ceramique when
          she graduated from Centre de céramique Bonsecours in 2010. Navigating
          the crossroads of art and craft, Parceline was created with an aim to
          create and pursue a passion.
        </SubtitleTextWithMarginStyled>
        <SubtitleTextWithMarginStyled>
          The name Parceline ceramique is a simple play on words, joining the
          material, porcelain, with the founder's first name, Céline. Porcelain,
          par Céline (translated as "by Céline").
        </SubtitleTextWithMarginStyled>
        <SubtitleTextWithMarginStyled>
          Parceline's pieces are created by Céline in her studio located at the
          Chat des Artistes building, in Montreal's Centre-Sud neighbourhood.
        </SubtitleTextWithMarginStyled>
        <SubtitleTextWithMarginStyled>
          In recent years, Parceline has taken part in many major events in
          Quebec and across Canada. Parceline products are also available in
          various boutiques in Montreal and elsewhere in Quebec.
        </SubtitleTextWithMarginStyled>

        <ImgStoryStyled src={twoStory} alt="" />
        <ImgStoryStyled src={threeStory} alt="" />
        <ImgStoryStyled src={fourStory} alt="" />
        <ImgStoryStyled src={fiveStory} alt="" />
      </SectionsBoxStyled>
    </ContainerStyled>
  );
};
