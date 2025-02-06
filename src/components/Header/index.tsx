import { useState } from "react"

import closeIcon from '../../assets/icons/x-solid.svg'

import { Hamburguer, HeaderBar, HeaderContainer, List, NavMobile, Title } from "./styles"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderBar id="home" className="container">
      <HeaderContainer>
        <Title href="#home">Lucas <span>Menezes</span></Title>
        <Hamburguer onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburguer>
        <nav>
          <List>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#reviews">Depoimentos</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#faq">Dúvidas</a>
            </li>
          </List>
        </nav>
      </HeaderContainer>
      <NavMobile className={menuOpen ? 'is-open' : ''}>
        <button onClick={() => setMenuOpen(false)}>
          <img src={closeIcon} alt="ícone de fechar" />
        </button>
        <List>
          <li>
            <a href="#home">Início</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#reviews">Depoimentos</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#faq">Dúvidas</a>
          </li>
        </List>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
