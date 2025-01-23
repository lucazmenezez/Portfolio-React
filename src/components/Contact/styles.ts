import styled from "styled-components";
import { cores } from "../../styles";

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 80px;
  padding: 80px 0 112px;
`

export const ContactTitle = styled.div`
  h3 {
    font-size: 14px;
    color: ${cores.roxo};
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
`

export const ContactList = styled.ul``

export const ListItem = styled.li`
  margin-bottom: 24px;

  > div {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

    i {
      color: ${cores.roxo};
      font-size: 20px;
    }

    h4 {
      font-size: 18px;
    }
  }

  span {
    font-size: 16px;
    color: #ccc;
  }
`
