import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'

import { Item, Button } from 'semantic-ui-react'

import { CartContext } from '../../Context/CartContext';
import LoadingComponent from '../../../utils/LoadingComponent';
import ItemCount from '../../ItemListContainer/ItemCount/ItemCount';


const ItemDetail = ({item}) => {
    const [ confirmar, setConfirmar ] = useState(false);
    const { addItem }  = useContext(CartContext);
    
    function addToCart(cant) {
        setConfirmar(true);

        if (cant > 0) addItem(item, cant);
    }

    if(!item){
        return <LoadingComponent></LoadingComponent>
    }else{
        return (
            <Item className="itemDetailContainer__itemDetail">
                <Item.Image src={item?.url_image} className="itemDetailContainer__itemDetail--image"/>

                <Item.Content className="itemDetailContainer__itemDetail--contentInfo">
                    <Item.Header className="itemDetailContainer__itemDetail--contentInfo__titulo">{item?.nombre}</Item.Header>
                    <Item.Meta className="itemDetailContainer__itemDetail--contentInfo__precio">USD {item?.precio} </Item.Meta>
                    <Item.Description className="itemDetailContainer__itemDetail--contentInfo__descripcion">{item?.descripcion}</Item.Description>

                    <Item.Extra className="itemDetailContainer__itemDetail--contentInfo__contador">
                        {   confirmar? 
                                <Link to="/carrito">
                                    <Button positive className="contadorContainer--botonesExtra__contenedorBotones--btnAdd">Confirmar Compra</Button>
                                </Link> 
                            :
                                <ItemCount stock={item.stock} initial="1" onClick={ (cantidad) => addToCart(cantidad)}/>
                        }

                    </Item.Extra>
                </Item.Content>
            </Item>
        )
    }


};

export default ItemDetail;
