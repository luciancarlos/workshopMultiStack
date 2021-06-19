import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import theme from "ui/themes/theme";

export const FormElementContainer = styled("div")`
  //styled joga as propriedades desse componente dentro do template-string(dentro da crase)
  //É possivel acessar esses elementos com uma arrowFunction, que retorna um objeto props,
  //então basta acessar 'props.' e acessar as propriedades do componente
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  /*'cifrao-chave' pra receber valor de fora, 
  '()' parametro da arrowFunction, um objeto,
  'chave novamente' para extrair a propriedade do parametro recebido
  */
  max-width: 650px;

  margin: 0 auto ${({ theme }) => theme.spacing(7)}; //função que multiplica por 8px o valor do parametro
`;

export const ProfissionaisPaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(7)};
  margin: auto ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    &.MuiPaper-root {
      padding: 0;
      box-shadow: none;
    }
  }
`;

export const ProfissionaisContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(6)};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-left: ${({ theme }) => theme.spacing(-2)};
    margin-right: ${({ theme }) => theme.spacing(-2)};
    > :nth-of-type(odd) {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }
`;
