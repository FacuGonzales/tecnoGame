import './ItemListContainer.css';
import { Divider, Icon} from 'semantic-ui-react'
import ItemCount from './ItemCount/ItemCount';
import React from 'react';


const ItemListContainer = ({greeting}) => {

    let stock = 10;
    const [initial, setInitial] = React.useState(1);


    return (
        <section>
            <h1 className="titleItemList">{greeting}</h1>

            <Divider horizontal><Icon disabled name='cart plus'/></Divider>
            
            <Icon name='minus circle' onClick = {() => {
                console.log('resta')
                setInitial( initial > 0 ? initial -1 : 0);
            }}/>
                
            <ItemCount stock={stock} initial={initial}/>
            
            <Icon name='plus circle' onClick = {() => {
                console.log('suma')
                setInitial( initial < 10 ? initial + 1 : 10);
            }}/>
        </section>
    )
};

export default ItemListContainer;