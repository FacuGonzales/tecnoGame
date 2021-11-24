import React,{useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import { Divider, Button, Image, Icon, List } from 'semantic-ui-react'
import Avatar from '@mui/material/Avatar';

import ListItemAvatar from '@mui/material/ListItemAvatar';

const CartItem = () => {

    const {items,removeItem} = useContext(CartContext);
    return (
        
        <div>
            {
                items.map(i=>{
                    return(
                        <>
                        <List divided verticalAlign='middle' className="cartContainer--comprasContainer__itemContainer--carItemList">
        
                            <List.Item className="cartContainer--comprasContainer__itemContainer--carItemList__item">
                                

                                {/* <Image avatar src={i.url_image}/> */}
                                <div className="cartContainer--comprasContainer__itemContainer--carItemList__item--infoContainer">
                                    <ListItemAvatar className="cartContainer--comprasContainer__itemContainer--carItemList__item--infoContainer__avatarContainer">
                                        <Avatar className="cartContainer--comprasContainer__itemContainer--carItemList__item--infoContainer__avatarContainer__avatar">
                                            <Image avatar src={i.url_image} className="cartContainer--comprasContainer__itemContainer--carItemList__item--infoContainer__avatarContainer__avatar--img"/>
                                        </Avatar>
                                    </ListItemAvatar>

                                    <List.Content className="cartContainer--comprasContainer__itemContainer--carItemList__item--infoContainer__datos">
                                        <h2 className="cartContainer--comprasContainer__itemContainer--carItemList__item--infoContainer__datos--tituloProd">{i.nombre}</h2>
                                    </List.Content>
                                </div>

                                <List.Content floated='right' className="cartContainer--comprasContainer__itemContainer--carItemList__item--buttonContainer"> 

                                    <p className="cartContainer--comprasContainer__itemContainer--carItemList__item--buttonContainer__precioContainer">USD {i.precio} -</p>

                                    <p className="cartContainer--comprasContainer__itemContainer--carItemList__item--buttonContainer__cantidadContainer"> x{i.cantidad} Uni.</p>
                                   
                                    <Button onClick={()=>{removeItem(i.id)}} className="cartContainer--comprasContainer__itemContainer--carItemList__item--buttonContainer__button">
                                        <Icon name='trash'className="cartContainer--comprasContainer__itemContainer--carItemList__item--buttonContainer__button--icon"/>
                                    </Button>
                                </List.Content>

                            </List.Item>
                        
                            <Divider horizontal><Icon disabled name='cart plus'/></Divider>
                        </List>

                        </>
                    )
                })
            }
        </div>
    )
}

export default CartItem
