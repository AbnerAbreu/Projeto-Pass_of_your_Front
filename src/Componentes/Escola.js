import React from 'react';
import { API_URL } from '../api';
import './Escola.scss';

const Escola = () => {
    const [escolas, setEscolas] = React.useState([])

    React.useEffect(() => {
        carregarEscolas();
    }, []);

    const carregarEscolas = () => {
        fetch(API_URL + 'escolas/',
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
                <div className="texto">

            <nav>
            <div className="fundo">
                <div className="teste">

                <h1>Lista de Escolas</h1>
                
                {escolas.map((escola) => {
                    return <div>
                    <li className="titulo">{escola.nome}</li> 
                       
                        
                    </div>
                })}
                </div>
            </div>
            </nav>
                </div>
            <footer>
                <p> Suporte: mastertech@gmail.com </p>
        </footer>
        </div>

    )
}
export default Escola;