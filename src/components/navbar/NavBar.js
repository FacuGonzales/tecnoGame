import './NavBar.css';

const NavBar = () => {
    return (  
        <nav className="nav">
            <ul className="ul">
                <li><a href="#">Home</a></li>
                <li><a href="#">Categoria</a>
                    <ul>
                        <li><a href="#">Consolas y Videojuegos</a></li>
                        <li><a href="#">Celulares</a></li>
                        <li><a href="#">Notebooks</a></li>
                        <li><a href="#">PC</a></li>
                        <li><a href="#">Perifericos</a></li>
                        <li><a href="#">Sillas Gamer</a></li>
                    </ul>
                </li>
                <li><a href="#">Carrito</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;