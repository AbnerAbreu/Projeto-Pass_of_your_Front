import React from 'react';
import './Botaozinho.scss';


const Botaozinho = ({ desativado,text,funcao }) => {
    
    return (
        <button disabled={desativado} onClick={funcao} className="botaozinho">{text}</button>
    )
}
export default Botaozinho;