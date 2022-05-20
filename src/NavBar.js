import React from 'react';
import style from './styles.css';
import logo from './logo.svg';

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" id="logo"/>
      <li>
        <a href="#">{"{ about }"}</a>
        <a href="#">{"{ enroll }"}</a>
        <a href="#">{"{ events }"}</a>
      </li>
    </nav>
  );
};

export default NavBar;