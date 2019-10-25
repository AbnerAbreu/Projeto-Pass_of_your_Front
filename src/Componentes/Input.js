import React from 'react';
import "./Input.scss";


const Input = ({label, min, placeholder ,type ,value ,atualizarState, obrigatorio} ) => {
  const atualizar = (event) => {
    atualizarState(event.target.value)
}
    return (
      <div className="Input">
          <label>{label}{obrigatorio ? " *" : ""}</label>
          <input min={min} required={obrigatorio} type={type} placeholder={placeholder} value={value} onChange={atualizar}/>
      </div>
    )
  }
  export default Input;