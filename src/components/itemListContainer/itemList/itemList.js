import './ItemList.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Item from '../Item/Item.js';
import LoadingComponent from '../../LoadingContainer/LoadingComponent';

const ItemList = ({title}) => {
    const [ prodList, setProdList ] = useState([]);

    useEffect(() => {
        const respList = new Promise( (resolve) => {
            setTimeout (()=>{
                axios('https://tecnogame-1101-default-rtdb.firebaseio.com/productos/teclados.json').then(({data}) => resolve(data));
            },2000);
        })

        respList.then((response) => {
            setProdList(response);
        });
    }, []);

    if(!prodList.length){
        return <LoadingComponent></LoadingComponent>
    }else{
        return (
            <>
                <h2 className="h2Titulo">{title}</h2>
    
                <div className="itemsList">
                    { prodList.map((item)=> <Item item={item} key={item.id} /> )}
                </div>
            </>
        )
    }
};

export default ItemList;
