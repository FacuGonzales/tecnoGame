import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { Divider, Icon} from 'semantic-ui-react'
import { collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../../../utils/DataBase"

import Item from '../Item/Item.js';
import LoadingComponent from '../../../utils/LoadingComponent';

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
        const getData = async () => {
            let resultadoDB;

            if( filtro !== 0) {
                resultadoDB = query(collection(db, "productos"), where("categoria", "==", filtro));
            } else{
                resultadoDB = query(collection(db, "productos"));
            }  

            const querySnapshot = await getDocs(resultadoDB);

            const prod = querySnapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            })

            setProdList(prod)
        };

        getData();

    }, [filtro]);

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
                                    prodList.map(p=>{
                                        return(<Item item={p} key={p.id}/>)
                                    })
                                }

                            </div>
                        </div>
                    </div>
                :
                    <div className="itemListContainer--itemList">
                        <div className="itemListContainer--itemList__contenedorListado">
                            {
                                prodList.map(p=>{
                                    if(p.oferta) return(<Item item={p} key={p.id}/>)
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
};

export default ItemList;