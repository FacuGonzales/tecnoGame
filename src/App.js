
import './App.css';
import { Component } from 'react';
import NavBar from './components/navbar/NavBar';
// import HeaderComponent from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

class App extends Component{
  
    render(){
        return (
            <>
                <div className='cabecera'>
                    <h1 className='title'>TecnoGame</h1>
                </div>
          
                <div className="bodyContainer">
                    <NavBar/>
          
                    <ItemListContainer greeting="Bienvenido! Disfruta las ofertas.."/>
                </div>
            </>
        );

    }
}

export default App;
