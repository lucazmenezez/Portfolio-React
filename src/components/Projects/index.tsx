import { List, ListItem, ProjectsContainer, TabButton, Title } from "./styles"

const Projects = () => {

  return (
    <ProjectsContainer id="projects">
      <div className="container">
        <Title>
          <h3>Portfólio</h3>
          <h2>Meus Projetos</h2>
          <p>Explore nossa galeria de projetos concluídos.</p>
        </Title>
        <div>
          <TabButton>
            <ul>
              <li>
                <button type="button">Todos</button>
              </li>
              <li>
                <button type="button">Sites Institucionais</button>
              </li>
              <li>
                <button type="button">E-commerces</button>
              </li>
              <li>
                <button type="button">Landing Pages</button>
              </li>
            </ul>
          </TabButton>
          <List>
            <ListItem>
              <img src="https://via.placeholder.com/480x270" alt="placeholder" />
              <span>E-commerce</span>
              <div>
                <h4>E-commerce Eplay</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.
                </p>
                <a href="#">
                  Ver Projeto
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </ListItem>
            <ListItem>
              <img src="https://via.placeholder.com/480x270" alt="placeholder" />
              <span>Site Institucional</span>
              <div>
                <h4>Site Souza Ternos</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.
                </p>
                <a href="#">
                  Ver Projeto
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </ListItem>
            <ListItem>
              <img src="https://via.placeholder.com/480x270" alt="placeholder" />
              <span>Landing Page</span>
              <div>
                <h4>Landing Page de Alta Conversão</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.
                </p>
                <a href="#">
                  Ver Projeto
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </ListItem>
            <ListItem>
              <img src="https://via.placeholder.com/480x270" alt="placeholder" />
              <span>Site Institucional</span>
              <div>
                <h4>Site Modelo Para Barbearias</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.
                </p>
                <a href="#">
                  Ver Projeto
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </ListItem>
          </List>
        </div>
      </div>
    </ProjectsContainer>
  )
}

export default Projects
