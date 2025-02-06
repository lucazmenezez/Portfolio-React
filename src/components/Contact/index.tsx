import envelope from '../../assets/icons/envelope-solid.svg'
import phone from '../../assets/icons/phone-solid.svg'
import headset from '../../assets/icons/headset-solid.svg'

import { ContactContainer, ContactList, ContactTitle, ListItem } from "./styles"

const Contact = () => (
  <div className="container" id="contact">
    <ContactContainer>
      <ContactTitle>
        <h3>Contato</h3>
        <h2>Vamos Conversar?</h2>
        <p>
          Fale conosco para tirar suas dúvidas, pedir mais informações ou iniciar seu projeto de site. Estamos aqui para ajudar você a dar o próximo passo no mundo digital.
        </p>
      </ContactTitle>
      <ContactList>
        <ListItem>
          <div>
            <img src={envelope} alt="ícone de email" />
            <h4>E-mail</h4>
          </div>
          <span>menezeslucas24082002@gmail.com</span>
        </ListItem>
        <ListItem>
          <div>
            <img src={phone} alt="ícone de telenone" />
            <h4>Telefone</h4>
          </div>
          <span>(41) 984589855</span>
        </ListItem>
        <ListItem>
          <div>
            <img src={headset} alt="ícone de atendimento" />
            <h4>Atendimento Via Whatsapp</h4>
          </div>
          <span>24h por dia, todos os dias da semana!</span>
        </ListItem>
      </ContactList>
    </ContactContainer>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230483.82329058214!2d-49.45461389371291!3d-25.494714569951956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e601086f4f9cea7%3A0xe97e25658356753c!2sWeb%20Design%20%7C%20Desenvolvimento%20Web%20%7C%20Cria%C3%A7%C3%A3o%20de%20Sites!5e0!3m2!1spt-BR!2sbr!4v1738159944074!5m2!1spt-BR!2sbr" width="100%" height="500" style={{ border: 0, marginBottom: 58, borderRadius: 12 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
)

export default Contact
