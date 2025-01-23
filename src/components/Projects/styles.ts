import styled from "styled-components";
import { breakpoints, cores } from "../../styles";

export const ProjectsContainer = styled.div`
  background: ${cores.azulEscuro};
  padding: 112px 0;
`

export const TabButton = styled.div`
  padding-bottom: 80px;

  ul {
    display: flex;
    justify-content: center;

    li {
      margin-left: 8px; //trocar
      transition: all .5s ease;

      span {
        background-color: ${cores.branco};
        color: ${cores.preto};
        border-radius: 12px;
        padding: 8px 16px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: all .5s ease;
      }
    }
  }

  .active {
    color: ${cores.branco};
    background-color: ${cores.roxo};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  .content {
    display: none;
  }

  .show-content {
    display: block;
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
    margin-bottom: 40px;
  }
`

export const ListItem = styled.ul`
  border: 2px solid ${cores.branco};
  position: relative;

  img {
    width: 100%;
    display: block;
  }

  span {
      background-color: ${cores.roxo};
      color: ${cores.branco};
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      position: absolute;
      top: 8px;
      right: 8px;
    }

  > div {
    padding: 24px;

    h4 {
      font-size: 20px;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      color: ${cores.cinza};
      margin: 8px 0 16px;
    }

    a {
      color: ${cores.branco};
      display: block;
      font-size: 16px;
      font-weight: 500;
      margin-top: 16px;

      i {
        margin-left: 8px;
      }
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 40px;
  }
`
