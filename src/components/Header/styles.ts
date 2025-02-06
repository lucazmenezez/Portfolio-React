import styled from "styled-components";
import { breakpoints, cores } from "../../styles";

export const HeaderBar = styled.header`
  background-color: rgba(106, 13, 173, 0.4);
  color: ${cores.branco};
  border-radius: 12px;
`

export const HeaderContainer = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    > nav {
      display: none;
    }
  }
`

export const NavMobile = styled.nav`
  display: block;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;

  &.is-open {
    max-height: 354px;
    opacity: 1;
  }
`

export const Title = styled.a`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${cores.branco};
  transition: transform 0.5s ease-in-out;
  will-change: transform;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`

export const List = styled.ul`
  display: flex;

  li {
    margin-left: 32px;
  }

  a {
    color: ${cores.branco};
    font-weight: 400;
    transition: color 0.4s ease;

    &:hover {
      color: ${cores.cinza};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: block;

    li {
      margin-left: 0;
      text-align: center;
    }

    a {
      padding: 16px 0;
      display: block;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  cursor: pointer;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${cores.branco};
    margin-bottom: 4px;
    border: none;
  }

  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`
