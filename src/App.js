import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartProvider from './components/context/CartContext';




function App() {
  

  return (
    <CartProvider>
      <BrowserRouter>
      <div className="App">
              <NavBar/>
              
              <Routes> 
                <Route 
                      path='/' 
                      element={<ItemListContainer/>} 
                />
                <Route 
                      path='/category/:categoryName' 
                      element={<ItemListContainer/>} 
                />
                <Route 
                      path='/detail/:idProducto' 
                      element={<ItemDetailContainer />} 
                />
                <Route 
                      path="/cart" 
                      element={<Cart />}     
                />

              </Routes>

              <Footer/>
      
      </div>
      </BrowserRouter> 
    </CartProvider>
  );
}

export default App;
