//Importer react-router-dom pour créer et relier les routes
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './components/Container'
//Importer toutes les pages du site
import Home from './pages/Home'
import About from './pages/About'
import Lodging from './pages/Lodging'
import Error from './pages/Error'

function App() {
  return (
    <div className="App">
      {/*Englober l'intégralité du projet dans le Routeur */}
      <Router>
        <Container>
          <Routes>
            <Route path = "/" exact element= {<Home/>} />  
            <Route path = "/about" element= {<About/>} />  
            <Route path = "/lodging/:id" element= {<Lodging/>} />  
            <Route path = "*" element= {<Error/>} />  
            <Route path = "/404" element= {<Error/>} />  
          </Routes>
        </Container>
      </Router>
    </div>
  )
}

export default App;
