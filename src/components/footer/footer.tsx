import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  CopyrightStyled,
  FooterBoxStyled,
  FooterContainer,
  FooterHeadStyled,
  InfoLink,
  LinkEmailStyled,
  LinkFacebookStyled,
  LinkInstagramStyled,
  ScheduleBox,
  ScheduleDays,
  ScheduleHours,
  SocialMediaBoxStyled,
} from "./footer.styled";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <FooterBoxStyled>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <FooterHeadStyled>Information</FooterHeadStyled>
              <Box>
                <InfoLink color="inherit" onClick={() => navigate("/shipping")}>
                  Shipping and Returns
                </InfoLink>
              </Box>
              <Box>
                <InfoLink color="inherit" onClick={() => navigate("/care")}>
                  Care & Cleaning
                </InfoLink>
              </Box>
              <Box>
                <InfoLink color="inherit" onClick={() => navigate("/terms")}>
                  Terms of service
                </InfoLink>
              </Box>
              <Box>
                <InfoLink
                  color="inherit"
                  onClick={() => navigate("/retailers")}
                >
                  Retailers
                </InfoLink>
              </Box>

              <Box>
                <InfoLink color="inherit" onClick={() => navigate("/contact")}>
                  Contact
                </InfoLink>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FooterHeadStyled>Follow us out there</FooterHeadStyled>
              <SocialMediaBoxStyled>
                <FacebookIcon />
                <LinkFacebookStyled
                  href="https://www.facebook.com/Parcelineceramique"
                  color="inherit"
                >
                  Facebook
                </LinkFacebookStyled>
              </SocialMediaBoxStyled>
              <SocialMediaBoxStyled>
                <InstagramIcon />
                <LinkInstagramStyled
                  href="https://www.instagram.com/Parceline_ceramique/"
                  color="inherit"
                >
                  Instagram
                </LinkInstagramStyled>
              </SocialMediaBoxStyled>

              <SocialMediaBoxStyled>
                <MailOutlineIcon />
                <LinkEmailStyled
                  href="mailto:info@parcelineceramique.com"
                  color="inherit"
                >
                  E-mail
                </LinkEmailStyled>
              </SocialMediaBoxStyled>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FooterHeadStyled>Parceline</FooterHeadStyled>
              <Box>Based in Montreal</Box>
              <Box>(2205 Parthenais #316)</Box>
              <ScheduleBox>
                Pick-up schedule, with appointment only:
                <ScheduleDays>Monday - Friday</ScheduleDays>
                <ScheduleHours>9 h - 16 h 30</ScheduleHours>
              </ScheduleBox>
            </Grid>
          </Grid>
          <CopyrightStyled
            textAlign="center"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
          >
            Copyright &reg; {new Date().getFullYear()} Parceline. Powered by
            Shopify
          </CopyrightStyled>
        </Container>
      </FooterBoxStyled>
    </FooterContainer>
  );
}
