import envelopeWhite from '../../assets/icons/envelope-solid-white.svg'
import linkedin from '../../assets/icons/linkedin-brands-solid.svg'
import behance from '../../assets/icons/behance-brands-solid.svg'
import github from '../../assets/icons/github-brands-solid.svg'

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
            <LinkItem>
              <a href="#contact">Contatos</a>
            </LinkItem>
          </Links>
          <SocialLinks>
            <li>
              <a href="https://www.linkedin.com/in/lucas-menezes-39b310256/" target="_blank" title="Ir para o perfil no Linkedin">
                <img src={linkedin} alt="ícone do linkedin" />
              </a>
            </li>
            <li>
              <a href="mailto:menezeslucas24082002@gmail.com?subject=Olá!&body=Gostaria de saber mais sobre os seus serviços." target="_blank" title="Ir para o Email">
                <img src={envelopeWhite} alt="ícone do email" />
              </a>
            </li>
            <li>
              <a href="https://github.com/lucazmenezez" target="_blank" title="Ir para o perfil no Github">
                <img src={github} alt="ícone do github" />
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/lucasmenezes77" target="_blank" title="Ir para o perfil no Behance">
                <img src={behance} alt="ícone do behance" />
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
