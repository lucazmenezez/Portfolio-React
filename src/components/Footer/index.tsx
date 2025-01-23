import { FooterContainer, FooterContent, Links, PrimaryRow, SecondaryRow, SocialLinks } from "./styles"

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
            <li>
              <a href="#">Dúvidas</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Sites</a>
            </li>
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
