import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'
import { Card, Button, Image, Icon } from 'semantic-ui-react';

const Item = ({item}) => {
    const [ initial, setInitial] = React.useState(1);
    const {nombre, url_image, precio, stock} = item;

    return (
        <Card className="card">
            <Image src={url_image} wrapped ui={false} className="contentImg"/>
            <Card.Content>

                <Card.Description className="contentNombre">
                    {nombre}
                </Card.Description>

                <Card.Description className="contentPrecio">
                    <Button animated='fade'>
                        <Button.Content visible><Icon name='shop' /></Button.Content>
                        <Button.Content hidden>$ {precio}</Button.Content>
                    </Button>
                </Card.Description>

                <Card.Meta className="contentStock">
                    <ItemCount stock={stock} initial={initial} setInitial={setInitial}/>
                </Card.Meta>
            </Card.Content>
        </Card>
    )
};

export default Item;
