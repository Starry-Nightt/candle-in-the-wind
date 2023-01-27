import React from 'react';
import Ads from '../ads/ads';
import SearchBox from '../searchBox/searchBox';
import style from './headerWrapper.module.scss';
import Cart from '../cart/cart';
import Category from '../category/category';

function HeaderWrapper() {
  return (
    <section className={`${style.wrapper}`}>
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
  );
}

export default HeaderWrapper;
