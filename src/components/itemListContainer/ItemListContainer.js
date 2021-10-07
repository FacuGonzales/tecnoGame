import './ItemListContainer.css';
import { Divider, Icon} from 'semantic-ui-react'
import ItemCount from './ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';
import React from 'react';



const ItemListContainer = ({greeting}) => {

    let stock = 10;
    
    const [ initial, setInitial] = React.useState(1);

    return (
        <section>
            <h1 className="titleItemList">{greeting}</h1>

            <Divider horizontal><Icon disabled name='cart plus'/></Divider>
            
            <ItemCount stock={stock} initial={initial} setInitial={setInitial}/>

            <ItemList title="Listado de productos"/>
            
        </section>
    )
};

export default ItemListContainer;