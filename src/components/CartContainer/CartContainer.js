import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { CartContext } from '../Context/CartContext';
import CartItem from './CartItem/CartItem';

const CartContainer = () => {
    const { listadoItems, totalItems, totalPrice, clear} = useContext(CartContext)

    return (
        <div>
            <h2 className="titulo">Tu carrito </h2>
            {
                listadoItems.length === 0 ? 
                    <div>
                        <h2>No hay productos agregados en el carrito</h2>

                        <Link to="/">
                            <Button positive >Continuar Comprando</Button>
                        </Link>

                    </div>
                        
                :
                
                <div>
                    <h2>productos{ totalItems() }</h2>
                    
                    <CartItem/>

                    <p>Total: USD { totalPrice() }</p>

                    <Button onClick={ () => clear() }>Vacíar Carrito</Button>
                    
                </div>
            }
        </div>
    )
}

export default CartContainer;