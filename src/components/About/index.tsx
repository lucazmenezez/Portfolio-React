import { AboutContainer, Content } from "./styles"

import personal_image from '../../assets/images/imagem_pessoal.jpg'

const About = () => (
  <AboutContainer id="about">
    <div className="container">
      <Content>
        <div>
          <h3>Sobre Mim</h3>
          <h2>Olá, me chamo Lucas Menezes e sou <span>Web Designer.</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquid dolores rerum sint, nobis, possimus nemo fuga labore consectetur delectus aut, asperiores facilis quo ullam vel? Obcaecati culpa quis est.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minima qui voluptas vero, quae excepturi possimus vitae, voluptatum maiores consequatur inventore distinctio beatae suscipit ipsa nulla sit architecto quisquam nisi!
          </p>
        </div>
        <img src={personal_image} alt="Foto de rosto do Lucas Menezes" />
      </Content>
    </div>
  </AboutContainer>
)

export default About
