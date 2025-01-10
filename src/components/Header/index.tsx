import { HeaderBar, HeaderContainer, List, Title } from "./styles"

const Header = () => (
  <HeaderBar>
    <HeaderContainer>
      <Title href="#home">Lucas Menezes</Title>
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
  </HeaderBar>
)

export default Header
