import './ItemList.css';
import React from 'react';
import { Icon } from 'semantic-ui-react';
import Item from '../Item/Item.js';

let productos = [
    // {
    //     teclados : [
            {
                id: 1,
                nombre: 'Teclado Mecanico Soul Gaming',
                precio: 6300,
                url_image: 'https://firebasestorage.googleapis.com/v0/b/tecnogame-1101.appspot.com/o/soul.png?alt=media&token=40a127d1-a50c-4285-bc07-aa1ea7c01d26',
                stock: 12,
                oferta: false,
                precio_oferta: null,
            },
            {
                id: 2,
                nombre: 'Teclado Gamer Hyperx Alloy Elite 2',
                precio: 17643,
                url_image: 'https://firebasestorage.googleapis.com/v0/b/tecnogame-1101.appspot.com/o/hyperex.png?alt=media&token=404fec16-2269-4cdc-a5e2-e868c4d4028d',
                stock: 10,
                oferta: false,
                precio_oferta: null,
            },
            {
                id: 1,
                nombre: 'Teclado Gamer RGB Nisuta NSKBGZ88 QWERTY',
                precio: 6899,
                url_image: 'https://firebasestorage.googleapis.com/v0/b/tecnogame-1101.appspot.com/o/nisuta.png?alt=media&token=f02782cb-04e9-49b3-8404-1d55be4cfb03',
                stock: 9,
                oferta: false,
                precio_oferta: null,
            }
    //     ]
    // }
    
]



const ItemList = ({title}) => {
    const [ initial, setInitial] = React.useState(1);

    const [ prodList, setProdList ] = React.useState([]);
    
    setTimeout(() => {
        setProdList(productos)
    }, 3000);

    return ( 
        <>
            <h4 className="h4Titulo">{title}</h4>
            <ul className="ulProductos">
                { 
                    prodList.map( p => 
                        <li>
                            <Item img={p.url_image} nombre={p.nombre} precio={p.precio} stock={p.stock}/>
                            {/* <img src={p.url_image}/>
                            <h3>{p.nombre}</h3>
                            <p>$ {p.precio}</p>
                         
                            <div>
                                <Icon name='minus circle' onClick = {() => setInitial( initial > 0 ? initial -1 : 0)}/>
    
                                <p>{initial}</p>
    
                                <Icon name='plus circle' onClick = {() => setInitial( initial < 10 ? initial + 1 : 10)}/>
                            </div>
    
    
                            <div class="ui buttons">
                                <button class="ui button">Detalle</button>
                                <div class="or"></div>
                                <button class="ui positive button">Comprar</button>
                            </div>
    
                            <p>Stock Disponible: {p.stock}</p> */}
                        </li>
                    )
                }
            </ul>
        </>
    )

};

export default ItemList;
