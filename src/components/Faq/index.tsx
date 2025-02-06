import { useState } from "react"
import { Title } from "../../styles"
import { Accordion, AccordionHeader, AccordionItem, Content, FaqContainer } from "./styles"

const Faq = () => {
  const [selected, setSelected] = useState<number | null>(null)

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const dataFaq = [
    {
      question: 'Qual o preço dos sites?',
      answer: `Os preços iniciais para os sites são:
        - Site Institucional: R$ 749,99
        - Landing Page: R$ 549,99
        - E-commerce: R$ 1.049,99
        Esses valores podem variar conforme o número de seções adicionais, funcionalidades extras e outros requisitos personalizados. O valor final será ajustado conforme a complexidade do projeto.`
    },
    {
      question: 'Quanto tempo leva para criar um site?',
      answer: 'O tempo de desenvolvimento de cada site pode variar conforme a complexidade do projeto. Em média, o prazo para sites institucionais é de 1 a 2 semanas, landing pages levam entre 7 a 10 dias, e e-commerces podem levar de 2 a 3 semanas para ficarem prontos.'
    },
    {
      question: 'Como funciona o processo de criação de um site?',
      answer: `O processo de criação do site é dividido em 4 etapas:
      1- Conversa inicial: Primeiramente, discutimos as necessidades e expectativas do cliente para entender a base do projeto.
      2- Wireframe básico: Após o envio dos materiais, como logo, textos, imagens e vídeos, criamos um esboço inicial do layout, para alinhar as expectativas visuais.
      3- Desenvolvimento do site: Com a aprovação do wireframe e o pagamento de 50% do valor, iniciamos a construção do site.
      4- Lançamento: Após a finalização, fazemos o lançamento do site online, pronto para o seu público.`
    },
    {
      question: 'Vocês oferecem hospedagem e domínio?',
      answer: 'Eu cuido de todo o processo manualmente, mas o pagamento pela hospedagem e domínio é feito diretamente pelo cliente. O domínio é pago anualmente, mas eu utilizo uma ferramenta que possibilita deixar o primeiro ano gratuito. Já a hospedagem é paga mensalmente à empresa de hospedagem, e a conta ficará em nome do cliente, com a duração que ele escolher, de acordo com suas necessidades.'
    },
    {
      question: 'Quais são as opções de pagamento disponíveis?',
      answer: 'O pagamento é feito via PIX ou transferência bancária, dividido em duas parcelas de 50% do valor total. A primeira parcela é paga para iniciar a construção real do site, e a segunda deve ser feita antes da publicação online do projeto.'
    }
  ]

  return (
    <div className="container" id="faq">
      <FaqContainer>
        <Title>
          <h2>Perguntas Frequentes</h2>
          <p>
            Encontre as respostas para as dúvidas mais comuns sobre os nossos serviços.
          </p>
        </Title>
        <Accordion>
          {dataFaq.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionHeader onClick={() => toggle(index)}>
                <h3>{item.question}</h3>
                <span>{selected === index ? '-' : '+'}</span>
              </AccordionHeader>
              <Content className={selected === index ? 'show' : ''}>
                {item.answer.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </Content>
            </AccordionItem>
          ))}
        </Accordion>
      </FaqContainer>
    </div>
  )
}

export default Faq
