import { AboutContainer, Content } from "./styles"

import personal_image from '../../assets/images/imagem_pessoal.jpg'

const About = () => (
  <AboutContainer id="about">
    <div className="container">
      <Content>
        <div>
          <h3>Sobre Mim</h3>
          <h2>Olá, Sou <span>Lucas Menezes</span>, Desenvolvedor e Web Designer Freelancer.</h2>
          <p>
            Sou freelancer especializado em desenvolvimento de sites, tenho 22 anos e sou de Curitiba, PR. Atualmente, estou cursando Desenvolvimento Full Stack Python na EBAC – Escola Britânica de Artes Criativas e Tecnologia, onde descobri meu interesse por criação de sites e web design.          </p>
          <br />
          <p>
            Estou no início da minha carreira, mas sou movido pela vontade constante de aprender e evoluir. Meu foco é oferecer soluções personalizadas que atendam às necessidades dos meus clientes e ajudem seus negócios a crescer e se destacar no mundo digital.
          </p>
          <br />
          <p>
            Se você tem uma ideia e procura alguém para tirar seu projeto do papel, entre em contato comigo pelo WhatsApp. Será um prazer conversar e transformar sua visão em realidade!
          </p>
        </div>
        <img src={personal_image} alt="Foto de rosto do Lucas Menezes" />
      </Content>
    </div>
  </AboutContainer>
)

export default About
