import { HeaderBar, HeaderContainer, List, Title } from "./styles"

const Header = () => (
  <HeaderBar>
    <HeaderContainer>
      <Title href="#">Lucas Menezes</Title>
      <nav>
        <List>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Depoimentos</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Dúvidas</a>
          </li>
        </List>
      </nav>
    </HeaderContainer>
  </HeaderBar>
)

export default Header
