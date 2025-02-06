import styled from "styled-components";
import { breakpoints, cores } from "../../styles";

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 80px;
  padding: 80px 0 112px;
  overflow-x: hidden;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`

export const ContactTitle = styled.div`

  h3 {
    font-size: 14px;
    color: ${cores.roxo};
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  h2 {
    margin: 16px 0 24px;
    font-size: 40px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: ${cores.cinza};
  }

  @media (max-width: ${breakpoints.tablet}) {
    h2 {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }
  }
`

export const ContactList = styled.ul``

export const ListItem = styled.li`
  margin-bottom: 24px;

  > div {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

    img {
      height: 20px;
      width: 20px;
    }

    h4 {
      font-size: 18px;
    }
  }

  span {
    font-size: 16px;
    color: #ccc;
    flex-wrap: wrap;
  }
`
