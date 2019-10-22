import React from 'react';
import Abner from './imagem/abner.jpg';
import samanta from './imagem/samanta.jpg'
import thiago2 from './imagem/thiago2.jpg';
import roger from './imagem/roger.jpg';
import larissa from './imagem/larissa.jpg';
import beatriz from './imagem/beatriz.jpg';
import Imagem from '../Componentes/Imagem';
import './Home.scss';


const Home = ({texto}) => {
    return (
        <div className="Home">
           <header>
               <h1>O  QUE NÃO É UTIL PARA VOCÊ, <br/>
                   PODE SER UTIL PARA ESCOLAS CARENTES</h1>
           </header>
            <div>
                <h1>Equipe:</h1>
            </div>
           <section>
                <div>
                    <Imagem conteudo={Abner} texto={"Abner Abreu"}/>
                    <Imagem conteudo={samanta} texto={"Samanta Souza"}/>
                    <Imagem conteudo={thiago2} texto={"Thiago Mendes"}/>
                    <Imagem conteudo={roger} texto={"Roger"}/>
                    <Imagem conteudo={larissa} texto={"Larissa"}/>
                    <Imagem conteudo={beatriz} texto={"Batriz pavan "}/>
                </div>

           </section>

            <footer>
            <p> Suporte: mastertech@gmail.com </p>
            </footer>
        </div>
    )
}
export default Home;