import './ItemList.css';
import React from 'react';
// import { Icon } from 'semantic-ui-react';
import Item from '../Item/Item.js';

import ProductosData from '../../../json/productos.json';

const ItemList = ({title}) => {
    const [ prodList, setProdList ] = React.useState([]);

    React.useEffect(() => {
        const respList = new Promise( (resolve) => {
            setTimeout (()=>{
                resolve(ProductosData);
            },2000);
        })

        respList.then((response) => {
            setProdList(response);
        });
    }, [])

    return (
        <>
        <div className="itemsList">
            { prodList.map((item)=> <Item item={item} key={item.id} /> )}
        </div>

        {/* <div class="ui items">
            { prodList.map((item)=> <ItemComponent item={item} key={item.id} /> )}
           
        </div> */}

        </>
    )

    // return ( 
        
    //     <>
    //         <h4 className="h4Titulo">{title}</h4>
    //         <ul className="ulProductos">
    //             { 
    //                 prodList.map( p => 
    //                     <li>
    //                         <Item img={p.url_image} nombre={p.nombre} precio={p.precio} stock={p.stock}/>
    //                     </li>
    //                 )
    //             }
    //         </ul>
    //     </>
    // )

};

export default ItemList;
