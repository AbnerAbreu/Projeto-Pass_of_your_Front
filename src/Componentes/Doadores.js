import React from 'react';
import { API_URL } from '../api';
import './Doadores.scss';

const Doadores = () => {
    const [doadores, setDoadores] = React.useState([])

    React.useEffect(() => {
        carregarDoadores();
    }, []);

    const carregarDoadores = () => {
        fetch(API_URL + 'doadores/',
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        ).then(response => {
            return response.json()
        }).then(response => {
            setDoadores(response);
        })
    }
    return (
        <div className="Doadores">
            <div className="doacao">
                <div className="transparencia">

            
                <h1>Doadores</h1>
                
                {doadores.map((doadores) => {
                    return <div>
                        <li className="titulo">{doadores.nome}</li>
                    </div>
                })}
                </div>
                </div>
                <footer>
                    <p> Suporte: mastertech@gmail.com </p>
                </footer>
        </div>
    )
}
export default Doadores;
