import styled, { createGlobalStyle } from "styled-components";

export const cores = {
  branco: '#fff',
  brancoOffWhite: '#F5F5F5',
  preto: '#000',
  cinza: '#AAB8C5',
  cinza2: '#eee',
  roxo: '#6A0DAD',
  roxo2: '#8A2BE2',
  azulEscuro: '#060417',
  azulIntermediario: '#102A43'
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

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`

export const Title = styled.div`
  text-align: center;
  padding-bottom: 80px;
  margin: 0 auto;
  max-width: 768px;

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

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    h2 {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }
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
  box-shadow: 0px 4px 6px rgba(106, 13, 173, 0.5);
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
  box-shadow: 0 4px 6px rgba(106, 13, 173, 0.5);
  transition: background-color .5s ease;

  &:hover {
    background-color: ${cores.roxo};
  }
`
