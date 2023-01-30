import React from 'react';
import Navbar from '../navbar/navbar';
import style from './header.module.scss';
import Ads from './components/ads/ads';
import SearchBox from './components/searchBox/searchBox';
import Cart from './components/cart/cart';
import Category from './components/category/category';

function Header() {
  return (
    <header>
      <Navbar />
      <section className="bg-white">
        <div className="grid wide">
          <h1 className={`${style.logo}`}>Candle In The Wind</h1>
          <div className="row">
            <SearchBox />
            <Cart />
          </div>
          <Category />
        </div>
        <Ads />
      </section>
    </header>
  );
}

export default Header;
