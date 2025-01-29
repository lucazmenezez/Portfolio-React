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
              <a href="#faq">Dúvidas</a>
            </LinkItem>
            <LinkItem>
              <a href="#projects">Projetos</a>
            </LinkItem>
            <LinkItem>
              <a href="#services">Serviços</a>
            </LinkItem>
            <LinkItem>
              <a href="#about">Sobre</a>
            </LinkItem>
            <LinkItem>
              <a href="#websites">Sites</a>
            </LinkItem>
          </Links>
          <SocialLinks>
            <li>
              <a href="https://www.linkedin.com/in/lucas-menezes-39b310256/" target="_blank" title="Ir para o perfil no Linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:menezeslucas24082002@gmail.com?subject=Olá!&body=Gostaria de saber mais sobre os seus serviços." target="_blank" title="Ir para o Email">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/lucazmenezez" target="_blank" title="Ir para o perfil no Github">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/lucasmenezes77" target="_blank" title="Ir para o perfil no Behance">
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
