import { useState } from 'react';
import { Link } from 'react-router-dom'

import { Icon, Button } from 'semantic-ui-react';

function ItemCount({stock, initial, onClick}){

    const [contador,setContador] = useState(parseInt(initial));

    const masCantidad = ()=>{
        if (contador < stock) setContador(contador + 1)
    };
    
    const menosCantidad = ()=>{
        if (contador > 0 ) setContador(contador - 1)
    };

    return (
        <div className="contadorContainer">
            <div className="contadorContainer--infoContainer">
                <div className="contadorContainer--infoContainer__stockContainer">
                    <p className="contadorContainer--infoContainer__stockContainer--valor">Stock disponible: {stock}</p>
                </div>

                <div className="contadorContainer--infoContainer__botonAgregarRestar">
                    <Icon name='minus circle' 
                          className="contadorContainer--infoContainer__botonAgregarRestar--botonIcon"
                          onClick={menosCantidad}/>
                    <p className="contadorContainer--infoContainer__botonAgregarRestar--valorInicial">{contador}</p>
                    <Icon name='plus circle' 
                          className="contadorContainer--infoContainer__botonAgregarRestar--botonIcon"
                          onClick={masCantidad}/>
                </div>
            </div>
            
            <div className="contadorContainer--botonesExtra">
                <Button.Group className="contadorContainer--botonesExtra__contenedorBotones">
                    <Link to="/">
                        <Button className="contadorContainer--botonesExtra__contenedorBotones--btnVolver">Volver</Button>
                    </Link>
                    <Button.Or className="contadorContainer--botonesExtra__contenedorBotones--btnOr"/>
                    
                    <Button positive 
                            className="contadorContainer--botonesExtra__contenedorBotones--btnAdd"
                            onClick={()=>onClick(contador)}>
                        Agregar al Carrito
                    </Button>
                </Button.Group>
            </div>
        </div>
    )
};

export default ItemCount;