import React from 'react';
import Navbar from './Componentes/Navbar';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.scss';
import Escola from './Componentes/Escola';
import Cadastrar from './Componentes/Cadastrar';
import Home from './Componentes/Home';
import CadastrarEscola from './Componentes/CadastrarEscola';
import CadastroDoador from './Componentes/CadastroDoador'
import Doadores from './Componentes/Doadores';
import CadastrarDoacao from './Componentes/CadastrarDoacao';
import Doacoes from './Componentes/Doacoes';
import Receber from './Componentes/Receber';
//import Doacao from './Componentes/Doacao';



const App=() => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/cadastrar" component={Cadastrar} />
      <Route path="/cadastrarescola" component={CadastrarEscola} />
      <Route path="/cadastrardoador" component={CadastroDoador} />
      <Route path="/doadores" component={Doadores} />
      <Route path="/escolas" component={Escola} />
      <Route path="/cadastrardoacoes" component={CadastrarDoacao} />
      <Route path="/doacoes" component={Doacoes} />
      <Route path="/receber" component={Receber}/>

      


      
    </div>
    
    </BrowserRouter>
  )
}

export default App;
