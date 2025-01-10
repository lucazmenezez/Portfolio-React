import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Reviews from "./components/Reviews"
import { GlobalStyle } from "./styles"

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Hero />
      <Projects />
      <Reviews />
    </>
  )
}

export default App
