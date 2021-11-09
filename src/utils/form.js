import React, { useState, useContext } from 'react';
import { collection, addDoc } from "firebase/firestore"
import { db } from "./db"
import { CartContext } from '../components/Context/CartContext';

const FormularioCompra = () => {
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
                // date: db.firestore.Timestamp.fromDate(new Date()),
            })
        }
        guardarCompra();     

    };

    return (
        <div>
            <form >
                <div>
                    <p>Nombre</p>
                    <input type="text" onChange={ onChangeName } /> 
                </div>

                <div>
                    <p>Telefono</p>
                    <input type="number" name="" id="" onChange={ onChangePhone }/>
                </div>

                <div>
                    <p>Email</p>
                    <input type="email" name="" id="" onChange={ onChangeEmail }/>
                </div>

                <div>
                    <input type="button" value="Confirmar" onClick={ success } />
                    <input type="button" value="Cancelar" />
                </div>
            </form>
        </div>
    )
}

export default FormularioCompra;