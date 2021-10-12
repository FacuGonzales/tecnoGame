import './ItemList.css';
import React from 'react';
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
    }, []);

    return (
        <>
            <h2 className="h2Titulo">{title}</h2>

            <div className="itemsList">
                { prodList.map((item)=> <Item item={item} key={item.id} /> )}
            </div>
        </>
    )
};

export default ItemList;
