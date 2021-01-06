import React from 'react';
import './styles/cart-btn.scss';
import cartIcon from '../assets/cart-icon.svg';

const CartBtn: React.FC = () => {
  
  return (
    <div className="simple-cart-wrapper">
      <div className="cart--icon-wrapper">
        <img className="cart--icon" src={cartIcon} alt={"cart"}/>
        <div className="cart-count">55</div>
      </div>
      <p className="cart-icon--text">Cart</p>
    </div>
  );
};

CartBtn.propTypes = {};

export default CartBtn;
