import { useState } from 'react';
import { Link } from 'react-router-dom'

import { Tooltip, Fab } from '@mui/material';
import Calculate from '@mui/icons-material/Calculate';
import logo from '../assets/img/newLogoHeader.png'

import CardWidget from './CardWidget';
import ModalContainer from './ModalContainer';
import MessageContainer from './MessageContainer';

const NavBar = ()=>{
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <div className="divHeader">
      <nav className="divHeader--navbar">
        <div className="divHeader--navbar__logo">
          <Link to="/">
            <img src={logo} className="divHeader--navbar__logo--img"/>
          </Link>
        </div>

        <ul className="divHeader--navbar__lista">
          <Link to="/"><li className="divHeader--navbar__lista--opciones">Home</li></Link>
          <Link to={`/categorias/${1}`}><li className="divHeader--navbar__lista--opciones">Celulares</li></Link>
          <Link to={`/categorias/${2}`}><li className="divHeader--navbar__lista--opciones">Consolas</li></Link>
          <Link to={`/categorias/${3}`}><li className="divHeader--navbar__lista--opciones">Notebooks</li></Link>
          <Link to="/carrito"><li className="divHeader--navbar__lista--cart"><CardWidget/></li></Link> 
        </ul>
      </nav>

      <div className="divHeader--message">
        <Tooltip title="Calcular precio en PESOS">
          <Fab size="medium" color="secondary" aria-label="add"  onClick={handleOpen}>
            <Calculate />
          </Fab>
        </Tooltip>
        
        <ModalContainer children={ <MessageContainer/>} open={open} setOpen={handleClose}/>
      </div>
    </div>
  );


};

export default NavBar;
