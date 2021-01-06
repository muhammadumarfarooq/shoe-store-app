import React from 'react';
import './styles/cart-btn.scss';
import cartIcon from '../assets/cart-icon.svg';

interface Props {
  count: number
}

const CartBtn: React.FC<Props> = ({ count }) => {
  
  return (
    <div className="simple-cart-wrapper">
      <div className="cart--icon-wrapper">
        <img className="cart--icon" src={cartIcon} alt={"cart"}/>
        <div className="cart-count">{count}</div>
      </div>
      <p className="cart-icon--text">Cart</p>
    </div>
  );
};

CartBtn.propTypes = {};

export default CartBtn;
