import code from '../../assets/icons/code-solid.svg'
import palette from '../../assets/icons/palette-solid.svg'
import pencil from '../../assets/icons/pencil-solid.svg'
import wrench from '../../assets/icons/wrench-solid.svg'

import { ButtonSecondary } from "../../styles"
import { Grid, List, ListItem, SectionTitle, ServicesContainer } from "./styles"

const Services = () => (
  <div className="container" id="services">
    <ServicesContainer>
      <Grid>
        <SectionTitle>
          <h3>Serviços</h3>
          <h2>Criação de Sites Personalizados Para o Seu Negócio</h2>
          <p>
            Oferecemos soluções de design de websites adaptadas às suas necessidades, garantindo uma presença online atraente, funcional e que ajuda seu negócio a crescer.
          </p>
          <ButtonSecondary href="https://api.whatsapp.com/send?phone=5541984589855&text=Olá, Lucas! Quero tirar algumas dúvidas sobre os seus serviços." target="_blank">
            Conversar Com Especialista
          </ButtonSecondary>
        </SectionTitle>
        <List>
          <ListItem>
            <img className='icons-services' src={code} alt="ícone de desenvolvimento de códigos" />
            <h4>Desenvolvimento</h4>
            <p>
              Criamos sites que se adaptam a qualquer dispositivo, proporcionando uma experiência de usuário excepcional.
            </p>
          </ListItem>
          <ListItem>
            <img className='icons-services' src={palette} alt="ícone de web design" />
            <h4>Design</h4>
            <p>
              Layouts personalizados que refletem sua identidade e destacam sua marca no mercado.
            </p>
          </ListItem>
          <ListItem>
            <img className='icons-services' src={pencil} alt="ícone de copywriting" />
            <h4>Conteúdo</h4>
            <p>
              Caso você não tenha todos os materiais prontos, oferecemos produção de textos e imagens que comunicam sua mensagem de forma clara e eficaz.
            </p>
          </ListItem>
          <ListItem>
            <img className='icons-services' src={wrench} alt="ícone de manutenção" />
            <h4>Manutenção</h4>
            <p>
              Garantimos que seu site esteja sempre atualizado e funcionando. Este serviço é cobrado separadamente, conforme a necessidade.
            </p>
          </ListItem>
        </List>
      </Grid>
    </ServicesContainer>
  </div>
)

export default Services
