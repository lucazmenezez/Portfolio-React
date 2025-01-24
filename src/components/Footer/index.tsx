import { FooterContainer, FooterContent, LinkItem, Links, PrimaryRow, SecondaryRow, SocialLinks } from "./styles"

const currentYear = new Date().getFullYear()

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <FooterContent>
        <PrimaryRow>
          <a href="#home">
            <h2>Lucas Menezes</h2>
          </a>
          <Links>
            <LinkItem>
              <a href="#">Dúvidas</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Projetos</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Serviços</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Sobre</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Sites</a>
            </LinkItem>
          </Links>
          <SocialLinks>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-behance"></i>
              </a>
            </li>
          </SocialLinks>
        </PrimaryRow>
        <SecondaryRow>
          <p>
            {currentYear} - &copy; Todos os direitos reservados
          </p>
        </SecondaryRow>
      </FooterContent>
    </div>
  </FooterContainer>
)

export default Footer
