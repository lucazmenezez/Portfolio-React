import styled from "styled-components";
import { breakpoints, cores } from "../../styles";

export const HeroContainer = styled.div`
  margin-top: 80px;
  position: relative;

  .icon1 {
    position: absolute;
    top: 0;
    left: 120px;
    height: 48px;
    width: 48px;
    display: block;
  }

  .icon2 {
    position: absolute;
    top: 0;
    right: 110px;
    height: 48px;
    width: 48px;
    display: block;
  }

  @media (max-width: ${breakpoints.desktop}) {
    .icon1 {
      left: 40px;
    }

    .icon2 {
      top: -25px;
      right: 40px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    .icon1 {
      left: 5px;
      height: 32px;
      width: 32px;
    }

    .icon2 {
      top: -20px;
      right: 18px;
      height: 32px;
      width: 32px;
    }
  }

  //telas grandes
  @media (min-width: 1260px) {
    .icon1 {
      left: 228px;
    }

    .icon2 {
      right: 228px;
    }
  }
`

export const Content = styled.div`
  max-width: 768px;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 80px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -50px;
    left: 80px;
    width: 80%;
    height: 22rem;
    border-radius: 50%;
    background-color: ${cores.roxo};
    z-index: -1;
    filter: blur(180px);

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      max-width: 100%;
      height: 21rem;
      left: 0;
    }
  }
`

export const MainTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  line-height: 60px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 36px;
    line-height: 54px;
  }
`

export const Description = styled.p`
  color: ${cores.cinza};
  font-weight: 400;
  margin: 16px 0 24px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`

export const ContainerFlex = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 16px;

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${cores.cinza2};

  .status-icon {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #4CAF50; /* Verde para disponibilidade */
    box-shadow: 0 0 4px rgba(76, 175, 80, 0.6); /* Efeito de brilho */
  }

  span {
    display: block;
  }
`

export const ImagesContainer = styled.div`
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
  display: block;
`

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 16px;
  margin-bottom: 16px;

  img {
    display: block;
    border-radius: 12px;
    height: 410px;
    width: 450px;
    object-fit: cover;
  }

  &:nth-child(1) {
    transform: translateX(-150px);
  }

  &:nth-child(2) {
    transform: translateX(-220px);
  }

  @media (max-width: ${breakpoints.desktop}) {
    img {
      height: 360px;
      width: 400px;
    }

    &:nth-child(1) {
      transform: translateX(-520px);
    }
  }
`
