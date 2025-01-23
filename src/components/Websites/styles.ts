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
  background-color: ${cores.azulIntermediario};
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(16, 42, 67, 0.5);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  will-change: transform;

  span {
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 2px;
    color: ${cores.brancoOffWhite};
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
    color: ${cores.cinza2};
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(16, 42, 67, 0.7);
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
`
