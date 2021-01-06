import React, { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Products from "./Products";
import { products } from '../constants/hardcodedData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductPage from "./ProductPage";

function App() {
  const [availableProducts, setAvailableProducts] = useState<Product[]>(products);
  const [cart, setCart] = useState<Cart>({
    total: 0,
    items: []
  });
  return (
    <Router>
      <div className="App">
        <Navbar cart={cart}/>
        <Switch>
          <Route exact path="/">
            <Products availableProducts={availableProducts}/>
          </Route>
          <Route exact path="/product/:slug">
            <ProductPage/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
