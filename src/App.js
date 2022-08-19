import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';


function App() {
  const saludo = 'Este es mi componente ItemListContainer';

  return (
    <div className="App">
      <NavBar/>

      <ItemListContainer saludo={saludo}/>

      
      <Footer/>
      
    </div>
  );
}

export default App;
