import { useState } from "react"
import { Hamburguer, HeaderBar, HeaderContainer, List, NavMobile, Title } from "./styles"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderBar>
      <HeaderContainer>
        <Title href="#home">Lucas Menezes</Title>
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
