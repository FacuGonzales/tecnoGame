
import './App.css';
import { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import HeaderComponent from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

class App extends Component{

  
  state = {
    consola: 'PLAYSTATION',
    precio: 10
  }

  cambiarConsola = ()=>{
    console.log('object')
    if(this.state.consola === 'PLAYSTATION'){
      this.setState({consola: 'XBOX'})
    }
    else{
      this.setState({consola: 'PLAYSTATION'})
    }
  }

  render(){
    return (
      <>
          <HeaderComponent/>

        <div className="bodyContainer">
          <NavBar/>

          <ItemListContainer greeting="Bienvenido! Disfruta las ofertas.."/>
        </div>
      </>
    );

  }
}

export default App;
