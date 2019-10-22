import React from 'react';

import './Escola.scss';

const Escola = () => {

    fetch('http://localhost:8000/escolas/',
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        ).then(response => {
            return response.json()
        }).then(response => {
            console.log(response)
        })
    return (
        <div className="Escola">
            <nav>
                <h1>Escola</h1>
                
        
            </nav>
        </div>
    )
}
export default Escola;