
import './App.css';
import NavBar from './components/navBar/NavBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <div className="containerGreeting">
          <ItemListContainer greeting='Hola me llamo Jeremias!'/>
          <ItemListContainer greeting='Me gusta el futbol.'/>
          <ItemListContainer greeting='Voy a vender pelotas y camisetas'/>
          <ItemListContainer greeting='Todas historicas!'/>
        </div>
        </header>
    </div>
  );
}

export default App;
