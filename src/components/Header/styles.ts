import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderBar = styled.header`
  background-color: rgba(106, 13, 173, 0.4);
  color: ${cores.branco};
  margin-bottom: 80px;
  border-radius: 12px;
`

export const HeaderContainer = styled.header`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.a`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${cores.branco};
`

export const List = styled.ul`
  display: flex;

  li {
    margin-left: 32px;
  }

  a {
    color: ${cores.branco};
    font-weight: 400;
  }
`
