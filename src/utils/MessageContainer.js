import React, { useState } from 'react'

function MessageContainer() {
  const cotizacion = 205
  const [ inputValue, setInputValue ] = useState(1);
  const onChangeValue = (val)=> setInputValue(val.target.value);

  const result =  (cotizacion*inputValue);

  return(
    <div className="cotizacionContainer">
      <h3 className="cotizacionContainer--title">Cotizacion del dolar ${cotizacion}</h3>

      <form className="cotizacionContainer--form">
        <div  className="cotizacionContainer--form__inputUsd ui right labeled input">
          <label for="amount" class="ui label">USD</label>
          <input type="number" name="" id="" value={inputValue} onChange={ onChangeValue }/>
        </div>
        <div className="cotizacionContainer--form__signoIgual">
          <h3>=</h3>
        </div>
        <div className="cotizacionContainer--form__inputPesos ui right labeled input">
          <label for="amount" className="ui label">$</label>
          <input  type="number" value={result} disabled/>
        </div>
      </form>
    </div>
  )
}

export default MessageContainer