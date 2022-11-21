//Importer react-router-dom pour créer et relier les routes
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Container from './components/container/Container.js'
//Importer toutes les pages du site
import Home from './pages/Home'
import About from './pages/About'
import Lodging from './pages/Lodging'
import Error from './pages/Error'
//Importer les composants statiques (Navbar/Footer)
import Navbar from './components/navbar/Navbar.js'


function App() {
  return (
    <div className="App">
      {/*Englober l'intégralité du projet dans le Routeur */}
      <Router>
        <Navbar/>
        <Container>
          <Routes>
            <Route path = "/" exact element= {<Home/>} />  
            <Route path = "/about" element= {<About/>} />  
            <Route path = "/lodging" element= {<Lodging/>} />  
            <Route path = "/error" element= {<Error/>} />  
          </Routes>
        </Container>

      </Router>
    </div>
  );
}

export default App;
