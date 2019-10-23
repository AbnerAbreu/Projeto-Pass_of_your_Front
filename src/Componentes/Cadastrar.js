import React from 'react';
import './Cadastrar.scss';
import Botao from "./Botao";
import { Link } from "react-router-dom";



const Cadastrar = () => {

    return(
        <div className="Cadastrar">

            <h1>Se Quiser se Cadastrar como escola. Clique abaixo:</h1>
            <Link to="/cadastrarescola"><Botao text="Cadastrar Escola"></Botao></Link>

            <h1>Se Quiser se Cadastrar como doador. Clique abaixo:</h1>
            <Link to="/cadastrardoador"><Botao text="Cadastrar Doador"></Botao></Link>

        </div>
    )
}
export default Cadastrar;