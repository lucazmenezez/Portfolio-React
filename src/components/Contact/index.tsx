import { ContactContainer, ContactList, ContactTitle, ListItem } from "./styles"

const Contact = () => (
  <div className="container" id="contact">
    <ContactContainer>
      <ContactTitle>
        <h3>Contato</h3>
        <h2>Entre em Contato</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt, neque suscipit ipsam illum ullam beatae ipsum? Deleniti, maxime quam doloremque quasi nam officiis voluptate, sit possimus explicabo magnam amet.
        </p>
      </ContactTitle>
      <ContactList>
        <ListItem>
          <div>
            <i className="fas fa-envelope"></i>
            <h4>E-mail</h4>
          </div>
          <span>menezeslucas24082002@gmail.com</span>
        </ListItem>
        <ListItem>
          <div>
            <i className="fas fa-phone"></i>
            <h4>Telefone</h4>
          </div>
          <span>(41) 984589855</span>
        </ListItem>
        <ListItem>
          <div>
            <i className="fas fa-headset"></i>
            <h4>Atendimento</h4>
          </div>
          <span>24h por dia, todos os dias da semana!</span>
        </ListItem>
      </ContactList>
    </ContactContainer>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230483.82329058214!2d-49.45461389371291!3d-25.494714569951956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35351cdb3dd%3A0x6d2f6ba5bacbe809!2sCuritiba%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1737628971639!5m2!1spt-BR!2sbr" width="100%" height="500" style={{ border: 0, marginBottom: 58, borderRadius: 12 }}  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
)

export default Contact
