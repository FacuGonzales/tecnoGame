import React,{useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import { Button, Image, List, Icon } from 'semantic-ui-react'

const CartItem = () => {

    const {listadoItems,removeItem} = useContext(CartContext);
    return (
        
        <div>
            {
                listadoItems.map(i=>{
                    return(

                        <List divided verticalAlign='middle'>
        
                            <List.Item>
                                <List.Content floated='right'>
                                    <Button onClick={()=>{removeItem(i.item.id)}}><Icon name='trash'/></Button>
                                </List.Content>

                                <Image avatar src={i.item.url_image}/>

                                <List.Content>{i.item.nombre} - USD {i.item.precio} - Cantidad: {i.cantidad}</List.Content>
                            </List.Item>
                        </List>
                    )
                })
            }
        </div>
    )
}

export default CartItem
