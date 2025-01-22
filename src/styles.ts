import styled, { createGlobalStyle } from "styled-components";

export const cores = {
  branco: '#fff',
  preto: '#000',
  cinza: '#AAB8C5',
  roxo: '#6A0DAD',
  azulEscuro: '#060417'
}

export const breakpoints = {
  tablet: '768px',
  desktop: '1024px'
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
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
  }
`

export const Title = styled.div`
  text-align: center;
  padding-bottom: 80px;
  margin: 0;

  h3 {
    font-size: 14px;
    font-weight: 500;
    color: ${cores.roxo};
  }

  h2 {
    font-size: 40px;
    font-weight: bold;
    margin: 8px 0 16px;
  }

  p {
    font-size: 16px;
    letter-spacing: 1px;
    color: ${cores.cinza};
  }
`


export const ButtonPrimary = styled.a`
  display: inline-block;
  padding: 12px 24px;
  color: ${cores.branco};
  background: ${cores.roxo};
  border-radius: 8px;
  border: 2px solid ${cores.roxo};
  font-weight: 500;
  cursor: pointer;
  transition: background-color .5s ease;

  &:hover {
    background-color: transparent;
  }
`

export const ButtonSecondary = styled.a`
  display: inline-block;
  padding: 12px 24px;
  color: ${cores.branco};
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid ${cores.roxo};
  font-weight: 500;
  cursor: pointer;
  margin-right: 16px; //remover
  transition: background-color .5s ease;

  &:hover {
    background-color: ${cores.roxo};
  }
`
