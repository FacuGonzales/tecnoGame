import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { Divider, Icon} from 'semantic-ui-react'
import axios from 'axios';

import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [ item, setItem ] = useState([]);

    let objFiltro = useParams();
    let filtro = parseInt(objFiltro.id) || 0;

    useEffect(() => {
        const respuesta = new Promise( (resolve) => {
            setTimeout (()=>{
                axios('https://tecnogame-1101-default-rtdb.firebaseio.com/productos.json').then(({data}) => resolve(data));
            },2000);
        })

        respuesta.then((response) => {
            const itemSelected = response.filter(p => p.id === filtro)
            setItem(itemSelected);
        });
    }, []);
    
    return (
        <section className="itemDetailContainer">

            <h1 className="itemDetailContainer__title">Detalle de Producto</h1>
            
            <Divider horizontal><Icon disabled name='cart plus'/></Divider>

            <ItemDetail item={item[0]}/>
        </section>
    )
};

export default ItemDetailContainer;