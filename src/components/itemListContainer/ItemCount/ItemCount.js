
import './ItemCount.css'
import React from 'react';
import { Icon } from 'semantic-ui-react'


function ItemCount({stock, initial, setInitial}){
    
    return (
        <>
            <div>
                <Icon name='minus circle' onClick = {() => setInitial( initial > 0 ? initial -1 : 0)}/>

               

                <p>Cantidad seleccionada: {initial}</p>

                <Icon name='plus circle' onClick = {() => setInitial( initial < 10 ? initial + 1 : 10)}/>

                
            </div>

            <p>Stock disponible: {stock}</p>
        </>
    )
};

export default ItemCount;