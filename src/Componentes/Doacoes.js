import React from 'react';
import './Doacoes.scss';
import Doacao from './Doacao';


const Doacoes = () => {
    const [doacoes, setDoacoes] = React.useState([])

    React.useEffect(() => {
        CadastrarDoacoes();
    }, []);

    const CadastrarDoacoes = () => {
        fetch('http://localhost:8000/doacoes/',
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        ).then(response => {
            return response.json()
        }).then(response => {
            setDoacoes(response);
        })
    }
    return (
        <div className="Doacoes">
            <h1>Doações</h1>
            <div className="lista-doacoes">
                {doacoes.map((doacao) => <Doacao {...doacao}/>)}
            </div>
        </div>
    )
}
export default Doacoes;