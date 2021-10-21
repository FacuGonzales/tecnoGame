import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

function ItemCount({prod, initial, setInitial, onConfirm}){
    
    return (
        
        <Router>

            <div className="contadorContainer">

                <div className="contadorContainer--infoContainer">
                    <div className="contadorContainer--infoContainer__stockContainer">
                        <p className="contadorContainer--infoContainer__stockContainer--valor">Stock disponible: {prod.stock}</p>
                    </div>
                    
                    <div className="contadorContainer--infoContainer__botonAgregarRestar">
                        <Icon name='minus circle' 
                              className="contadorContainer--infoContainer__botonAgregarRestar--botonIcon"
                              onClick = {() => setInitial( initial > 0 ? initial -1 : 0)}/>

                        <p className="contadorContainer--infoContainer__botonAgregarRestar--valorInicial">{initial}</p>

                        <Icon name='plus circle' 
                              className="contadorContainer--infoContainer__botonAgregarRestar--botonIcon"
                              onClick = {() => setInitial( initial < 10 ? initial + 1 : 10)}/>
                    </div>
                </div>

                <div className="contadorContainer--botonesExtra">
                    <Button.Group className="contadorContainer--botonesExtra__contenedorBotones">
                        <Link to="/">
                            <Button className="contadorContainer--botonesExtra__contenedorBotones--btnVolver">Volver</Button>
                        </Link>

                        <Button.Or className="contadorContainer--botonesExtra__contenedorBotones--btnOr"/>

                        <Link to="/carrito">
                            <Button positive 
                                    className="contadorContainer--botonesExtra__contenedorBotones--btnAdd"
                                    onClick={onConfirm(initial, prod)}>
                                Agregar al Carrito
                            </Button>
                        </Link>
                    </Button.Group>
                </div>
            </div>

            
        </Router>
        
    )
};

export default ItemCount;