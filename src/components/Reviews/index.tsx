import testimonial1 from '../../assets/images/image_testimonial_leticia.jpeg'
import testimonial2 from '../../assets/images/image_testimonial_brenno.jpeg'
import star from '../../assets/icons/star-solid.svg'
import quotation from '../../assets/icons/quote-left-solid.svg'

import { Title } from "../../styles"
import { Card, CardItem, InfosPerson, ReviewsContainer } from "./styles"

const Reviews = () => (
  <ReviewsContainer id="reviews">
    <div className="container">
      <Title>
        <img src={quotation} alt="ícone de aspas" />
        <h2>O Que Dizem Sobre Meu Trabalho</h2>
        <p>
          Confira o que meus clientes têm a dizer sobre a experiência e o resultado que entrego.
        </p>
      </Title>
      <Card>
        <CardItem>
          <div>
            <div className='div'>
              <img className='icon-star' src={star} alt="ícone de 5 estrelas" /><img className='icon-star' src={star} alt="ícone de 5 estrelas" /><img className='icon-star' src={star} alt="ícone de 5 estrelas" /><img className='icon-star' src={star} alt="ícone de 5 estrelas" /><img className='icon-star' src={star} alt="ícone de 5 estrelas" />
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
            <div className='div'>
              <img className='icon-star' src={star} alt="ícone de 5 estrelas" /><img className='icon-star' src={star} alt="ícone de 5 estrelas" /><img className='icon-star' src={star} alt="ícone de 5 estrelas" /><img className='icon-star' src={star} alt="ícone de 5 estrelas" /><img className='icon-star' src={star} alt="ícone de 5 estrelas" />
            </div>
            <p>
              "Passando aqui só para deixar o meu comentário sobre o Lucas. Um ótimo profissional, me atendeu super bem, fez um site para minha futura loja e ficou muito bacana mesmo, superou minhas expectativas. Conheço tanto o trabalho dele quanto a pessoa que o Lucas é: de confiança, de palavra e uma pessoa honesta. Super indico a vocês."
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
