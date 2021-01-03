import React from 'react';
import logo from '../assets/nike-logo.png';
import './styles/navbar.scss';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="nike" className="navbar--logo"/>
      <ul className="navbar--links">
        <li>New Releases</li>
        <li>Men</li>
        <li>Woman</li>
        <li>Kids</li>
      </ul>
    </div>
  );
}

export default Navbar;
