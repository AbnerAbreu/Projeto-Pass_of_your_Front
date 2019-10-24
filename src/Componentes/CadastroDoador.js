import React, {useState} from 'react';
import './Cadastrar.scss';
import Botao from '../Componentes/Botao';
import Input from '../Componentes/Input';
import {Link} from 'react-router-dom'

const Cadastrar = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [senha, setSenha] = useState("");
    const [count, setCount] = useState(0);
    const [setMensagem] = useState("");


    const resposta = (texto) =>{
        setMensagem(texto)
        setTimeout(() =>{
          setMensagem("")
        }, 2000)
      }

    const handleSubmit = e =>{
        e.preventDefault();

        console.log("Salvo com sucesso")

        if(email === confirmEmail){
          const novaEscola = {
            nome: nome,
            email: email,
            telefone: telefone,
            endereco: endereco,
            senha: senha
          }
          fetch('http://localhost:8000/doadores/',
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
              alert("Doador cadastrado com sucesso")
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
            type="Telefone" 
            label="Telefone" 
            placeholder="Digite seu Telefone"
            atualizarState={setTelefone}
            value={telefone}
            />

            <Input 
            type="Endereco" 
            label="Endereço" 
            placeholder="Digite seu Endereço"
            atualizarState={setEndereco}
            value={endereco}
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

            <h4>Se Quiser cadastrar uma Doacao. Clique abaixo:</h4>
            <Link to="/doacoes"><Botao text="Cadastrar Doacao"></Botao></Link>

          </div>
        )
}
export default Cadastrar;