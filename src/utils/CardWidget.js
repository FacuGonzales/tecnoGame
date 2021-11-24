import React, { useContext, useEffect, useState } from 'react'

import { Icon } from 'semantic-ui-react'
import { Badge } from '@mui/material';

import { CartContext } from '../components/Context/CartContext';

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