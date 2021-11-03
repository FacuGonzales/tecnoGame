import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import { CartContext } from '../Context/CartContext';
import CartItem from './CartItem/CartItem';

const CartContainer = () => {
    const { items, totalItems, totalPrice, clear} = useContext(CartContext)

    return (
        <div>
            <h2 className="titulo">Tu carrito </h2>
            {
                items.length === 0 ? 
                    <div>
                        <h2>No hay productos agregados en el carrito</h2>

                        <Link to="/">
                            <Button positive >Continuar Comprando</Button>
                        </Link>

                    </div>
                        
                :
                
                <div>
                    <CartItem/>

                    <p>Total de Items{ totalItems() }</p>

                    <p>TOTAL A PAGAR: USD { totalPrice() }</p>
                   
                    <Button.Group>
                        <Button onClick={ () => clear() }><Icon name='delete' />Vacíar Carrito</Button>

                        <Button.Or />

                        <Link to="/">
                            <Button positive><Icon name='shop'/>Continuar Comprando</Button>
                        </Link>
                    </Button.Group>
                    
                </div>
            }
        </div>
    )
}

export default CartContainer;