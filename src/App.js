import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Components/Products.js';
import Detail from './Components/Detail';
import Crousel from './Components/crouselDetail.js';
import Cart from './Components/Cartpage.js';
import Login from './pages/Login.js';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/proDetail' element={<Detail />} />
          <Route path='/crouselDetail' element={<Crousel />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
