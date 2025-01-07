import Header from "./components/Header"
import Hero from "./components/Hero"
import { GlobalStyle } from "./styles"

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Hero />
    </>
  )
}

export default App
