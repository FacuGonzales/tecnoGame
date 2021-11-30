// Estilos
import "./styles/main.scss";

// React
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

// Utils
import NavBar from './utils/NavBar';
import FormularioCompra from "./utils/Formulario";

// Components
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemListContainer/ItemList/ItemList';
import ItemDetailContainer from './components/Details/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import CartProvider from "./components/Context/CartContext";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <NavBar/>
          
          <Switch>
            <Route exact component={ ItemListContainer } path="/" />
            <Route component={ ItemList } path="/categorias/:categoriaId" />
            <Route component={ ItemDetailContainer } path="/detalle/:id" />
            <Route component={ CartContainer } path="/carrito" />
            <Route  component={ FormularioCompra } path="/confirmarCompra" />
          </Switch>
        </CartProvider>
      </Router>
    </div>
  );
}
  
export default App;
