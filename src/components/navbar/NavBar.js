import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const NavBar = () => {
    return (  
        <Router>
            <nav>
                <ul>
                    <Link to="/"><li><a className="active" href="#home">Home</a></li></Link>
                    <Link to="/celulares"><li><a href="#news">Celulares </a></li></Link>
                    <Link to="/camaras"><li><a href="#contact">Camaras</a></li></Link>
                    <Link to="/notebooks"><li><a href="#about">Notebooks</a></li></Link>
                    <Link to="/carrito"><li><CardWidget/></li></Link>
                </ul>
            </nav>
        </Router>

        // <nav className="nav">
        //     <ul className="ul">
        //         <li><a href="#">
        //                 Home
        //             </a>
        //         </li>
        //         <li><a href="#">Categoria</a>
        //             <ul>
        //                 <li><a href="#">Consolas y Videojuegos</a></li>
        //                 <li><a href="#">Celulares</a></li>
        //                 <li><a href="#">Notebooks</a></li>
        //                 <li><a href="#">PC</a></li>
        //                 <li><a href="#">Perifericos</a></li>
        //                 <li><a href="#">Sillas Gamer</a></li>
        //             </ul>
        //         </li>
        //         <li><a href="#">
        //             <CardWidget/>
        //             </a>
        //         </li>
        //         <li><a href="#">Contacto</a></li>
        //     </ul>
        // </nav>
    );
};

export default NavBar;