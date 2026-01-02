import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Servicos from './Pages/Servicos';
import Contato from './Pages/Contato';
import Projetos from './Pages/NossosProjetos';
import Rodape from './Components/Rodape/Rodape'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/projetos" element= {<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Rodape/>
    </Router>
    
  );
}

export default App;
