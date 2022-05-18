import React from 'react';
import style from './styles.css';
import logo from './logo.svg';

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" id="logo"/>
    </nav>
  );
};

export default NavBar;