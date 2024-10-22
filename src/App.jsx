import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListDetail from '../src/components/ItemListDetail/ItenListDetail';
import Clips from './components/Clips/Clips';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/App/App.css';


function App() {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(prevCartItems => prevCartItems + 1);
  };

  const emptyCart = () => {
    setCartItems(0);
  };

  return (
    <Router>
      <div className="deco">
        <NavBar cartItems={cartItems} onEmptyCart={emptyCart} />
        <Routes>
          <Route path="/" element={<ItemListContainer addToCart={addToCart} />} />
          <Route path="/shop" element={<ItemListContainer addToCart={addToCart} />} />
          <Route path="/item-detail" element={<ItemListDetail/>} />
          <Route path="/clips" element={<Clips />} />
          <Route path="/historia" element={<h2>Sección de Historia</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
