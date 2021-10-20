import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'
import { Card, Button, Image, Icon } from 'semantic-ui-react';
import ModalContainer from '../../ModalContainer/ModalContainer';
import ItemDetailContainer from '../../Details/ItemDetailContainer';

const Item = ({item}) => {
    const [open, setOpen] = useState(false);

    const {id, nombre, url_image, precio} = item;

    return (
        <>
            <Card className="card">
                <Image src={url_image} wrapped ui={false} className="contentImg"/>
                <Card.Content>

                    <Card.Description className="contentNombre">
                        {nombre}
                    </Card.Description>

                    <Card.Description className="contentNombre">
                        $ {precio}
                    </Card.Description>

                    <Card.Description className="contentPrecio">
                        <Button.Group>
                            <Button onClick={ () => setOpen(op => !op)}><Icon name='info' /></Button>
                            <Button.Or />
                            <Button positive><Icon name='shop' /></Button>
                        </Button.Group>
                    </Card.Description>
                    
                </Card.Content>
            </Card>

            <ModalContainer open={open} setOpen={setOpen}>
                <ItemDetailContainer setOpen={setOpen} id={id}/>
            </ModalContainer>
        </>
    )
};

export default Item;
