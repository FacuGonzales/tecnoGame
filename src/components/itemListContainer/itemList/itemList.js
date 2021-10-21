
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { Divider, Icon} from 'semantic-ui-react'

import Item from '../Item/Item.js';
import LoadingComponent from '../../LoadingContainer/LoadingComponent';

const ItemList = () => {
    const [ prodList, setProdList ] = useState([]);

    let objFiltro = useParams();
    let filtro = parseInt(objFiltro.categoriaId) || 0;

    let existeFiltro = objFiltro.categoriaId ? true : false;
    
    let categoriaVisible;

    switch (filtro) {
        case 1:   
            categoriaVisible = 'Celulares';
            break;

        case 2:   
            categoriaVisible = 'Consolas';
            break;

        case 3:   
            categoriaVisible = 'Notebooks';
            break;
    
        default:
            break;
    }

    useEffect(() => {
        const respList = new Promise( (resolve) => {
            setTimeout (()=>{
                axios('https://tecnogame-1101-default-rtdb.firebaseio.com/productos.json').then(({data}) => resolve(data));
            },2000);
        })

        respList.then((response) => {
            setProdList(response);
        });
    }, []);

    if(!prodList.length){
        return <LoadingComponent></LoadingComponent>
    }else{

        return(

            <div>
                {existeFiltro? 
                    <div className="itemListContainer">
                        <div className="itemListContainer--itemList">
                            <h1 className="itemListContainer--titleList">{categoriaVisible}</h1>

                            <Divider horizontal><Icon disabled name='cart plus'/></Divider>

                            <div className="itemListContainer--itemList__contenedorListado">
                                {
                                
                                    prodList.filter(p => filtro === 0 || filtro === p.categoria).map(
                                        item => {
                                            return(<Item item={item}/>)
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                :
                    <div className="itemListContainer--itemList">
                        <div className="itemListContainer--itemList__contenedorListado">
                            {
                            
                                prodList.filter(p => filtro === 0 || filtro === p.categoria).map(
                                    item => {
                                        return(<Item item={item}/>)
                                    }
                                )
                            }
                        </div>
                    </div>
                }
            </div>




           
        )
    }
};

export default ItemList;
