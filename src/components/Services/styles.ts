import styled from "styled-components";
import { breakpoints, cores } from "../../styles";

export const ServicesContainer = styled.div`
  padding: 112px 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 33% auto;
  column-gap: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
  }
`

export const SectionTitle = styled.div`

  h3 {
    font-size: 14px;
    font-weight: 500;
    color: ${cores.roxo};
  }

  h2 {
    font-size: 40px;
    font-weight: bold;
    line-height: 50px;
    margin: 16px 0 24px;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    color: ${cores.cinza};
    margin-bottom: 32px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 60px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    h2 {
      font-size: 28px;
      line-height: 42px;
    }
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 48px;
  row-gap: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
`

export const ListItem = styled.li`

  i {
    font-size: 48px;
    color: ${cores.roxo};
  }

  h4 {
    font-size: 24px;
    font-weight: bold;
    margin: 24px 0;
  }

  p {
    color: ${cores.cinza};
  }

  &:nth-child(4) {
    background-color: ${cores.roxo};
    padding: 24px;
    border-radius: 12px;

    i {
      color: ${cores.branco};
    }

    p {
      color: ${cores.branco};
    }
  }
`
