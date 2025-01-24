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
      question: 'Pergunta 1',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem laboriosam minima, commodi quasi, dicta officiis debitis, distinctio rerum harum culpa quis eius! Ipsa nulla dignissimos omnis vero veritatis'
    },
    {
      question: 'Pergunta 2',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem laboriosam minima, commodi quasi, dicta officiis debitis, distinctio rerum harum culpa quis eius! Ipsa nulla dignissimos omnis vero veritatis'
    },
    {
      question: 'Pergunta 3',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem laboriosam minima, commodi quasi, dicta officiis debitis, distinctio rerum harum culpa quis eius! Ipsa nulla dignissimos omnis vero veritatis'
    },
    {
      question: 'Pergunta 4',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem laboriosam minima, commodi quasi, dicta officiis debitis, distinctio rerum harum culpa quis eius! Ipsa nulla dignissimos omnis vero veritatis'
    },
    {
      question: 'Pergunta 5',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem laboriosam minima, commodi quasi, dicta officiis debitis, distinctio rerum harum culpa quis eius! Ipsa nulla dignissimos omnis vero veritatis'
    }
  ]

  return (
    <div className="container" id="faq">
      <FaqContainer>
        <Title>
          <h2>Perguntas Frequentes</h2>
          <p>
            Aqui estão as respostas para as perguntas mais frequentes sobre nossos serviços de design.
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
                {item.answer}
              </Content>
            </AccordionItem>
          ))}
        </Accordion>
      </FaqContainer>
    </div>
  )
}

export default Faq
