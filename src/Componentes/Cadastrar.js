import React from 'react';
import './Cadastrar.scss';
import Botao from "./Botao";
import { Link } from "react-router-dom";
import Imagem from '../Componentes/Imagem';
import logoEscola from './imagem/logoEscola.png';
import doacao from './imagem/doacao.png';



const Cadastrar = () => {
    
    return(
        
        <div className="Cadastrar">
             

            <div className='banner'>
                <div className="texto1">
                     <Imagem  conteudo={logoEscola} />
                    <h1>Cadastre sua escola aqui </h1>
                    <Link to="/cadastrarescola"><Botao text="Cadastrar Escola"></Botao></Link>
                </div>
                <div className="texto2">
                    <Imagem  conteudo={doacao} />
                    <h1>Seja um doador! <br/>
                        </h1>
                    <Link to="/cadastrardoador"><Botao text="Cadastrar Doador"></Botao></Link>
                </div>
            </div>
            
            <footer>
            
                <p> Suporte: mastertech@gmail.com </p>
            
            </footer>
            </div>
        )
    }
    export default Cadastrar;