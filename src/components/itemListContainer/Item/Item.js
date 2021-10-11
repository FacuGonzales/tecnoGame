import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'
import { Card, Button, Image, Icon } from 'semantic-ui-react';

const Item = ({item}) => {
    const [ initial, setInitial] = React.useState(1);
    const {id, nombre, url_image, precio, stock} = item;

    return (
        // <>

        //     <div class="item">
        //         <div class="image">
        //             <img src={url_image}/>
        //         </div>
                
        //         <div class="content">
        //             {/* <div class="header">header</div> */}
                    
        //             <div class="meta">{nombre}</div>
                    
        //             <div class="description">${precio}</div>
                    
        //             <div class="extra">Stock: {stock}</div>
        //         </div>
        //     </div>

        // </>
        <Card className="card">
            <Image src={url_image} wrapped ui={false} className="contentImg"/>
            <Card.Content>

                <Card.Description className="contentNombre">
                    {nombre}
                </Card.Description>

                <Card.Description className="contentPrecio">
                    <Button animated='fade'>
                        <Button.Content visible><Icon name='shop' /></Button.Content>
                        <Button.Content hidden>$ {precio}</Button.Content>
                    </Button>
                </Card.Description>

                <Card.Meta className="contentStock">
                    <ItemCount stock={stock} initial={initial} setInitial={setInitial}/>
                </Card.Meta>


                
                
            </Card.Content>
        </Card>
    )
};


// const Item = ({img, nombre, precio, stock}) => {
//     const [ initial, setInitial] = React.useState(1);

//     return ( 
//         <>
//             <div>
//                 <img src={img} className="imgProducto"/>
//                 <h3>{nombre}</h3>
//                 <p>$ {precio}</p>

//                 <ItemCount stock={stock} initial={initial} setInitial={setInitial}/>

//                 <div class="ui buttons">
//                     <button class="ui button">Detalle</button>
//                     <div class="or"></div>
//                     <button class="ui positive button">Comprar</button>
//                 </div>
//             </div>
//         </>
//     )

// };

export default Item;
