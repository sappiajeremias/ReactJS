
import './App.css';
import NavBar from './components/navBar/NavBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Detail from './routes/Detail/Detail';
import Cart from './routes/Cart/Cart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/category/:type" element={<Home/>}/>
          <Route path="/detail/:idItem" element={<Detail/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
        </header>
    </div>
  );
}

export default App;
