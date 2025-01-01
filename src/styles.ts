import { createGlobalStyle } from "styled-components";

export const cores = {
  branco: '#fff',
  preto: '#000',
  roxo: '#6A0DAD',
  azulEscuro: '#060417'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${cores.azulEscuro};
    color: ${cores.branco};
  }
`
