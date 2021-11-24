import React from 'react';
import { Divider, Icon} from 'semantic-ui-react'

import ItemList from './ItemList/ItemList';

const ItemListContainer = () => {

    return (
        <section className="itemListContainer">
            <h1 className="itemListContainer--titleList">Nuestras ofertas</h1>

            <Divider horizontal><Icon disabled name='cart plus'/></Divider>
            
            <ItemList/>
            
        </section>
    )
};

export default ItemListContainer;