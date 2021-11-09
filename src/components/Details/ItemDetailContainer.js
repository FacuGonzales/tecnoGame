import { useState, useEffect } from 'react';
import { Divider, Icon} from 'semantic-ui-react'
import { getDoc,doc } from "firebase/firestore";
import { db } from "../../utils/db"

import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = ({match}) => {

    const [ item, setItem ] = useState([]);

   let idProd = match.params.id;

    useEffect(() => {
        
        const requestData = async () => {
            const docRef = doc(db, 'productos', idProd);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const item = docSnap.data();
                const id = docSnap.id;

                setItem({...item, id});
            }
        } 
        requestData();

    }, [idProd])
    
    return (
        <section className="itemDetailContainer">

            <h1 className="itemDetailContainer__title">Detalle de Producto</h1>
            
            <Divider horizontal><Icon disabled name='cart plus'/></Divider>

            <ItemDetail item={item}/>
        </section>
    )
};

export default ItemDetailContainer;