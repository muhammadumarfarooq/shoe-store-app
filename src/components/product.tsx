import React from 'react';
import ProductTextBox from "./ProductTextBox";
import './styles/product.scss';

interface Props {
  product: Product
}

const BlogSingle: React.FC<Props> = ({ product }) => {
  const {
    price,
    name,
    detail,
    review,
    image,
    slug
  } = product;
  
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 product--container">
      
      <div className="product--wrapper">
        <div className="product--img-wrapper">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="product--img-box"/>
        </div>
        
        <div className="product-text-wrapper">
          <ProductTextBox
            slug={slug}
            name={name}
            detail={`${detail.slice(0, 120)}...`}
            review={review}
            price={price}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
