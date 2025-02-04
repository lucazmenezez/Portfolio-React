import testimonial1 from '../../assets/images/image_testimonial_leticia.jpeg'
import testimonial2 from '../../assets/images/image_testimonial_brenno.jpeg'

import { Title } from "../../styles"
import { Card, CardItem, InfosPerson, ReviewsContainer } from "./styles"

const Reviews = () => (
  <ReviewsContainer id="reviews">
    <div className="container">
      <Title>
        <i className="fa-solid fa-quote-left"></i>
        <h2>O Que Dizem Sobre Meu Trabalho</h2>
        <p>
          Confira o que meus clientes têm a dizer sobre a experiência e o resultado que entrego.
        </p>
      </Title>
      <Card>
        <CardItem>
          <div>
            <div>
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
            </div>
            <p>
              "Estou trabalhando com o Lucas para criar o site da minha empresa e estou muito satisfeita com o andamento. Ele tem sido muito profissional, sempre ouvindo minhas ideias e sugerindo melhorias. O design está ficando excelente, simples de navegar e funcional. O site já está bem adaptado para diferentes dispositivos e estou animada para ver o resultado final. O Lucas é confiável, dedicado e mostra que realmente se importa com o trabalho. Estou muito contente com a escolha e recomendo seus serviços!"
            </p>
            <InfosPerson>
                <p>Letícia</p>
                <span>Cliente de Web Design</span>
            </InfosPerson>
          </div>
          <img src={testimonial1} alt="Imagem de rosto do cliente Leticia" />
        </CardItem>
        <CardItem>
          <div>
            <div>
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
            </div>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe delectus, incidunt natus fuga, recusandae corrupti ad porro esse unde atque corporis inventore debitis aspernatur nulla officiis vel nostrum ex lorem ipsum."
            </p>
            <InfosPerson>
              <p>Brenno Souza</p>
              <span>Cliente de Web Design</span>
            </InfosPerson>
          </div>
          <img src={testimonial2} alt="Imagem de rosto do cliente Brenno" />
        </CardItem>
      </Card>
    </div>
  </ReviewsContainer>
)

export default Reviews
