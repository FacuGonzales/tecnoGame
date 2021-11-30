import React, { useState, useContext } from 'react';
import { collection, addDoc } from "firebase/firestore"
import { db } from "./DataBase"
import { Button, Icon } from 'semantic-ui-react';

import { CartContext } from '../components/Context/CartContext';
import { Link } from 'react-router-dom';

const Form = () => {
    const { items, totalPrice } = useContext(CartContext);

    const [ inputName, setInputName ] = useState("");
    const [ inputPhone, setInputPhone ] = useState("");
    const [ inputEmail, setInputEmail ] = useState("");

    const onChangeName = (name)=> setInputName(name.target.value);
    const onChangePhone = (phone)=> setInputPhone(phone.target.value);
    const onChangeEmail = (email)=> setInputEmail(email.target.value);
    
    const success = (resumen)=>{
        resumen.preventDefault();

        const guardarCompra = async()=>{

            const docSave = await addDoc(collection(db, 'ordenes'),{
                nombre: inputName,
                telefono:inputPhone,
                email:inputEmail,
                items:[...items],
                total:totalPrice(),
                date: db.firestore.Timestamp.fromDate(new Date()),
            })
        }
        guardarCompra();     

    };

    return (
        <div className="formContainer">
            <h1 className="formContainer--title">Completá con los datos del comprador</h1>

            <form className="ui fluid form formContainer--formulario">
                <div className="field formContainer--formulario__inputContainer">
                    <input className="field formContainer--formulario__inputContainer--input" type="text" placeholder="First name" onChange={ onChangeName }/>
                    
                    <div className="ui pointing label">
                        Ingrese su NOMBRE y APELLIDO
                    </div>
                </div>

                <div className="field formContainer--formulario__inputContainer">
                    <input className="field formContainer--formulario__inputContainer--input" type="text" placeholder="First name" onChange={ onChangePhone }/>
                    
                    <div className="ui pointing label">
                        Ingrese su TELEFONO 
                    </div>
                </div>

                <div className="field formContainer--formulario__inputContainer--input">
                    <input className="field formContainer--formulario__inputContainer--input" type="text" placeholder="First name" onChange={ onChangeEmail }/>
                    
                    <div className="ui pointing label">
                        Ingrese su CORREO 
                    </div>
                </div>

                <Button.Group className="field formContainer--formulario__buttonContainer">
                    <Button positive onClick={ success }><Icon name='check' />Confirmar</Button>

                    <Button.Or />
                    <Link to="/">
                        <Button><Icon name='close'/>Cancelar</Button>
                    </Link>
                </Button.Group>
            </form>

        </div>
    )
}

export default Form;