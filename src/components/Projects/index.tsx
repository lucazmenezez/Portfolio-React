import { useState } from "react"
import { Title } from "../../styles"
import { List, ListItem, ProjectsContainer, TabButton } from "./styles"

const Projects = () => {
  const [tabButtons, setTabButtons] = useState(1)

  const projects = [
    {
      id: 1,
      category: 'E-commerce',
      title: 'E-commerce Eplay',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.',
      image: 'https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png'
    },
    {
      id: 2,
      category: "Site Institucional",
      title: "Site Souza Ternos",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png",
    },
    {
      id: 3,
      category: "Landing Page",
      title: "Landing Page de Alta Conversão",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png",
    },
    {
      id: 4,
      category: "Site Institucional",
      title: "Site Modelo Para Barbearias",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png",
    },
  ]

  const updateTab = (id: number) => {
    setTabButtons(id)
  }

  const getFilteredProjects = () => {
    if (tabButtons === 1) return projects;
    if (tabButtons === 2) return projects.filter((p) => p.category === "Site Institucional")
    if (tabButtons === 3) return projects.filter((p) => p.category === "E-commerce")
    if (tabButtons === 4) return projects.filter((p) => p.category === "Landing Page")
    return []
  }

  const filteredProjects = getFilteredProjects()

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
                <span onClick={() => updateTab(1)} className={tabButtons === 1 ? "active" : ""}>Todos</span>
              </li>
              <li>
                <span onClick={() => updateTab(2)} className={tabButtons === 2 ? "active" : ""}>Sites Institucionais</span>
              </li>
              <li>
                <span onClick={() => updateTab(3)} className={tabButtons === 3 ? "active" : ""}>E-commerces</span>
              </li>
              <li>
                <span onClick={() => updateTab(4)} className={tabButtons === 4 ? "active" : ""}>Landing Pages</span>
              </li>
            </ul>
          </TabButton>
          <List>
            {filteredProjects.map((project) => (
              <ListItem key={project.id} className="show-content active">
                <img src={project.image} alt={project.title} />
                <span>{project.category}</span>
                <div>
                  <h4>{project.title}</h4>
                  <p>
                    {project.description}
                  </p>
                  <a href="#">
                    Ver Projeto
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </ProjectsContainer>
  )
}

export default Projects
