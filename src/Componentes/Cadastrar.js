import React, {useState, useEffect} from 'react';
import './Cadastrar.scss';
import Botao from '../Componentes/Botao';
import Input from '../Componentes/Input';
import {Link} from 'react-router-dom'

const Cadastrar = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [count, setCount] = useState(0);
    const [mensagem , setMensagem] = useState("");


    const resposta = (texto) =>{
        setMensagem(texto)
        setTimeout(() =>{
          setMensagem("")
        }, 2000)
      }

    const handleSubmit = e =>{
        e.preventDefault();

        console.log("Opa")

        fetch('http://localhost:8000/escolas/',
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        ).then(response => {
            return response.json()
        }).then(response => {
            alert(response)
        })

      
        if(email === confirmEmail){
          const novaEscola = {
            nome: nome,
            email: email,
            telefone: '111111111',
            endereco: 'asdasdasd',
            senha: senha
          }
          fetch('http://localhost:8000/escolas/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringfy(novaEscola)
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



          localStorage.setItem(`Dados${count}`, JSON.stringfy(novaEscola));
          setCount(count + 1);
          setNome("");
          setEmail("");
          setConfirmEmail("");
          setSenha("");
          resposta("Cadastro realizado com sucesso")
        }else{
          resposta("Os emails não correspondem");
          
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
            placeholder="digite o Email"
            atualizarState={setEmail}
            value={email}
            />
    
    
            <Input 
            type="email" 
            label="Confirme o seu email" 
            placeholder="Reescreva o Email"
            atualizarState={setConfirmEmail}
            value={confirmEmail}
            />
            
            <Input 
            type="password" 
            label="Senha" 
            placeholder="digite a senha"
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