import { useState } from 'react';
import { Item } from 'semantic-ui-react'
import ItemCount from '../../itemListContainer/ItemCount/ItemCount';
import LoadingComponent from '../../LoadingContainer/LoadingComponent';


const ItemDetail = ({item}) => {
    const [ initial, setInitial] = useState(1);
    const [ prodSelected, setProdSelected ] = useState({});

    function addToCart(cantidad, prod){

        if(!item?.stock || item?.stock < cantidad) return console.log('No hay elementos', cantidad); 

        setProdSelected(prod);

        console.log(cantidad, prod);

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
                        <ItemCount prod={item} 
                                   initial={initial}
                                   setInitial={setInitial}
                                   onConfirm={addToCart}/>
                    </Item.Extra>
                </Item.Content>
            </Item>
        )
    }


};

export default ItemDetail;
