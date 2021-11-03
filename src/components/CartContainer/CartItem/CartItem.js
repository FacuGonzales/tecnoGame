import React,{useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import { Button, Image, List, Icon } from 'semantic-ui-react'

const CartItem = () => {

    const {items,removeItem} = useContext(CartContext);
    return (
        
        <div>
            {
                items.map(i=>{
                    return(

                        <List divided verticalAlign='middle'>
        
                            <List.Item>
                                <List.Content floated='right'>
                                    <Button onClick={()=>{removeItem(i.id)}}><Icon name='trash'/></Button>
                                </List.Content>

                                <Image avatar src={i.url_image}/>

                                <List.Content>{i.nombre} - USD {i.precio} - Cantidad: {i.cantidad}</List.Content>
                            </List.Item>
                        </List>
                    )
                })
            }
        </div>
    )
}

export default CartItem
