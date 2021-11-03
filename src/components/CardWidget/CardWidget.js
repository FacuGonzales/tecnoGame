import React, { useContext, useEffect, useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { CartContext } from '../Context/CartContext';
import { Badge } from '@mui/material';
const CardWidget = () => {
    const { items } = useContext(CartContext);
    const [itemsCount, setItemsCount] = useState(0);

    useEffect(() => {
        let cantidad = items.reduce((acc, item) => acc + item.cantidad, 0);
        setItemsCount(cantidad);
    }, [items])


    return(
        <Badge badgeContent={itemsCount} color="secondary">
            <Icon name='shopping cart' className="icono"/>
        </Badge>
    );
}

export default CardWidget;