import styled from "styled-components";
import { breakpoints, cores } from "../../styles";
import waves_background from '../../assets/images/waves_background.jpg'

export const AboutContainer = styled.div`
  background-color: ${cores.azulEscuro};
  padding: 112px 0;
  background-image: url(${waves_background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(6, 4, 23, 0.9);
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 2;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 40%;
  gap: 80px;

  h3 {
    font-size: 16px;
    letter-spacing: 5px;
    color: ${cores.roxo};
    text-transform: uppercase;
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
    border-radius: 8px;
    object-fit: cover;
    width: 100%;
    max-height: 600px;
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
