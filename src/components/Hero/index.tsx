import { ButtonPrimary } from "../../styles"
import { Content, Description, HeroContainer, ImagesContainer, MainTitle, Row } from "./styles"

import cover_souza_ternos from '../../assets/images/capa_souza-ternos.png'
import cover_lp_ac from '../../assets/images/capa_lp_alta-conversao.png'
import cover_eplay from '../../assets/images/capa_eplay.png'
import cover_lawyer from '../../assets/images/capa_advogados.png'
import cover_barber from '../../assets/images/capa_barbearia.png'
// import cover_clone_dp from '../../assets/images/capa_clone_dp.png'
// import cover_efood from '../../assets/images/capa_efood.png'
import cover_lp from '../../assets/images/capa_lp.png'
import cover_portfolio from '../../assets/images/capa_portfolio_teste.png'
import cover_restaurant from '../../assets/images/capa_restaurante.png'


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
        <img src={cover_barber} alt="placeholder" />
        <img src={cover_souza_ternos} alt="placeholder" />
        <img src={cover_lp_ac} alt="placeholder" />
        <img src={cover_lp} alt="placeholder" />
      </Row>
      <Row>
        <img src={cover_restaurant} alt="placeholder" />
        <img src={cover_eplay} alt="placeholder" />
        <img src={cover_lawyer} alt="placeholder" />
        <img src={cover_portfolio} alt="placeholder" />
      </Row>
    </ImagesContainer>
  </HeroContainer>
)

export default Hero
