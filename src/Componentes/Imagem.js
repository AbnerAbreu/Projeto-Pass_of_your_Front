import React from 'react';
import './Imagem.scss';



const Imagem = ({conteudo, texto}) => {
    return (
        <div className="Imagem">

            <img src={conteudo} alt="" />
            <h3>{texto}</h3>
        </div>
    )
}
export default Imagem;