import styled from "styled-components";
import { breakpoints, cores } from "../../styles";

export const HeroContainer = styled.div`
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
  text-transform: capitalize;
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
    height: 340px;
    width: 416px;
    object-fit: cover;
  }

  &:nth-child(1) {
    transform: translateX(-100px);
  }

  &:nth-child(2) {
    transform: translateX(-220px);
  }
`
