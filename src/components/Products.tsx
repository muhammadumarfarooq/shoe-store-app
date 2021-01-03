import React from 'react';
import Product from './product';

interface Props {
  availableProducts: Product[]
}

const Products: React.FC<Props> = ({ availableProducts }) => {
  
  return (
    <section className="products">
      {availableProducts.map((product) => <Product product={product}/>)}
    </section>
  );
};

Products.propTypes = {};

export default Products;
