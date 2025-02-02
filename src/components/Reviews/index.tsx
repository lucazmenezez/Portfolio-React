import { Title } from "../../styles"
import { Card, CardItem, InfosPerson, ReviewsContainer } from "./styles"

const Reviews = () => (
  <ReviewsContainer id="reviews">
    <div className="container">
      <Title>
        <h2>O Que Dizem Sobre Meu Trabalho</h2>
        <p>
          Confira o que meus clientes têm a dizer sobre a experiência e o resultado que entrego.
        </p>
      </Title>
      <Card>
        <CardItem>
          <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestias vitae amet eum quo ullam ad nemo nulla sed.
          </p>
          <InfosPerson>
            <img src="https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png" alt="" />
            <div>
              <b>João Silva</b>
              <span>Empresário</span>
            </div>
          </InfosPerson>
        </CardItem>
        <CardItem>
          <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestias vitae amet eum quo ullam ad nemo nulla sed.
          </p>
          <InfosPerson>
            <img src="https://produtos.grupoacofer.com.br/wp-content/uploads/2022/05/placeholder-239.png" alt="" />
            <div>
              <b>Ana</b>
              <span>Gerente da Empresa X</span>
            </div>
          </InfosPerson>
        </CardItem>
      </Card>
    </div>
  </ReviewsContainer>
)

export default Reviews
