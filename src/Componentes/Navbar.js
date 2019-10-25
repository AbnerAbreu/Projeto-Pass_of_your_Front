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

    const makeMagic = () => {
      for (let el of document.getElementsByTagName("body")) {
        for(let i = 0; i <= 360; i++) {
          setTimeout(() => {
            el.style.transform = "rotate(" + i + "deg)";
          }, i * 3);
        }
      }
    }

    return (
        <div className="Navbar">
            <nav>
                <div className="flor">
                <Imagem onClick={makeMagic} conteudo={carnation} />
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
