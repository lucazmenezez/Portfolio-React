import { ButtonPrimary, Title } from "../../styles"
import { BackgroundImage, Content, Cta, List, ListItem, WebsitesContainer } from "./styles"

import office_work from '../../assets/images/office_work.jpg'
import conversion_graphic from '../../assets/images/conversion_graphic.jpg'
import ecommerce from '../../assets/images/ecommerce.jpg'

const Websites = () => (
  <WebsitesContainer id="websites">
    <div className="container">
      <Title>
        <h3>Sites</h3>
        <h2>Qual Tipo de Site é Ideal Para o Seu Negócio?</h2>
        <p>
          Descubra qual solução atende melhor às suas necessidades, seja para um site institucional, landing page ou e-commerce.
        </p>
      </Title>
      <List>
        <ListItem>
          <BackgroundImage style={{backgroundImage: `url(${office_work})`}} >
            <Content>
              <span>01</span>
              <h4>
                Site Institucional
              </h4>
              <p>
                Um site institucional é a base para sua presença online, ideal para apresentar sua empresa/negócio, valores e serviços de forma clara e profissional. Ele é perfeito para quem deseja uma página funcional, com design moderno, responsivo e fácil de navegar.
              </p>
            </Content>
          </BackgroundImage>
        </ListItem>
        <ListItem>
          <BackgroundImage style={{backgroundImage: `url(${conversion_graphic})`}} >
            <Content>
              <span>02</span>
              <h4>
                Landing Page
              </h4>
              <p>
                Landing pages são projetadas para conversões. Se você tem um objetivo específico, como captar leads ou promover um produto, essa é a solução ideal. Com um layout simples e objetivo, ela foca em uma chamada à ação para garantir resultados rápidos.
              </p>
            </Content>
          </BackgroundImage>
        </ListItem>
        <ListItem>
          <BackgroundImage style={{backgroundImage: `url(${ecommerce})`}} >
            <Content>
              <span>03</span>
              <h4>
                E-commerce
              </h4>
              <p>
                Se o seu objetivo é vender online, o e-commerce é a escolha certa. Criamos lojas virtuais seguras e de fácil navegação, com sistemas de pagamento integrados, design responsivo e otimização para uma excelente experiência de compra.
              </p>
            </Content>
          </BackgroundImage>
        </ListItem>
      </List>
      <Cta>
        <ButtonPrimary href="https://api.whatsapp.com/send?phone=5541984589855&text=Olá! quero construir meu site." target="_blank">QUERO PEDIR MEU SITE</ButtonPrimary>
      </Cta>
    </div>
  </WebsitesContainer>
)

export default Websites
