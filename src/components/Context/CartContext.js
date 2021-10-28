import { createContext, useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ( {children} ) => {
    const [ listadoItems, setListadoItem ] = useState([]);
    const [ cantidad, setCantidad ] = useState(0);
    const [ total, setTotal ] = useState(0)

    const addItem = (i, cantidad) => {
        let index = listadoItems.findIndex(i => i.item.id === i.id);

        if (index === -1 ) {
            const listaNuevoItems = [...listadoItems,{item:i,cantidad}]
            setListadoItem(listaNuevoItems);
        }
        else{
            const nuevaCantidad = listadoItems[index].cantidad + cantidad;
            const listaEdit = listadoItems.filter(i => i.item.id !== listadoItems[index].item.id)
            const listaFinal = [...listaEdit, { item: listadoItems[index].item, cantidad: nuevaCantidad}]
            setListadoItem(listaFinal)
        }
    }

    const removeItem = (id) => {
        let index = listadoItems.findIndex(i => i.item.id === id);

        if (index !== -1 && isInCart === true) listadoItems.splice(index, 1)
    }

    const isInCart = (id) => {
        let itemExiste= false;
        const item = listadoItems.filter(i => i.item.id === id);

        if ( item.length ) itemExiste = true;
        
        return itemExiste;
    }

    const clear = () =>{
        setListadoItem([])
    }

    const totalItems = () => {
        let cantidad = 0;
        listadoItems.forEach(i => cantidad += i.cantidad)
        setCantidad(cantidad)
        return cantidad
    }

    const totalPrice = () => {
        let suma = 0;
        listadoItems.forEach(i => suma += i.item.precio * i.cantidad)
        setTotal(suma)
        return suma
    }

    return (
        <div>
            <CartContext.Provider value={{ addItem:addItem, 
                                           removeItem:removeItem, 
                                           clear:clear,
                                           totalItems:totalItems,
                                           totalPrice:totalPrice,
                                           listadoItems:listadoItems,
                                           cantidad:cantidad,
                                           total:total,}}> {children} </CartContext.Provider>
        </div>
    )
}

export default CartProvider;