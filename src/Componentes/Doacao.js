import React, { useState, useEffect } from 'react';
import Botao from './Botao';
import { Link } from 'react-router-dom';
import "./Doacao.scss";
import Botaozinho from './Botaozinho';



const Doacao = ({ linkImg, conteudo, valor , nome, id }) => {
    const valorNovo = Number(valor);
    const [quantidade, setQuantidade] = useState(0);
    const [valorTotal, setValorTotal ] = useState(1);

    
    const incrementar = () =>{
        if(quantidade < 10){
            setQuantidade(quantidade + 1)
        } else{
            return;
        }
    }

    const decrementar = () =>{
        if(quantidade > 0){
            setQuantidade(quantidade - 1)
        }
    }

    // useEffect(()=>{
    //     const total = (valorNovo * quantidade);
    //     return setValorTotal((total.toFixed(2)).replace(".", ","));
        
    // }, [incrementar, decrementar])

    const handleSubmit = e => {
        e.preventDefault();
        localStorage.setItem(`Valor Total${id}`, valorTotal);

    }

    return (
      <div className="doacao">
          <h3>{nome}</h3>
          <div className="img">
            <img src={linkImg} alt="imagem"/>
          </div>

          <div className="bnts">
          <Botaozinho funcao={decrementar} desativado={quantidade == 0} text="-"/>
          <p>{quantidade}</p>
          <Botaozinho funcao={incrementar} desativado={quantidade == 10} text="+"/>
          </div>

          
            <Botao funcao={handleSubmit} text="Receber"/>



      </div>

    )
  }
  export default Doacao;