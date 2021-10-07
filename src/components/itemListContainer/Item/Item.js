import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'


const Item = ({img, nombre, precio, stock}) => {
    const [ initial, setInitial] = React.useState(1);

    return ( 
        <>
            <div>
                <img src={img} className="imgProducto"/>
                <h3>{nombre}</h3>
                <p>$ {precio}</p>

                <ItemCount stock={stock} initial={initial} setInitial={setInitial}/>

                <div class="ui buttons">
                    <button class="ui button">Detalle</button>
                    <div class="or"></div>
                    <button class="ui positive button">Comprar</button>
                </div>
            </div>
        </>
    )

};

export default Item;
