import './ItemListContainer.css';
import { Divider, Icon} from 'semantic-ui-react'


const ItemListContainer = ({greeting}) => {

    return (
        <section>
            <h1 className="titleItemList">{greeting}</h1>

            <Divider horizontal><Icon disabled name='cart plus'/></Divider>
            
            <ul>
                <li>Producto 1</li>
                <li>Producto 2</li>
                <li>Producto 3</li>
                <li>Producto 4</li>
                <li>Producto 5</li>
                <li>Producto 6</li>
                <li>Producto 7</li>
            </ul>
        </section>
    )
};

export default ItemListContainer;