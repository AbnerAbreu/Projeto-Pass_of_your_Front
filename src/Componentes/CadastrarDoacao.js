import React, {useState, useEffect} from 'react';
import './Cadastrar.scss';
import Botao from './Botao';
import Input from './Input';
import {Link} from 'react-router-dom';



const Cadastrar = () => {
    const [nome, setNome] = useState("");
    const [descricao, setdescricao] = useState("");
    const [quantidade, setquantidade  ] = useState("");
    const [count, setCount] = useState(0);
    const [mensagem , setMensagem] = useState("");
    const [img, setImg] = useState("");


    const resposta = (texto) =>{
        setMensagem(texto)
        setTimeout(() =>{
          setMensagem("")
        }, 2000)
      }

    const handleSubmit = e =>{
        e.preventDefault();

        if(nome){
          const novaDoacao = {
            nome: nome,
            descricao: descricao,
            quantidade: quantidade,
            linkImg: img,
          }

          fetch('http://localhost:8000/doacoes/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(novaDoacao)
            }
          ).then(response => {
              return response.json()
          }).then(response => {
            if(response.id) {
              setNome("")
              setdescricao("")
              setquantidade("")
              setImg("")
              alert("criado com sucesso")
            }else{
              alert("Deu ruim")
            }
          })
        }
        



    
        }
    return (
        <div className="cadastro">
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
    
            <Input 
            type="Nome" 
            label="Nome" 
            placeholder="Digite o nome"
            atualizarState={setNome}
            value={nome}
            />

            <Input 
            type="text" 
            label="Link de Imagem" 
            placeholder=""
            atualizarState={setImg}
            value={img}
            obrigatorio
            />

            <Input 
            type="text" 
            label="Descrição" 
            placeholder=""
            atualizarState={setdescricao}
            value={descricao}
            obrigatorio
            />
            
            <Input 
            type="number" 
            label="Quantidade" 
            placeholder="quantidade"
            atualizarState={setquantidade}
            value={quantidade}
            />

            <Input type="submit" value="Cadastrar"/>
              
            </form> 
          </div>
        )
}
export default Cadastrar;