import React from 'react';
import style from './checkout-product.module.scss';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import CheckoutProductItem from '../checkout-product-item/checkout-product-item';

const cx = classNames.bind(style);

function CheckoutProduct({ children }) {
  const { items } = useSelector((state) => state.checkout);

  return (
    <div className={cx('wrapper')}>
      <h2 className="section-title text-xl">Order Summary</h2>
      <div className={cx('body')}>
        <div className="py-3 px-5">
          {items &&
            items.length > 0 &&
            items.map((item, idx) => {
              return <CheckoutProductItem key={idx} data={item} />;
            })}
        </div>
        <div className="py-5 px-5">{children}</div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
