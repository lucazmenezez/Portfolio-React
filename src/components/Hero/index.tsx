import { ButtonPrimary } from "../../styles"
import { ContainerFlex, Content, Description, HeroContainer, ImagesContainer, MainTitle, Row, Status } from "./styles"

import cover_souza_ternos from '../../assets/images/capa_souza-ternos.png'
import cover_lp_ac from '../../assets/images/capa_lp_alta-conversao.png'
import cover_eplay from '../../assets/images/capa_eplay.png'
import cover_lawyer from '../../assets/images/capa_advogados.png'
import cover_barber from '../../assets/images/capa_barbearia.png'
import cover_lp from '../../assets/images/capa_lp.png'
import cover_portfolio from '../../assets/images/capa_portfolio_teste.png'
import cover_restaurant from '../../assets/images/capa_restaurante.png'
import icon_glow from '../../assets/images/star.png'
import icon_sparkles from '../../assets/images/sparkles.png'

const Hero = () => (
  <HeroContainer>
    <div className="container">
      <img className="icon1" src={icon_glow} alt="" />
      <img className="icon2" src={icon_sparkles} alt="" />
      <Content>
        <MainTitle>Desenvolvedor e Website Designer Freelancer.</MainTitle>
        <Description>Sou um desenvolvedor freelancer especializado em criar sites atraentes, responsivos e funcionais. Explore meu portfólio e descubra como posso ajudar a dar vida à sua visão.</Description>
        <ContainerFlex>
          <ButtonPrimary href="#projects">
            Veja Meus Projetos
          </ButtonPrimary>
          <Status>
            <span className="status-icon"></span>
            <span>
              Disponível para trabalho
            </span>
          </Status>
        </ContainerFlex>
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
