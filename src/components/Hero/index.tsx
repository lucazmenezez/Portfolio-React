import { ButtonPrimary, ButtonSecondary, Content, Description, HeroContainer, ImagesContainer, MainTitle, Row } from "./styles"

const Hero = () => (
  <HeroContainer id="home">
    <div className="container">
      <Content>
        <MainTitle>Transforme suas ideias em <span>designs incríveis</span></MainTitle>
        <Description>Sou um designer freelancer especializado em criar sites que não apenas atraem, mas também convertem. Explore meu portfólio e descubra como posso ajudar a dar vida à sua visão.</Description>
        <div>
          <ButtonSecondary href="#">Ver Mais</ButtonSecondary>
          <ButtonPrimary href="#">Entrar em Contato</ButtonPrimary>
        </div>
      </Content>
    </div>
    <ImagesContainer>
      <Row>
        <img src="https://via.placeholder.com/416x340" alt="placeholder" />
        <img src="https://via.placeholder.com/416x340" alt="placeholder" />
        <img src="https://via.placeholder.com/416x340" alt="placeholder" />
        <img src="https://via.placeholder.com/416x340" alt="placeholder" />
      </Row>
      <Row>
        <img src="https://via.placeholder.com/416x340" alt="placeholder" />
        <img src="https://via.placeholder.com/416x340" alt="placeholder" />
        <img src="https://via.placeholder.com/416x340" alt="placeholder" />
        <img src="https://via.placeholder.com/416x340" alt="placeholder" />
      </Row>
    </ImagesContainer>
  </HeroContainer>
)

export default Hero
