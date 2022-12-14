import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import {HomeScreen} from './Home';
import {Products} from './Products'; 
import {Header} from './Header'
import {Footer} from './Footer'
import { SideBar } from './SideBar';
import { render } from '@testing-library/react';
import { ProductDetails } from './ProductDetails';
import { CartItems } from './CartItems';
import { NoCartItems } from './NoCartItem'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<HomeScreen/>}/>
          <Route path="/product_details" element = {<ProductDetails/>}/>
          <Route path="/cart_items" element = {<CartItems/>}/>
          <Route path="/no_items" element = {<NoCartItems/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
