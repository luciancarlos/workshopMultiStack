import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Toolbar, Container } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      {/* empurra os depais elementos pra baixo, pra nao ficar na travado na frente dos elementos */}
      <Toolbar component={Container}>
        {/* Use o elemento Container na renderização */}
        <HeaderLogo
          src={"./img/logos/logo.svg"}
          alt={"e-diaristas"}
        ></HeaderLogo>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
