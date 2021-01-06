import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/nike-logo.png';
import './styles/navbar.scss';
import CartBtn from "./CartBtn";

const Navbar: React.FC = () => {
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
        <CartBtn/>
      </div>
    </div>
  );
}

export default Navbar;
