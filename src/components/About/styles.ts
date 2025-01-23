import styled from "styled-components";
import { breakpoints, cores } from "../../styles";

export const AboutContainer = styled.div`
  background-color: ${cores.azulEscuro};
  padding: 112px 0;
`

export const Content = styled.div`
  display: flex;
  gap: 80px;

  h3 {
    font-size: 16px;
    letter-spacing: 5px;
    color: ${cores.roxo};
  }

  h2 {
    font-size: 36px;
    border-left: 8px solid ${cores.roxo};
    padding-left: 24px;
    margin: 24px 0;

    span {
      color: ${cores.roxo};
    }
  }

  img {
    border-radius: 12px;
    object-fit: cover;
    max-width: 500px;
    max-height: 500px;
    display: block;
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: block;

    img {
      margin: 40px auto 0;
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    h2 {
      font-size: 28px;
    }
  }
`
