import { Button } from 'semantic-ui-react';

const ItemDetail = ({item, setOpen}) => {
    return (
        <div class="ui items">
            <div class="item">
                <div class="image">
                    <img src={item?.url_image}/>
                </div>
                
                <div class="content">
                    <div class="header">{item?.nombre}</div>
                    
                    <div class="meta">${item?.precio}</div>
                    
                    <div class="description">{item?.descripcion}</div>

                    <div class="meta">Stock disponible: {item?.stock}</div>
                    
                    <div class="extra">
                        <Button.Group>
                            <Button onClick={() => setOpen( op => !op)}>Volver</Button>
                            <Button.Or />
                            <Button positive>Agregar al Carrito</Button>
                        </Button.Group>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;
