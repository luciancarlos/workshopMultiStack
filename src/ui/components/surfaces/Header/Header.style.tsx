import { experimentalStyled as styled } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

  ${({ theme }) => theme.breakpoints.up("md")} {
    //para desktops
    .MuiToolbar-root {
      //Classe css do Toolbar
      height: 100px;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    //telas menores
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled("img")`
  height: 25px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 47px;
  }
`;