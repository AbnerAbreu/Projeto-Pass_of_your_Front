import React from 'react';

import './Doadores.scss';

const Doadores = () => {
    const [doadores, setDoadores] = React.useState([])

    React.useEffect(() => {
        carregarDoadores();
    }, []);

    const carregarDoadores = () => {
        fetch('http://localhost:8000/doadores/',
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
            <nav>
                <h1>Doadores</h1>
                
                {doadores.map((doadores) => {
                    return <div>
                        <li className="titulo">{doadores.nome}</li>
                    </div>
                })}
            </nav>
        </div>
    )
}
export default Doadores;
