import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  

  return (
    <div className="App">
      <NavBar/>

      <ItemListContainer/>

      <ItemDetailContainer />
 
      <Footer/>
      {/* CLOUDINARY PARA IMAGENES */}
    </div>
  );
}

export default App;
