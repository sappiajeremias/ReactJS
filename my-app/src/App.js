import "./App.css";
import NavBar from "./components/navBar/NavBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Detail from "./routes/Detail/Detail";
import Cart from "./routes/Cart/Cart";
import Footer from "./components/footer/Footer";
import React from "react";
import CartProvider from './context/cartProvider/CartProvider';


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <CartProvider>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:type" element={<Home />} />
                <Route path="/detail/:idItem" element={<Detail />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </CartProvider>
          </BrowserRouter>
        </header>
        <Footer />
      </div>
    </>
  );
}

export default App;
