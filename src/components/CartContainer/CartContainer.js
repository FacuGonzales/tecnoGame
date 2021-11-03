import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon, Divider } from 'semantic-ui-react'
import { CartContext } from '../Context/CartContext';
import CartItem from './CartItem/CartItem';

const CartContainer = () => {
    const { items, totalItems, totalPrice, clear} = useContext(CartContext)

    return (
        <div className="cartContainer">
            <h2 className="cartContainer--titleList">Tu carrito </h2>

            <Divider horizontal><Icon disabled name='cart plus'/></Divider>

            {
                items.length === 0 ? 
                    <div className="cartContainer--sinComprasContainer">
                        <h2 className="cartContainer--sinComprasContainer__titleSinCompras">No hay productos agregados en el carrito</h2>

                        <Link to="/">
                            <Button positive className="cartContainer--sinComprasContainer__button">Continuar Comprando</Button>
                        </Link>

                    </div>
                        
                :
                
                <div className="cartContainer--comprasContainer">
                    <CartItem/>

                    <div className="cartContainer--comprasContainer__infoTotal">
                        <p className="cartContainer--comprasContainer__infoTotal--totalPrice">TOTAL: USD { totalPrice() } | </p>

                        <p className="cartContainer--comprasContainer__infoTotal--totalItems"> x { totalItems() } Unidades</p>
                    </div>
                    
                    <Button.Group className="cartContainer--comprasContainer__buttonsContainer">
                        <Button onClick={ () => clear() } className="cartContainer--comprasContainer__buttonsContainer--vaciarButton">
                            <Icon name='delete' className="cartContainer--comprasContainer__buttonsContainer--vaciarButton__icon"/>Vacíar Carrito
                        </Button>

                        <Button.Or />

                        <Link to="/">
                            <Button positive className="cartContainer--comprasContainer__buttonsContainer--continuarButton">
                                <Icon name='shop'className="cartContainer--comprasContainer__buttonsContainer--continuarButton__icon"/>Continuar Comprando
                            </Button>
                        </Link>
                    </Button.Group>
                    
                </div>
            }
        </div>
    )
}

export default CartContainer;