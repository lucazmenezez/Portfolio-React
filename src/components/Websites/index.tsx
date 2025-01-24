import { ButtonPrimary, Title } from "../../styles"
import { BackgroundImage, Content, Cta, List, ListItem, WebsitesContainer } from "./styles"

const Websites = () => (
  <WebsitesContainer id="websites">
    <div className="container">
      <Title>
        <h3>Tipos de Sites</h3>
        <h2>E qual site eu devo escolher?</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores inventore saepe voluptatum labore voluptatem, sequi neque tempora dolor quam earum rerum voluptate, velit fugit natus quibusdam quidem modi sed vel!
        </p>
      </Title>
      <List>
        <ListItem>
          <BackgroundImage style={{backgroundImage: `url(https://img.freepik.com/free-photo/blurred-soft-people-meeting-table-business-people-talking-modern-office-generative-ai_1258-150888.jpg?ga=GA1.1.1806739154.1732910747&semt=ais_hybrid)`}} >
            <Content>
              <span>01</span>
              <h4>
                Site Institucional
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum accusantium omnis dolores quae, eius obcaecati! Molestias nesciunt commodi laborum nobis nemo vero impedit enim, similique numquam, debitis voluptatibus deserunt.
              </p>
            </Content>
          </BackgroundImage>
        </ListItem>
        <ListItem>
          <BackgroundImage style={{backgroundImage: `url(https://img.freepik.com/free-vector/modern-geometric-arrow-backdrop-business-presentation_1017-51541.jpg?ga=GA1.1.1806739154.1732910747)`}} >
            <Content>
              <span>02</span>
              <h4>
                Landing Page
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum accusantium omnis dolores quae, eius obcaecati! Molestias nesciunt commodi laborum nobis nemo vero impedit enim, similique numquam, debitis voluptatibus deserunt.
              </p>
            </Content>
          </BackgroundImage>
        </ListItem>
        <ListItem>
          <BackgroundImage style={{backgroundImage: `url(https://img.freepik.com/free-psd/shopping-vertical-background_23-2150409471.jpg?ga=GA1.1.1806739154.1732910747&semt=ais_hybrid)`}} >
            <Content>
              <span>03</span>
              <h4>
                E-commerce
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum accusantium omnis dolores quae, eius obcaecati! Molestias nesciunt commodi laborum nobis nemo vero impedit enim, similique numquam, debitis voluptatibus deserunt.
              </p>
            </Content>
          </BackgroundImage>
        </ListItem>
      </List>
      <Cta>
        <ButtonPrimary>Quero Pedir Meu Site</ButtonPrimary>
      </Cta>
    </div>
  </WebsitesContainer>
)

export default Websites
