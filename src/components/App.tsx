import React, { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Products from "./Products";
import { products } from '../constants/hardcodedData';

function App() {
  const [availableProducts, setAvailableProducts] = useState<Product[]>(products);
  return (
    <div className="App">
      <Navbar/>
      <Products availableProducts={availableProducts}/>
      <Footer/>
    </div>
  );
}

export default App;
