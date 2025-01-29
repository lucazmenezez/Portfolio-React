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
      description: 'E-commerce completo para venda de jogos digitais, com carrinho de compras, checkout e organização por categorias. O design responsivo e intuitivo garante uma experiência fluida para os usuários.',
      image: cover_eplay,
      link: 'https://ecommerce-eplay-two.vercel.app/'
    },
    {
      id: 2,
      category: "Site Institucional",
      title: "Site Souza Ternos",
      description: "Site institucional desenvolvido para uma loja de ternos e roupas sociais. O projeto foi criado para apresentar os produtos e destacar a elegância da marca. Embora o cliente ainda não tenha iniciado as atividades, o site já está completo, pronto para receber imagens e depoimentos. O design é responsivo e foca em uma experiência visual sofisticada e intuitiva.",
      image: cover_souza_ternos,
      link: 'https://souza-ternos.vercel.app/'
    },
    {
      id: 3,
      category: "Landing Page",
      title: "Landing Page de Alta Conversão",
      description: "Desenvolvi uma landing page estratégica para a venda de produtos digitais, utilizando WordPress e Elementor. O foco foi criar um layout otimizado para conversão, garantindo alta performance e usabilidade.",
      image: cover_lp_ac,
      link: 'https://sandybrown-starling-750020.hostingersite.com/'
    },
    {
      id: 4,
      category: "E-commerce",
      title: "E-commerce Efood",
      description: "Loja virtual para delivery de alimentos, com carrinho de compras, checkout e organização por categorias. O design responsivo e intuitivo facilita a navegação e a experiência do usuário.",
      image: cover_efood,
      link: 'https://efood-rose-eight.vercel.app/'
    },
    {
      id: 5,
      category: "Site Institucional",
      title: "Site Modelo Para Advogados",
      description: "Site institucional desenvolvido para escritórios de advocacia, com seções para apresentação dos serviços, área sobre o advogado e um formulário de contato. O design é profissional e responsivo, garantindo uma navegação clara e objetiva.",
      image: cover_lawyer,
      link: 'https://site-advogados-coral.vercel.app/'
    },
    {
      id: 6,
      category: "Site Institucional",
      title: "Site Modelo Para Barbearias",
      description: "Site institucional projetado para barbearias, com foco em uma apresentação clara dos serviços oferecidos, informações de contato e um design que reflete a identidade da marca. O layout responsivo garante que o site seja acessível em dispositivos móveis e desktops.",
      image: cover_barber,
      link: 'https://site-modelo-barbearia.vercel.app/'
    },
    {
      id: 7,
      category: "Site Institucional",
      title: "Site De Portfólio",
      description: "Site desenvolvido para apresentar trabalhos e projetos de forma profissional, com uma navegação intuitiva e seções organizadas para destacar habilidades e experiências. O design responsivo garante uma boa experiência tanto em desktop quanto em dispositivos móveis.",
      image: cover_portfolio,
      link: 'https://sitepronto.vercel.app/'
    },
    {
      id: 8,
      category: "Site Institucional",
      title: "Site De Restaurante",
      description: "Site institucional desenvolvido para restaurantes, apresentando cardápio com abas interativas, carrossel de imagens e um formulário de contato dinâmico com jQuery. O design responsivo garante uma navegação fluida em qualquer dispositivo.",
      image: cover_restaurant,
      link: 'https://lucas-projeto-restaurante.vercel.app/'
    },
    {
      id: 9,
      category: "Site Institucional",
      title: "Site Clone Do Disney+",
      description: "Reprodução visual do Disney+, recriando a interface da plataforma de streaming com layout responsivo e efeitos modernos. Possui estrutura de navegação semelhante, animações e design fiel à versão original.",
      image: cover_clone_dp,
      link: 'https://clone-disneyplus-one-rho.vercel.app/'
    },
    {
      id: 10,
      category: "Landing Page",
      title: "Landing Page Para Venda de Serviços",
      description: "Página profissional desenvolvida para apresentar serviços de forma clara e persuasiva. Possui seções estratégicas, chamadas para ação bem posicionadas e design responsivo para melhor navegação.",
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
