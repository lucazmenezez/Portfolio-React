import { ButtonPrimary } from "../../styles"
import { Content, Description, HeroContainer, ImagesContainer, MainTitle, Row } from "./styles"

const Hero = () => (
  <HeroContainer>
    <div className="container">
      <Content>
        <MainTitle>Transforme suas ideias em <span>designs incríveis</span></MainTitle>
        <Description>Sou um designer freelancer especializado em criar sites que não apenas atraem, mas também convertem. Explore meu portfólio e descubra como posso ajudar a dar vida à sua visão.</Description>
        <div>
          <ButtonPrimary href="#projects">Veja Meu Portfólio</ButtonPrimary>
        </div>
      </Content>
    </div>
    <ImagesContainer>
      <Row>
        <img src="https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png" alt="placeholder" />
        <img src="https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png" alt="placeholder" />
        <img src="https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png" alt="placeholder" />
        <img src="https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png" alt="placeholder" />
      </Row>
      <Row>
        <img src="https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png" alt="placeholder" />
        <img src="https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png" alt="placeholder" />
        <img src="https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png" alt="placeholder" />
        <img src="https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png" alt="placeholder" />
      </Row>
    </ImagesContainer>
  </HeroContainer>
)

export default Hero
