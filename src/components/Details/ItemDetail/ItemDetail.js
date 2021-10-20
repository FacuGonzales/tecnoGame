// import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import ItemCount from '../../itemListContainer/ItemCount/ItemCount';
import LoadingComponent from '../../LoadingContainer/LoadingComponent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CartContainer from '../../CartContainer/CartContainer';


const ItemDetail = ({item, setOpen}) => {
    const [ initial, setInitial] = useState(1);

    function addToCart(cantidad){

        if(!item?.stock || item?.stock < cantidad) return console.log('No hay elementos', cantidad); 

        return (
            <Router>
                <Switch>
                    <Route path="/carrito" exact>
                        <CartContainer/>
                    </Route>
                </Switch>
            </Router>
        )

    }

    if(!item){
        return <LoadingComponent></LoadingComponent>
    }else{
        return (
            <div className="ui items">
                <div className="item">
                    <div className="image">
                        <img src={item?.url_image}/>
                    </div>
    
                    <div className="content">
                        <div className="header">{item?.nombre}</div>
    
                        <div className="meta">${item?.precio}</div>
    
                        <div className="description">{item?.descripcion}</div>
    
                        <div className="meta">Stock disponible: {item?.stock}</div>
    
                        <div>
                            <ItemCount stock={item?.stock} 
                                        initial={initial}
                                        setInitial={setInitial}
                                        setOpen={setOpen}
                                        onConfirm={addToCart}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


};

export default ItemDetail;
