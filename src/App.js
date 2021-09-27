
import './App.css';
import { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import HeaderComponent from './components/header/Header';
import LandingComponent from './components/landing/Landing';

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
        <div className="headerContainer">
          <HeaderComponent/>
        </div>

        <div className="bodyContainer">
          <div className="navBarContainer">
            <NavBar/>
          </div>

          <div className="landingContainer">
            <LandingComponent/>
          </div>
        </div>
      </>
    );

  }
}

export default App;
