import React from 'react';
import '../../Styles/navBar.css';
import CartWidget from './CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';




const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const collectionCat = collection(db, 'categorias')
    
      getDocs(collectionCat)
      .then((res) => {
        const categorias = res.docs.map((cat) => {
            return { id: cat.id,
                    ...cat.data(),
                };
            });
            setCategories(categorias);
        });
    }, [])


    

  return (
    <header>
        <nav className="navBar container " >
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-star align-items-center ">
                        <li className="nav-item m-2">
                            <Link to="/" >
                                <button className=" fs-1">
                                OUSI
                                </button>
                            </Link> 
                        </li>

                        <li className='m-2'>
                            <NavLink to="/category/NFT">
                                 <button>NFT</button>
                            </NavLink>       
                        </li>
                        <li className='m-2'>
                            <NavLink to="/category/DISCOS">
                            <button>DISCOS</button>
                                
                            </NavLink>  
                        </li>

                        <li className='m-2'>
                            <NavLink to="/category/Gorras">
                            <button>Gorras</button>
                                
                            </NavLink>  
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
                            <button type="button" className="btn button" >REGISTRARSE</button>
                        </li>
                        <li className="nav-item m-3">
                            <button type="button" className="btn button" >INICIAR SESIÓN</button>
                        </li>
                    </ul>      
                </div>
            </div>
            
        </nav>
    </header>
    
        
  )
}

export default NavBar;