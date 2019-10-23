import React from 'react';
import Navbar from './Componentes/Navbar';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.scss';
import Login from './Componentes/Escola';
import Cadastrar from './Componentes/Cadastrar';
import Home from './Componentes/Home';

const App=() => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/cadastrar" component={Cadastrar} />
      <Route path="/login" component={Login} />
     

    </div>
    
    </BrowserRouter>
  )
}

export default App;
