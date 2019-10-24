import React, {useState} from 'react';
import './Cadastrar.scss';
import Input from './Input';

const Cadastrar = () => {
    const [nome, setNome] = useState("");
    const [descricao, setdescricao] = useState("");
    const [quantidade, setquantidade  ] = useState("");
    //const [count, setCount] = useState(0);
    const [setMensagem] = useState("");


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
            label="Descrição" 
            placeholder=""
            atualizarState={setdescricao}
            value={descricao}
            obrigatorio
            />
            
            <Input 
            type="select-box" 
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