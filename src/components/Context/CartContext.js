import { createContext, useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ( {children} ) => {
    const [ listadoItems, setListadoItem ] = useState([]);

    function addItem(item, cantidad) {
        let index = listadoItems.findIndex(i => i.item.id === item.id);

        if (index === -1 && isInCart === false) {
            const listaNuevoItems = [...listadoItems,{item:item,cantidad}]
            setListadoItem(listaNuevoItems);
        }
        else{
            const nuevaCantidad = listadoItems[index].cantidad + cantidad;
            const listaEdit = listadoItems.filter(i => i.item.id !== listadoItems[index].item.id)
            const listaFinal = [...listaEdit, { item: listadoItems[index].item, cantidad: nuevaCantidad}]
            setListadoItem(listaFinal)
        }
    }

    function removeItem(id){
        let index = listadoItems.findIndex(i => i.item.id === id);

        if (index !== -1 && isInCart === true) listadoItems.splice(index, 1)
    }

    function isInCart(id) {
        let itemExiste= false;
        const item = listadoItems.filter(i => i.item.id === id);

        if ( item.length ) itemExiste = true;
        
        return itemExiste;
    }

    function clear() {
        setListadoItem([])
    }

    return (
        <div>
            <CartContext.Provider value={{ addItem:addItem, removeItem:removeItem, clear:clear }}> {children} </CartContext.Provider>
        </div>
    )
}