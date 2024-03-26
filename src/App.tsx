import Clients from './components/clients'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import Portfolio from './components/portfolio'
import Services from './components/services'
import Who from './components/who'

// submit do form
// filtro do botao

function App() {
  return (
      <>
        <Header />
        <Home />
        <Who />
        <Services />
        <Clients />
        <Portfolio />
        <Contact />
        <Footer />
      </>
  )
}

export default App
