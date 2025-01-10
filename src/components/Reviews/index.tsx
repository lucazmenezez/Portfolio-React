import { Title } from "../../styles"
import { Card, CardItem, InfosPerson, ReviewsContainer } from "./styles"

const Reviews = () => (
  <ReviewsContainer>
    <div className="container">
      <Title>
        <h2>Depoimentos de Clientes</h2>
        <p>
          Nossos clientes falam sobre a qualidade do nosso trabalho.
        </p>
      </Title>
      <Card>
        <CardItem>
          <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestias vitae amet eum quo ullam ad nemo nulla sed.
          </p>
          <InfosPerson>
            <img src="https://via.placeholder.com/48x48" alt="" />
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
            <img src="https://via.placeholder.com/48x48" alt="" />
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
