import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Image, Icon } from 'semantic-ui-react';
import { CartContext } from '../../Context/CartContext';

const Item = ({item}) => {
    const {id, nombre, url_image, precio, oferta, precio_oferta} = item;

    const { addItem }  = useContext(CartContext);

    function addToCart(cant) {
        if (cant > 0) addItem(item, cant);
    }

    return (
        <>
            <Card className="itemListContainer--itemList__contenedorListado__card">
                <Image src={url_image} wrapped ui={false} className="itemListContainer--itemList__contenedorListado__card--contentImg"/>
                <Card.Content>

                    <Card.Description className="itemListContainer--itemList__contenedorListado__card--contentNombre">
                        {nombre}
                    </Card.Description>

                    {oferta ? 
                        <Card.Description className="itemListContainer--itemList__contenedorListado__card--contentNombre">
                            <span className="itemListContainer--itemList__contenedorListado__card--contentNombre__precioOferta">USD {precio_oferta} </span> 
                            <span className="itemListContainer--itemList__contenedorListado__card--contentNombre__precioAnterior">USD {precio}</span> 
                        </Card.Description>
                        :
                        <Card.Description className="itemListContainer--itemList__contenedorListado__card--contentNombre">
                            USD {precio}
                        </Card.Description>
                    }
                   

                    <Card.Description className="itemListContainer--itemList__contenedorListado__card--contentPrecio">
                        <Button.Group>
                            <Link to={`/detalle/${id}`}>
                                <Button ><Icon name='info' /></Button>
                            </Link>

                            <Button.Or />
                            <Link to="/carrito">
                                <Button positive onClick={ () => addToCart(1)}><Icon name='shop' /></Button>
                            </Link>
                        </Button.Group>
                    </Card.Description>
                    
                </Card.Content>
            </Card>
        </>
    )
};

export default Item;
