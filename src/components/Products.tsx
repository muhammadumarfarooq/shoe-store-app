import React from 'react';
import Product from './product';

interface Props {
  availableProducts: Product[]
}

const Products: React.FC<Props> = ({ availableProducts }) => {
  
  return (
    <div style={{ paddingTop: "6rem", paddingBottom: "2rem" }} className="products container">
      <div className="row">
        {availableProducts.map((product) => <Product key={product.slug} product={product}/>)}
      </div>
    </div>
  );
};

Products.propTypes = {};

export default Products;
