import React, { useState } from 'react'

const LandingComponent = () => {

    const [consola, setConsola] = useState('PLAYSTATION')

    const cambiarConsola = ()=>{
        consola === 'PLAYSTATION'? setConsola('XBOX'): setConsola('PLAYSTATION')
    }

    return (
        <section>
            <ul>
                <li onClick={cambiarConsola}>{consola}</li>
                <li>Producto 1</li>
                <li>Producto 1</li>
                <li>Producto 1</li>
                <li>Producto 1</li>
                <li>Producto 1</li>
                <li>Producto 1</li>
            </ul>
        </section>
    )
};

export default LandingComponent;