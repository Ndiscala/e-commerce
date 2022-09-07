import React from 'react';
import '../../Styles/navBar.css';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
    <header>
        <nav className="navBar container " >
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-star align-items-center ">
                        <li className="nav-item m-1">
                            <Link to="/" >
                                <button className="button fs-1">
                                OUSI
                                </button>
                            </Link> 
                                

                        </li>
                        <li className="nav-item m-3">
                            <Link to="/category/NFT" >
                            <button type="button" className="btn"> NFT's</button>
                            </Link>
                        </li>
                        <li className="nav-item m-3">
                            <Link to="/category/DISCOS" >
                                <button type="button" className="btn">Discos</button>
                            </Link>
                        </li>
                        <li className="nav-item m-3">
                            <Link to="/category/Gorras" >
                                <button type="button" className="btn"> Gorras</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col ">
                    <ul className="nav justify-content-end align-items-center">
                        <li className="nav-item ">
                            <Link to='/cart'>
                                <CartWidget/>
                            </Link>
                            
                        </li>
                        <li className="nav-item m-3">
                            <button type="button" className="btn" style={{backgroundColor:'#5c7ca8', color:'white' }}>REGISTRARSE</button>
                        </li>
                        <li className="nav-item m-3">
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