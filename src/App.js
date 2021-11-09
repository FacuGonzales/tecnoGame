
import "./styles/main.scss";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

// Importacion de componentes
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemList from './components/itemListContainer/ItemList/ItemList';
import ItemDetailContainer from './components/Details/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import CartProvider from "./components/Context/CartContext";
import FormularioCompra from "./utils/form";

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