import React from 'react';

import logo from "../../assets/img/Logo.png";

function Header() {
  return (
    <header className="app__header">
      <img src={logo} className="app__logo" alt="logo" />
    </header>
  );
}

export default Header;