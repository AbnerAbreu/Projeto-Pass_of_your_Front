import React, {useState} from 'react';
import './Cadastrar.scss';
import { API_URL } from '../api';

import Input from './Input';


const Cadastrar = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [senha, setSenha] = useState("");
    const [count, setCount] = useState(0);
    // const [setMensagem] = useState("");


    // const resposta = (texto) =>{
    //     setMensagem(texto)
    //     setTimeout(() =>{
    //       setMensagem("")
    //     }, 2000)
    //   }

    const handleSubmit = e =>{
        e.preventDefault();

        console.log("Opa")

        // fetch('http://localhost:8000/escolas/',
        //   {
        //     headers: {
        //       'Content-Type': 'application/json'
        //     }
        //   }
        // ).then(response => {
        //     return response.json()
        // }).then(response => {
        //     console.log(response)
        // })

      
        if(email === confirmEmail){
          const novaEscola = {
            nome: nome,
            email: email,
            telefone: telefone,
            endereco: endereco,
            senha: senha
          }
          fetch(API_URL + 'escolas/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(novaEscola)
            }
          ).then(response => {
              return response.json()
          }).then(response => {
            if(response.id) {
              window.location='https://prafrente.herokuapp.com/doacoes'
            }else{
              alert("Deu ruim")
            }
          })



          localStorage.setItem(`Dados${count}`, JSON.stringify(novaEscola));
          setCount(count + 1);
          setNome("");
          setEmail("");
          setConfirmEmail("");
          setSenha("");
          //resposta("Cadastro realizado com sucesso")
        //}else{
          //resposta("Os emails não correspondem");
          
         }
    
         }
    return (
        <div className="cadastro">
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
    
            <Input 
            type="text" 
            label="Nome" 
            placeholder="Nome Completo"
            atualizarState={setNome}
            value={nome}
            obrigatorio
            />
            
            <Input 
            type="email" 
            label="Email" 
            placeholder="Digite o Email"
            atualizarState={setEmail}
            value={email}
            obrigatorio
            />
    
    
            <Input 
            type="email" 
            label="Confirme o seu email" 
            placeholder="Reescreva o Email"
            atualizarState={setConfirmEmail}
            value={confirmEmail}
            obrigatorio
            />

            <Input 
            type="Telefone" 
            label="Telefone" 
            placeholder="Digite seu Telefone"
            atualizarState={setTelefone}
            value={telefone}
            obrigatorio
            />

            <Input 
            type="Endereco" 
            label="Endereço" 
            placeholder="Digite seu Endereço"
            atualizarState={setEndereco}
            value={endereco}
            obrigatorio
            />
            
            <Input 
            type="password" 
            label="Senha" 
            placeholder="Digite a senha"
            atualizarState={setSenha}
            value={senha}
            obrigatorio
            />
    
            <Input type="submit" value="Cadastrar"/>
              
            </form> 

          </div>
        )
}
export default Cadastrar;