import React from 'react';
import './Imagem.scss';



const Imagem = ({onClick, conteudo, texto}) => {
    return (
        <div onClick={onClick} className="Imagem">

            <img src={conteudo} alt="" />
            <h3>{texto}</h3>
        </div>
    )
}
export default Imagem;