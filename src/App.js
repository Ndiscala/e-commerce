import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
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
              </Routes>

              <Footer/>
      
        {/* CLOUDINARY PARA IMAGENES */}
      </div>
    </BrowserRouter> 
  );
}

export default App;
