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
      description: 'Uma loja virtual de jogos de videogame, desenvolvida com React e Typescript. Esse projeto foi criado durante o módulo de Front-end do curso na EBAC, com todas as funcionalidades essenciais de um e-commerce para uma experiência de compra eficiente e dinâmica.',
      image: cover_eplay,
      link: 'https://ecommerce-eplay-two.vercel.app/'
    },
    {
      id: 2,
      category: "Site Institucional",
      title: "Site Souza Ternos",
      description: "Meu primeiro site para um cliente real, desenvolvido do zero com HTML, SASS e Bootstrap. O site apresenta os produtos da loja, incluindo ternos e roupas sociais. Embora o cliente ainda esteja avaliando a melhor forma de prosseguir, o site já está 95% pronto para ser publicado online.",
      image: cover_souza_ternos,
      link: '#'
    },
    {
      id: 3,
      category: "Landing Page",
      title: "Landing Page de Alta Conversão",
      description: "Landing Page com layout de Alta Conversão criada com Wordpress e Elementor, para vender produtos digitais",
      image: cover_lp_ac,
      link: 'https://sandybrown-starling-750020.hostingersite.com/'
    },
    {
      id: 4,
      category: "E-commerce",
      title: "E-commerce Efood",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_efood,
      link: 'https://efood-rose-eight.vercel.app/'
    },
    {
      id: 5,
      category: "Site Institucional",
      title: "Site Modelo Para Advogados",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_lawyer,
      link: '#'
    },
    {
      id: 6,
      category: "Site Institucional",
      title: "Site Modelo Para Barbearias",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_barber,
      link: 'https://site-modelo-barbearia.vercel.app/'
    },
    {
      id: 7,
      category: "Site Institucional",
      title: "Site De Portfólio",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_portfolio,
      link: 'https://sitepronto.vercel.app/'
    },
    {
      id: 8,
      category: "Site Institucional",
      title: "Site De Restaurante",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_restaurant,
      link: 'https://lucas-projeto-restaurante.vercel.app/'
    },
    {
      id: 9,
      category: "Site Institucional",
      title: "Site Clone Do Disney+",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_clone_dp,
      link: 'https://clone-disneyplus-one-rho.vercel.app/'
    },
    {
      id: 10,
      category: "Landing Page",
      title: "Landing Page Para Venda de Serviços",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque possimus voluptates illo recusandae.",
      image: cover_lp,
      link: 'https://landing-page-vendas-pi.vercel.app/'
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
          <p>Confira alguns dos projetos que desenvolvi durante minha jornada como desenvolvedor.</p>
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
                  <a href={project.link || "#"} target="_blank">
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
