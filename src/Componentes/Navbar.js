import React,{ useState } from 'react';
import {Link} from 'react-router-dom'
import './Navbar.scss';

const Navbar = () => {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const abrirMenu = () => {
      setMenuAtivo(!menuAtivo);
    };
    const fecharMenu = () =>{
      setMenuAtivo(false)
    }



    return (
        <div className="Navbar">
            <nav>
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