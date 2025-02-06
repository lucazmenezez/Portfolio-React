import styled from "styled-components";
import { breakpoints, ButtonPrimary, cores } from "../../styles";

export const WebsitesContainer = styled.div`
  padding: 40px 0 112px;
  background-color: ${cores.azulIntermediario};
  border-radius: 24px 24px 0 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`

export const ListItem = styled.li`
  transition: transform 0.3s ease-in-out;
  will-change: transform;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`

export const BackgroundImage = styled.div`
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  padding: 24px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 0;
    border-radius: 12px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 32px;

    &::before {
      background: rgba(0, 0, 0, 0.6);
    }
  }
`

export const Content = styled.div`
  z-index: 1;
  position: relative;

  span {
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 2px;
    color: ${cores.branco};
  }

  h4 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    color: ${cores.cinza2};
  }
`

export const Cta = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${ButtonPrimary} {
    max-width: 400px;
    width: 100%;
    text-align: center;
    transition: background-color .5s ease, transform 0.5s ease-in-out;
    will-change: transform;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    ${ButtonPrimary} {
      max-width: 100%;
    }
  }
`
