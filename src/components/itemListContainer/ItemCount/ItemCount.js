
import './ItemCount.css'
import React from 'react';
import { Icon } from 'semantic-ui-react'


function ItemCount({stock, initial, setInitial}){
    
    return (
        <>
            <div className="contadorContainer">
                <Icon name='minus circle' onClick = {() => setInitial( initial > 0 ? initial -1 : 0)}/>

                <p>{initial}</p>

                <Icon name='plus circle' onClick = {() => setInitial( initial < 10 ? initial + 1 : 10)}/>

            </div>

            <p>Stock disponible: {stock}</p>

            <button class="ui positive button" onClick = {() => {
                console.log('CANTIDAD SELECCIONADA: ',initial)
            }}>Imprimir resultado</button>
        </>
    )
};

export default ItemCount;