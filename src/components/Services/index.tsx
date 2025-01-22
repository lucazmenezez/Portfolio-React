import { ButtonSecondary } from "../../styles"
import { Grid, List, ListItem, SectionTitle, ServicesContainer } from "./styles"

const Services = () => (
  <div className="container">
    <ServicesContainer>
      <Grid>
        <SectionTitle>
          <h3>Serviços</h3>
          <h2>Nossos Serviços de Design de Websites</h2>
          <p>
            Oferecemos soluções de design de websites personalizadas que atendem às suas necessidades específicas. Nossos serviços garantem uma presença online atraente e funcional.
          </p>
          <ButtonSecondary href="#">Saiba mais</ButtonSecondary>
        </SectionTitle>
        <List>
          <ListItem>
            <i className="fas fa-code"></i>
            <h4>Desenvolvimento</h4>
            <p>
              Criamos sites que se adaptam a qualquer dispositivo, proporcionando uma experiência de usuário excepcional.
            </p>
          </ListItem>
          <ListItem>
            <i className="fas fa-palette"></i>
            <h4>Design</h4>
            <p>
              Layouts criativos e personalizados para destacar sua marca no mercado.
            </p>
          </ListItem>
          <ListItem>
            <i className="fas fa-file-alt"></i>
            <h4>Conteúdo</h4>
            <p>
              Produção de textos e materiais que comunicam efetivamente com o seu público.
            </p>
          </ListItem>
          <ListItem>
            <i className="fas fa-wrench"></i>
            <h4>Manutenção</h4>
            <p>
              Garantimos que seu site esteja sempre atualizado e funcionando perfeitamente.
            </p>
          </ListItem>
        </List>
      </Grid>
    </ServicesContainer>
  </div>
)

export default Services
