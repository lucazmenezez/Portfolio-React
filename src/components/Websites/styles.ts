import styled from "styled-components";
import { ButtonPrimary, cores } from "../../styles";

export const WebsitesContainer = styled.div`
  padding: 40px 0 112px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
`

export const ListItem = styled.li`
  border: 2px solid ${cores.roxo};
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(106, 13, 173, 0.5);

  span {
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 2px;
    color: ${cores.roxo};
  }

  img {
    width: 100%;
    display: block;
    border-radius: 12px;
    margin: 8px 0;
  }

  h4 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    color: ${cores.cinza};
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
  }
`
