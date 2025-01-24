import styled from "styled-components";
import { breakpoints, cores } from "../../styles";

export const FooterContainer = styled.footer`
  padding: 60px;
  background-color: ${cores.branco};
  color: ${cores.azulEscuro};

  @media (max-width: ${breakpoints.desktop}) {
    text-align: center;
  }
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
    transition: transform 0.5s ease-in-out;
    will-change: transform;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    gap: 40px;
  }
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    display: block;

    li {
      margin-bottom: 12px;
    }
  }
`

export const LinkItem = styled.li`
  color: ${cores.azulEscuro};
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: color .5s ease, border .5s ease;

  &:hover {
    border-bottom: 2px solid ${cores.azulEscuro};
  }
`

export const SocialLinks = styled(Links)`
  column-gap: 12px;

  i {
    color: ${cores.roxo};
    font-size: 20px;
    transition: transform 0.5s ease;
    will-change: transform;
  }

  li {
    &:hover i {
      transform: translateY(-8px);
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    column-gap: 18px;

    i {
      font-size: 22px;
    }
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
