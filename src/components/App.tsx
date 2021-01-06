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
  const [availableProducts] = useState<Product[]>(products);
  const [cart, setCart] = useState<Cart>({
    total: 0,
    items: []
  });
  
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => ( { ...prevCart, items: [...prevCart.items, product] } ));
  }
  
  const handleRemoveFromCart = (id: String) => {
    const updateditems = cart.items.filter(item => item.slug !== id);
    setCart((prevCart) => ( { ...prevCart, items: updateditems } ));
  }
  
  
  return (
    <Router>
      <div className="App">
        <Navbar cart={cart}/>
        <Switch>
          <Route exact path="/">
            <Products availableProducts={availableProducts}/>
          </Route>
          <Route exact path="/product/:slug">
            <ProductPage
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
