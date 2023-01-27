import React from 'react';
import Navbar from '../navbar/navbar';
import style from './header.module.scss';

import HeaderWrapper from './headerWrapper/headerWrapper';

function Header() {
  return (
    <header>
      <Navbar />
      <HeaderWrapper />
    </header>
  );
}

export default Header;
