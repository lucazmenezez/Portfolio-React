import { useState } from "react"

import cover_souza_ternos from '../../assets/images/capa_souza-ternos.png'
import cover_lp_ac from '../../assets/images/capa_lp_alta-conversao.png'
import cover_eplay from '../../assets/images/capa_eplay.png'
import cover_lawyer from '../../assets/images/capa_advogados.png'
import cover_barber from '../../assets/images/capa_barbearia.png'
import cover_clone_dp from '../../assets/images/capa_clone_dp.png'
import cover_efood from '../../assets/images/capa_efood.png'
import cover_lp from '../../assets/images/capa_lp.png'
import cover_portfolio from '../../assets/images/capa_portfolio_teste.png'
import cover_restaurant from '../../assets/images/capa_restaurante.png'

import { Title } from "../../styles"
import { List, ListItem, ProjectsContainer, TabButton } from "./styles"

const Projects = () => {
  const [tabButtons, setTabButtons] = useState("Todos")

  const projects = [
    {
      id: 1,
      category: 'E-commerce',
      title: 'E-commerce Eplay',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.',
      image: cover_eplay
    },
    {
      id: 2,
      category: "Site Institucional",
      title: "Site Souza Ternos",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_souza_ternos
    },
    {
      id: 3,
      category: "Landing Page",
      title: "Landing Page de Alta Conversão",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_lp_ac
    },
    {
      id: 4,
      category: "E-commerce",
      title: "E-commerce Efood",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_efood
    },
    {
      id: 5,
      category: "Site Institucional",
      title: "Site Modelo Para Advogados",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_lawyer
    },
    {
      id: 6,
      category: "Site Institucional",
      title: "Site Modelo Para Barbearias",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_barber
    },
    {
      id: 7,
      category: "Site Institucional",
      title: "Site De Portfólio",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_portfolio
    },
    {
      id: 8,
      category: "Site Institucional",
      title: "Site De Restaurante",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_restaurant
    },
    {
      id: 9,
      category: "Site Institucional",
      title: "Site Clone Do Disney+",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_clone_dp
    },
    {
      id: 10,
      category: "Landing Page",
      title: "Landing Page Para Venda de Serviços",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_lp
    }
  ]

  const getFilteredProjects = () => {
    if (tabButtons === "Todos") return projects
    return projects.filter((project) => project.category === tabButtons)
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
              {["Todos", "Site Institucional", "E-commerce", "Landing Page"].map((tab) => (
                <li key={tab}>
                  <span
                    onClick={() => setTabButtons(tab)}
                    className={tabButtons === tab ? "active" : ""}
                    >
                      {tab}
                  </span>
                </li>
              ))}
            </ul>
          </TabButton>
          <List>
            {filteredProjects.map((project) => (
              <ListItem key={project.id}>
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
