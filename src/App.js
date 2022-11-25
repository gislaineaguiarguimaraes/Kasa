//Importer react-router-dom pour créer et relier les routes
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Container from './components/Container'
//Importer toutes les pages du site
import Home from './pages/Home'
import About from './pages/About'
import Lodging from './pages/Lodging'
import Error from './pages/Error'
//Importer les composants statiques (Navbar/Footer)
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <div className="App">
      {/*Englober l'intégralité du projet dans le Routeur */}
      <Router>
        <Navbar/>
        <Container customClass="min_height">
          <Routes>
            <Route path = "/" exact element= {<Home/>} />  
            <Route path = "/about" element= {<About/>} />  
            <Route path = "/lodging" element= {<Lodging/>} />  
            <Route path = "*" element= {<Error/>} />  
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;
