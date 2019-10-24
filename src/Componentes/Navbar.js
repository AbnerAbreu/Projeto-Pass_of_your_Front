import React,{ useState } from 'react';
import {Link} from 'react-router-dom'
import Imagem from '../Componentes/Imagem';
import carnation from './imagem/carnation.png';
import './Navbar.scss';

const Navbar = () => {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const abrirMenu = () => {
      setMenuAtivo(!menuAtivo);
    };
    // const fecharMenu = () =>{
    //   setMenuAtivo(false)
    // }



    return (
        <div className="Navbar">
            <nav>
                <div className="flor">
                <Imagem conteudo={carnation} />
                </div>
            <Link  to="/">Home</Link>
            <div onClick={abrirMenu} id="menucad">
            <Link  to="/cadastrar">Cadastrar </Link>

            </div>
            <Link  to="/escolas">Escolas</Link>
            <Link  to="/doadores">Doadores</Link>
       


            </nav>
        </div>
    )
}
export default Navbar;
