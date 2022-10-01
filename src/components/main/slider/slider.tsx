import React from "react";
import { useNavigate } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import {
  LoveHeadStyled,
  LoveTextStyled,
  SliderImgStyled,
  SliderShopButtonStyled,
  SwiperLoveBoxStyled,
  SwiperStonewareBoxStyled,
  SwiperStoryBoxStyled,
  SwiperStyled,
} from "./slider.styled";

import love from "../../../icons/Say_it_with_love.png";
import story from "../../../icons/Our_story.webp";
import stoneware from "../../../icons/Stoneware.png";

export function SingleLineImageList() {
  const navigate = useNavigate();
  return (
    <>
      <SwiperStyled
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide style={{ position: "relative" }}>
          <SliderImgStyled src={love} />
          <SwiperLoveBoxStyled>
            <LoveHeadStyled>Say it with love</LoveHeadStyled>
            <LoveTextStyled>Customizable ceramics</LoveTextStyled>
            <SliderShopButtonStyled
              onClick={() => navigate("/shop")}
              variant="contained"
            >
              Shop
            </SliderShopButtonStyled>
          </SwiperLoveBoxStyled>
        </SwiperSlide>

        <SwiperSlide>
          <SliderImgStyled src={stoneware} />
          <SwiperStonewareBoxStyled>
            <LoveHeadStyled>Stoneware</LoveHeadStyled>
            <LoveTextStyled>Discover the collection</LoveTextStyled>
            <SliderShopButtonStyled
              onClick={() => navigate("/shop")}
              variant="contained"
            >
              Shop
            </SliderShopButtonStyled>
          </SwiperStonewareBoxStyled>
        </SwiperSlide>

        <SwiperSlide>
          <SliderImgStyled src={story} />
          <SwiperStoryBoxStyled>
            <LoveHeadStyled>Our Story</LoveHeadStyled>
            <SliderShopButtonStyled
              onClick={() => navigate("/story")}
              variant="contained"
            >
              Discover
            </SliderShopButtonStyled>
          </SwiperStoryBoxStyled>
        </SwiperSlide>
      </SwiperStyled>
    </>
  );
}
