import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products as allProducts } from '../constants/hardcodedData';
import './styles/product-page.scss';
import Rating from "@material-ui/lab/Rating";

interface paramsObj {
  slug: string
}

type HandleAddToCart = (product: Product) => void;
type HandleRemoveFromCart = (id: string) => void;

interface Props {
  handleAddToCart: HandleAddToCart
  handleRemoveFromCart: HandleRemoveFromCart
  cart: Cart
}

const ProductPage: React.FC<Props> = ({ handleAddToCart, cart, handleRemoveFromCart }) => {
  const [isItemInCart, setItemInCart] = useState(false);
  const [product, setProduct] = useState<Product>({
    name: "",
    detail: "",
    review: 0,
    image: "",
    slug: "",
    price: 0,
  });
  const { slug }: paramsObj = useParams();
  
  useEffect(() => {
    const product: Product | undefined = allProducts.find((data) => data.slug === slug);
    if ( product )
      setProduct(product);
    
    //  eslint-disable-next-line
  }, [])
  
  useEffect(() => {
    const isIteminthecart: Product | undefined = cart.items.find((data) => data.slug === slug);
    if ( isIteminthecart )
      setItemInCart(true)
    else setItemInCart(false)
  }, [cart])
  
  return (
    <div className="product-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="product-page--img" src={product.image} alt="shoe"/>
          </div>
          
          <div className="col-md-6">
            <div className="product-page--text-box">
              <h1 className="product-page--title">{product.name}</h1>
              <div className="product-page--price-review">
                <p className="product-page--price">${product.price}</p>
                <div className="product-page--rating">
                  <Rating name="half-rating-read" value={product.review} precision={0.5} readOnly/>
                </div>
              </div>
              <p className="product-page--detail">{product.detail}</p>
            </div>
            
            <button onClick={() => isItemInCart ? handleRemoveFromCart(product.slug) : handleAddToCart(product)}
                    className="add-to-cart--btn">
              {isItemInCart ? "Remove item from cart" : "Add to cart"}
            </button>
          
          </div>
        
        </div>
      </div>
    </div>
  );
};

ProductPage.propTypes = {};

export default ProductPage;
