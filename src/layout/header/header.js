import React from 'react';
import style from './header.module.scss';
import Navbar from './components/navbar/navbar';
import Ads from './components/ads/ads';
import SearchBox from './components/searchBox/searchBox';
import Cart from './components/cart/cart';
import Category from './components/category/category';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const userProfile = useSelector((state) => state.userProfile);
  const { isLoggedIn } = userProfile;

  return (
    <header>
      <Navbar />
      <section className="bg-white">
        <div className="grid wide">
          <Link to="/home" className={`${style.logo}`}>
            Candle In The Wind
          </Link>
          <div className="row">
            <SearchBox />
            {isLoggedIn && <Cart />}
          </div>
          <Category />
        </div>
        <Ads />
      </section>
    </header>
  );
}

export default Header;
