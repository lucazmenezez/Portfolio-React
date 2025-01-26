import { ButtonPrimary, Title } from "../../styles"
import { BackgroundImage, Content, Cta, List, ListItem, WebsitesContainer } from "./styles"

import office_work from '../../assets/images/office_work.jpg'
import conversion_graphic from '../../assets/images/conversion_graphic.jpg'
import ecommerce from '../../assets/images/ecommerce.jpg'

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
          <BackgroundImage style={{backgroundImage: `url(${office_work})`}} >
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
          <BackgroundImage style={{backgroundImage: `url(${conversion_graphic})`}} >
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
          <BackgroundImage style={{backgroundImage: `url(${ecommerce})`}} >
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
