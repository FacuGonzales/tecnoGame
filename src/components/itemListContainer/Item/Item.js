import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'
import { Card, Button, Image, Icon } from 'semantic-ui-react';
import ModalContainer from '../../ModalContainer/ModalContainer';
import ItemDetailContainer from '../../Details/ItemDetailContainer';

const Item = ({item}) => {
    const [ initial, setInitial] = useState(1);
    const [open, setOpen] = useState(false);

    const {id, nombre, url_image, precio, stock} = item;

    return (
        <>
            <Card className="card">
                <Image src={url_image} wrapped ui={false} className="contentImg"/>
                <Card.Content>

                    <Card.Description className="contentNombre">
                        {nombre}
                    </Card.Description>

                    <Card.Description className="contentNombre">
                        $ {item?.precio}
                    </Card.Description>

                    <Card.Description className="contentPrecio">
                        <Button.Group>
                            <Button><Icon name='shop' /></Button>
                            <Button.Or />
                            <Button positive onClick={ () => setOpen(op => !op)}><Icon name='info' /></Button>
                        </Button.Group>
                    </Card.Description>
                    
                    <Card.Meta className="contentStock">
                        <ItemCount stock={stock} initial={initial} setInitial={setInitial}/>
                    </Card.Meta>
                </Card.Content>
            </Card>

            <ModalContainer open={open} setOpen={setOpen}>
                <ItemDetailContainer setOpen={setOpen} id={id}/>
            </ModalContainer>
        </>
    )
};

export default Item;
