import styled from "styled-components";
import { cores } from "../../styles";

export const HeroContainer = styled.div`
  padding-bottom: 112px;
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
  }
`

export const MainTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-transform: capitalize;
  line-height: 60px;
`

export const Description = styled.p`
  color: ${cores.cinza};
  font-weight: 400;
  margin: 16px 0 24px;
`

export const ButtonPrimary = styled.a`
  display: inline-block;
  padding: 12px 24px;
  color: ${cores.branco};
  background: ${cores.roxo};
  border-radius: 8px;
  border: 2px solid ${cores.roxo};
  font-weight: 500;
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
  margin-right: 16px; //remover
  transition: background-color .5s ease;

  &:hover {
    background-color: ${cores.roxo};
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
