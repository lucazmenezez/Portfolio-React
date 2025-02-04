import styled from "styled-components";
import { breakpoints, cores, Title } from "../../styles";

export const ReviewsContainer = styled.div`
  padding-bottom: 112px;
  background: linear-gradient(${cores.azulEscuro}, ${cores.roxo});
  border-radius: 0 0 24px 24px;

  ${Title} {
    i {
      font-size: 84px;
      color: ${cores.roxo};
      margin-bottom: 8px;
    }
  }
`

export const Card = styled.ul`
  display: block;
`

export const CardItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 40%;
  gap: 60px;
  background-color:rgb(13, 9, 52, 0.5);
  padding: 32px;
  border-radius: 12px;
  margin-bottom: 32px;
  box-shadow: 0px 4px 10px ${cores.azulEscuro};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;

    i {
      color: gold;
    }

    > p {
      color: ${cores.branco};
      font-weight: bold;
      line-height: 26px;
    }
  }

  img {
    display: block;
    width: 100%;
    border-radius: 8px;
    max-height: 500px;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: block;

    > div {
      margin-bottom: 24px;

      > p {
        margin: 24px 0;
      }
    }

    img {
      width: 80%;
      margin: 0 auto;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {

    img {
      width: 100%;
    }
  }
`

export const InfosPerson = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

    p {
      font-weight: 400;
    }

    span {
      color: ${cores.cinza};
    }
`
