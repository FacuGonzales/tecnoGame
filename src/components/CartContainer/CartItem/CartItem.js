import React,{useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import { Divider, Button, Image, Icon, List } from 'semantic-ui-react'
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const CartItem = () => {

    const {items,removeItem} = useContext(CartContext);
    return (
        
        <div>
            {
                items.map(i=>{
                    return(

                        // <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                        //     <ListItem>
                        //         <ListItemAvatar>
                        //             <Avatar>
                        //                 <Image avatar src={i.url_image}/>
                        //             </Avatar>
                        //         </ListItemAvatar>
                        //         <ListItemText primary={i.nombre} secondary={i.precio} />
                        //     </ListItem>
                        // </List>
<>
                        <List divided verticalAlign='middle' className="carItemList">
        
                            <List.Item className="carItemList__item">
                                

                                {/* <Image avatar src={i.url_image}/> */}
                                <div className="carItemList__item--infoContainer">
                                    <ListItemAvatar className="carItemList__item--infoContainer__avatarContainer">
                                        <Avatar className="carItemList__item--infoContainer__avatarContainer__avatar">
                                            <Image avatar src={i.url_image} className="carItemList__item--infoContainer__avatarContainer__avatar--img"/>
                                        </Avatar>
                                    </ListItemAvatar>

                                    <List.Content className="carItemList__item--infoContainer__datos">
                                        <h2 className="carItemList__item--infoContainer__datos--tituloProd">{i.nombre}</h2>
                                    </List.Content>
                                </div>

                                <List.Content floated='right' className="carItemList__item--buttonContainer"> 

                                    <p className="carItemList__item--buttonContainer__precioContainer">USD {i.precio} -</p>

                                    <p className="carItemList__item--buttonContainer__cantidadContainer"> x{i.cantidad} Uni.</p>
                                   
                                    <Button onClick={()=>{removeItem(i.id)}} className="carItemList__item--buttonContainer__button">
                                        <Icon name='trash'className="carItemList__item--buttonContainer__button--icon"/>
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
