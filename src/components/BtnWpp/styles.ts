import styled from "styled-components";
import { breakpoints, cores } from "../../styles";

export const TooltipText = styled.span`
  visibility: hidden;
  position: absolute;
  width: 120px;
  top: 8px;
  left: -144px;
  padding: 6px;
  border-radius: 8px;
  text-align: center;
  background-color: ${cores.cinza2};
  color: ${cores.preto};
  opacity: 0;
  transition: opacity .5s ease;
`

export const ButtonWpp = styled.a`
  position: fixed;
  bottom: 14px;
  right: 24px;
  z-index: 100;

  img {
    max-width: 74px;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: ${breakpoints.tablet}) {
    img {
      max-width: 64px;
    }
  }
`
