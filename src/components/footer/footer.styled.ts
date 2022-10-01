import { styled } from "@mui/system";
import { Container, Box, Link, Typography } from "@mui/material";
import { TypographyHeadStyled } from "../main/mainPage.styled";

export const FooterContainer = styled("footer")({
  marginTop: "6rem",
});

export const FooterBoxStyled = styled(Box)({
  borderTop: "1px solid #edecea",
  maxWidth: "70rem",
  margin: "0 auto",
  paddingTop: "2rem",
  fontFamily: "Montserrat, sans-serif",
  lineHeight: 2,
  color: "#262626",
  fontSize: 15,
});

export const FooterHeadStyled = styled(TypographyHeadStyled)({
  fontSize: 19,
});

export const SocialMediaBoxStyled = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export const LinkSocialMediaStyled = styled(Link)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  fontFamily: "Montserrat, sans-serif",
  lineHeight: 2,
  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },
});

export const LinkFacebookStyled = styled(LinkSocialMediaStyled)({
  margin: "-3px 0 0 6px",
});

export const LinkInstagramStyled = styled(LinkSocialMediaStyled)({
  margin: "-3px 0 0 5px",
});

export const LinkEmailStyled = styled(LinkSocialMediaStyled)({
  margin: "-3px 25px 0 5px",
});

export const CopyrightStyled = styled(Box)({
  marginBottom: "0.5rem",
  fontWeight: 400,
  fontSize: 16,
  fontFamily: "Montserrat, sans-serif",
  color: "#adb3a9",
});

export const ScheduleBox = styled(Box)({
  marginTop: "1rem",
});

export const ScheduleDays = styled("p")({
  lineHeight: 0.2,
});

export const ScheduleHours = styled("p")({
  lineHeight: 2,
});

// ----------- Footer Links ------------------------

export const ContainerStyled = styled(Container)({
  marginTop: "10rem",
  boxSizing: "border-box",
  width: "50%",
});

export const SectionsBoxStyled = styled(Box)({
  marginTop: "3rem",
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  fontFamily: "Montserrat, sans-serif",
  color: "#646463",
});

export const SubtitleHeadStyled = styled(Typography)({
  fontWeight: 600,
  fontSize: 20,
  marginBottom: "1rem",
});

export const SubtitleTextStyled = styled(Typography)({
  fontWeight: 300,
  fontSize: 18,
  lineHeight: 1.7,
});

export const SubtitleTextWithMarginStyled = styled(SubtitleTextStyled)({
  marginBottom: "1rem",
});

export const MainTextWithMarginStyled = styled(SubtitleTextStyled)({
  marginBottom: "2rem",
});

export const InfoLink = styled(Link)({
  textDecoration: "none",
  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },
});
