import About from "./components/About"
import BtnWpp from "./components/BtnWpp"
import Contact from "./components/Contact"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Reviews from "./components/Reviews"
import Services from "./components/Services"
import Websites from "./components/Websites"

import { GlobalStyle } from "./styles"

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Projects />
      <Reviews />
      <About />
      <Services />
      <Websites />
      <Faq />
      <Contact />
      <Footer />
      <BtnWpp />
    </>
  )
}

export default App
