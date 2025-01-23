import { ButtonPrimary, Title } from "../../styles"
import { Cta, List, ListItem, WebsitesContainer } from "./styles"

const Websites = () => (
  <WebsitesContainer>
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
          <span>01</span>
          <img src="https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png" alt="placeholder" />
          <h4>
            Site Institucional
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum accusantium omnis dolores quae, eius obcaecati! Molestias nesciunt commodi laborum nobis nemo vero impedit enim, similique numquam, debitis voluptatibus deserunt.
          </p>
        </ListItem>
        <ListItem>
          <span>02</span>
          <img src="https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png" alt="placeholder" />
          <h4>
            Landing Page
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum accusantium omnis dolores quae, eius obcaecati! Molestias nesciunt commodi laborum nobis nemo vero impedit enim, similique numquam, debitis voluptatibus deserunt.
          </p>
        </ListItem>
        <ListItem>
          <span>03</span>
          <img src="https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png" alt="placeholder" />
          <h4>
            E-commerce
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum accusantium omnis dolores quae, eius obcaecati! Molestias nesciunt commodi laborum nobis nemo vero impedit enim, similique numquam, debitis voluptatibus deserunt.
          </p>
        </ListItem>
      </List>
      <Cta>
        <ButtonPrimary>Quero Pedir Meu Site</ButtonPrimary>
      </Cta>
    </div>
  </WebsitesContainer>
)

export default Websites
