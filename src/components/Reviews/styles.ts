import styled from "styled-components";
import { breakpoints, cores } from "../../styles";

export const ReviewsContainer = styled.div`
  padding-bottom: 112px;
  background: linear-gradient(${cores.azulEscuro}, ${cores.roxo});
  border-radius: 0 0 24px 24px;
`

export const Card = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
  }
`

export const CardItem = styled.li`
  padding: 32px;
  border: 2px solid ${cores.branco};
  border-radius: 12px;

  i {
    color: gold;
  }

  p {
    margin: 24px 0;
    color: ${cores.branco};
    font-weight: bold;
    letter-spacing: 1px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 40px;
    text-align: center;
  }
`

export const InfosPerson = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    display: block;
    width: 48px;
    height: 48px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    font-size: 14px;

    b {
      font-size: 14px
    }

    span {
      font-size: 14px;
      color: ${cores.cinza};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    justify-content: center;
  }
`
