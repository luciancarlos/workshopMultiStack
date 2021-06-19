import React from 'react';
import {PageTitleContainer, PageTitleStyled} from './PageTitle.style';

interface PageTitleProps{ //do typescript para inserir tipagem. props padrão do material-ui
    title: string;
    subtitle?: string | JSX.Element;// | quer dizer pode ser string ou elemento.
                                    // ? quer dizer que propriedade é opcional
}
const PageTitle:React.FC<PageTitleProps> = (props) => { 
    // garantir tipagem pois o vscode nao entende as propriedades nativamente
    //props -e um objeto com todos atributos enviados do index        
    //os atributos não explicitos na interface podem ser acessados em props.children
    return (
        <PageTitleContainer>   
            <PageTitleStyled>
                {props.title}                
            </PageTitleStyled>         
            {props.subtitle}
        
        </PageTitleContainer>
        );
    }
    
    export default PageTitle;