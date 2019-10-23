import React from 'react';

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
                <h1>Escola</h1>
                
                {escolas.map((escola) => {
                    return <div>
                        <h1>{escola.nome}</h1>
                        <h4>{escola.email}</h4>
                    </div>
                })}
            </nav>
        </div>
    )
}
export default Escola;