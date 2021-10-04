
import { Icon} from 'semantic-ui-react'


const ItemCount = ({stock, initial}) => {
    console.log(initial)
    return (
        <>
            <div>
               

                <p>Cantidad seleccionada: {initial}</p>

                
            </div>

            <p>Stock disponible: {stock}</p>
        </>
    )
};

export default ItemCount;