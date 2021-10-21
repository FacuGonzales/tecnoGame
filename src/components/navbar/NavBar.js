import { Link } from 'react-router-dom'
import CardWidget from '../CardWidget/CardWidget';

const NavBar = ()=>{

    return(
        <header className="header">
            {/* <Link to="/"><img src={'./../../assets/tecnologo.png'}></img></Link> */}
            <Link to="/"><h1 className="header--title">TecnoCBA</h1></Link>
            
            <nav className="header--navegacion">
                <ul className="header--navegacion__lista">
                    <Link to="/"><li className="header--navegacion__lista--opciones">Home</li></Link>
                    <Link to={`/categorias/${1}`}><li className="header--navegacion__lista--opciones">Celulares</li></Link>
                    <Link to={`/categorias/${2}`}><li className="header--navegacion__lista--opciones">Consolas</li></Link>
                    <Link to={`/categorias/${3}`}><li className="header--navegacion__lista--opciones">Notebooks</li></Link>
                    <Link to="/carrito"><li className="header--navegacion__lista--cart"><CardWidget/></li></Link> 
                </ul>
            </nav>
        </header>
    );

};

export default NavBar;
