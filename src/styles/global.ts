import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`



*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.baseText};
          font-family: "Nunito", sans-serif;

}


`;
