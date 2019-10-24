import React from 'react';
import Imagem from '../Componentes/Imagem';
import fundoEscola from './imagem/fundoEscola.jpg';

import './Escola.scss';

const Escola = () => {
    const [escolas, setEscolas] = React.useState([])

    React.useEffect(() => {
        carregarEscolas();
    }, []);

    const carregarEscolas = () => {
        fetch('http://localhost:8000/escolas/',
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        ).then(response => {
            return response.json()
        }).then(response => {
            setEscolas(response);
        })
    }
    return (
        <div className="Escola">
            <nav>
            <div className="fundo">
                <h1>Lista de Escolas</h1>
                
                {escolas.map((escola) => {
                    return <div>
                    <li className="titulo">{escola.nome}</li> 
                       
                        
                    </div>
                })}
            </div>
            </nav>
        </div>
    )
}
export default Escola;