import { createContext, useState} from 'react'
import { Alert, Snackbar } from "@mui/material";

export const CartContext = createContext();

export const CartProvider = ( {children} ) => {
    const [alertMessage, setAlertMessage] = useState({
        text: '',
        severity: 'success',
        open: false
    });
    const [items, setItems] = useState([]);
    const [ cantidad, setCantidad ] = useState(0);
    const [ total, setTotal ] = useState(0)

    const addItem = (item, cantidad) => {

        if (isInCart(item.id)) {

            setAlertMessage({
                text: 'El producto ya se encuentra en tu carrito',
                severity: 'warning',
                open: true
            });
            return;
        }

        setAlertMessage({
            text: `Se agrego ${cantidad} productos correctamente a tu carrito`,
            severity: 'success',
            open: true
        });

        setItems([...items, { cantidad: cantidad, ...item }]);
    }

    
    const removeItem = (itemId) => {

        setItems(items.filter(item => item.id !== itemId));

        setAlertMessage({
            text: `Se elimino el producto de tu carrito`,
            severity: 'success',
            open: true
        });
    }
    
    const isInCart = (itemId) => {
        return !!items.find(item => item.id === itemId);
    }

    const clear = () => {

        setItems([]);

        setAlertMessage({
            text: `Se vacío correctamente tu carrito`,
            severity: 'success',
            open: true
        });
    }

    const totalItems = () => {
        let cantidad = 0;
        items.forEach(i => cantidad += i.cantidad)
        setCantidad(cantidad)
        return cantidad
    }

    const totalPrice = () => {
        let suma = 0;
        items.forEach(i => suma += parseInt(i.precio) * i.cantidad)
        setTotal(suma)
        return suma
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlertMessage({
            text: '',
            severity: 'success',
            open: false
        });
    };
    
    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, totalItems, totalPrice, items, cantidad:cantidad, total:total, }}>
            {children}

            <Snackbar open={alertMessage.open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alertMessage.severity} sx={{ width: '100%' }}>
                    {alertMessage.text}
                </Alert>
            </Snackbar>
        </CartContext.Provider>
    );
}

export default CartProvider;