import { useState, useEffect} from 'react';
import ProductosData from '../../json/productos.json';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = ({id, setOpen}) => {

    const [ item, setItem ] = useState([]);

    useEffect(() => {
        const respuesta = new Promise( (resolve) => {
            setTimeout (()=>{
                resolve(ProductosData);
            },2000);
        })

        respuesta.then((response) => {
            const itemSelected = ProductosData.filter(p => p.id === id)
            setItem(itemSelected);
        });
    }, [id]);
    
    return (
        <section>
            <ItemDetail item={item[0]} setOpen={setOpen}/>
        </section>
    )
};

export default ItemDetailContainer;