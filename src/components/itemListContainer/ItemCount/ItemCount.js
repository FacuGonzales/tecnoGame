
import './ItemCount.css'
import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

function ItemCount({stock, initial, setInitial, setOpen, onConfirm}){
    
    return (
        
        <Router>
            <div className="contadorContainer">
                <Icon name='minus circle' onClick = {() => setInitial( initial > 0 ? initial -1 : 0)}/>

                <p>{initial}</p>

                <Icon name='plus circle' onClick = {() => setInitial( initial < 10 ? initial + 1 : 10)}/>

            </div>

            <p>Stock disponible: {stock}</p>

            <div className="extra">
                <Button.Group>
                    <Button onClick={() => setOpen( op => !op)}>Volver</Button>
                    <Button.Or />
                    <Link to="/carrito">
                        <Button positive onClick={() => { setOpen( op => !op); onConfirm(initial)}}>Agregar al Carrito</Button>
                    </Link>
                </Button.Group>
            </div>
        </Router>
        
    )
};

export default ItemCount;