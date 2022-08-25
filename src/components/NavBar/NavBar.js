import React from 'react';
import '../../Styles/navBar.css';
import CartWidget from './CartWidget/CartWidget';


const NavBar = () => {
  return (
    <header>
        <nav className="navBar container " >
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-start align-items-center ">
                        <li className="nav-item">
                        
                                <button data-text="Awesome" className="button">
                                <span className="actual-text">&nbsp;OUSI&nbsp;</span>
                                <span className="hover-text" aria-hidden="true">&nbsp;OUSI&nbsp;</span>
                                </button>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#" style={{color: 'white'}}>Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{color: 'white'}}>Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#' style={{color: 'white'}}>Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col ">
                    <ul className="nav justify-content-end align-items-center">
                        <li className="nav-item">
                            <CartWidget/>  
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn" style={{backgroundColor:'#5c7ca8', color:'white' }}>REGISTRARSE</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn" style={{backgroundColor:'#5c7ca8', color:'white' }}>INICIAR SESIÓN</button>
                        </li>
                    </ul>      
                </div>
            </div>
            
        </nav>
    </header>
    
        
  )
}

export default NavBar;