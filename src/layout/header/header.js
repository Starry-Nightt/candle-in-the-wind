import React from 'react';
import style from './header.module.scss';
import Navbar from './components/navbar/navbar';
import Ads from './components/ads/ads';
import SearchBox from './components/searchBox/searchBox';
import Cart from './components/cart/cart';
import Category from './components/category/category';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Navbar />
      <section className="bg-white">
        <div className="grid wide">
          <Link to="/home" className={`${style.logo}`}>
            Candle In The Wind
          </Link>
          <div className="row">
            <div className="col l-o-2 l-8  m-10 c-10">
              <SearchBox />
            </div>
            <div className="col l-2 m-2 c-2">
              <Cart />
            </div>
          </div>
          <div className="row">
            <div className="col l-o-2 l-10 m-12 c-12 ">
              <Category />
            </div>
          </div>
        </div>
        <Ads />
      </section>
    </header>
  );
}

export default Header;
