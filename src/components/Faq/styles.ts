import styled from "styled-components";
import { cores } from "../../styles";

export const FaqContainer = styled.div`
  padding-bottom: 112px;
  padding-top: 40px;
  max-width: 768px;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 200px;
    left: -400px;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background-color: ${cores.roxo};
    z-index: -1;
    filter: blur(180px);
    opacity: 0.6;
  }
`

export const Accordion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const AccordionItem = styled.div`
  background-color: ${cores.branco};
  color: ${cores.preto};
  border-radius: 4px;
  padding: 12px 24px;
  margin-bottom: 8px;
  width: 100%;
`

export const AccordionHeader = styled.div`
  color: ${cores.azulEscuro};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  span {
    font-size: 24px;
    font-weight: 500;
  }
`

export const Content = styled.p`
  font-size: 16px;
  font-weight: 500;
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);

  &.show {
    height: auto;
    max-height: 9999px;
    transition: all 0.5s cubic-bezier(1, 0, 1, 0);
  }
`
