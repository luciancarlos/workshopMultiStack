import React from "react";
import { FooterStyled, FooterContainer, FooterTitle } from "./Footer.styled";
import { Typography, Box } from "@material-ui/core";
import { AppList } from "./Footer.styled";
import { AppContainer } from "@styles/pages/_app.style";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos </FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            E-diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza de sua casa. Garantimos a melhor profissional com
            total segurança e praticidade! São milhares de clientes satisfeitos
            por todo país.
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nossos aplicativos </FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"img/logos/google-play.png"} alt={"Google Play"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
