import React from 'react';
import {Link} from 'react-router-dom'
import Imagem from '../Componentes/Imagem';
import carnation from './imagem/carnation.png';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav>
                <div className="flor">
                <Imagem conteudo={carnation} />
                </div>
            <Link  to="/">Home</Link>
            <Link  to="/cadastrar">Cadastrar</Link>
            <Link  to="/login">Escolas</Link>
            </nav>
        </div>
    )
}
export default Navbar;
