import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/nike-logo.png';
import './styles/navbar.scss';
import CartBtn from "./CartBtn";

interface Props {
  cart: Cart
}

const Navbar: React.FC<Props> = ({ cart }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="nike" className="navbar--logo"/>
      </Link>
      <div className="right-items--icon">
        <ul className="navbar--links">
          <li>New Releases</li>
          <li>Men</li>
          <li>Woman</li>
          <li>Kids</li>
        </ul>
        <CartBtn count={cart.items.length}/>
      </div>
    </div>
  );
}

export default Navbar;
