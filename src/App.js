import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './component/Products';
import Product from './component/Product';
import About from './component/About';
import COntact from './component/COntact';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Footer from './component/Footer';





function App() {
  return (
    <>
  
  <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={ <Home/>} />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/products/:id" element={<Product/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<COntact/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/checkout" element={<Checkout/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>



    </>
  );
}

export default App;
