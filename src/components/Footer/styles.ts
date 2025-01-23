import styled from "styled-components";
import { cores } from "../../styles";

export const FooterContainer = styled.footer`
  padding: 60px;
  background-color: ${cores.branco};
  color: ${cores.azulEscuro};
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`

export const PrimaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.azulEscuro};
  }
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 32px;

  a {
    color: ${cores.azulEscuro};
    font-weight: 500;
  }
`

export const SocialLinks = styled(Links)`
  column-gap: 12px;

  i {
    color: ${cores.roxo};
    font-size: 18px;
  }
`

export const SecondaryRow = styled.div`
  text-align: center;
  border-top: 1px solid ${cores.azulEscuro};
  padding-top: 32px;

  p {
    font-size: 14px;
  }
`
