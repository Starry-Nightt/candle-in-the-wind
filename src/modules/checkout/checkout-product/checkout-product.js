import React, { useMemo } from 'react';
import style from './checkout-product.module.scss';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import CheckoutProductItem from '../checkout-product-item/checkout-product-item';
import { DollarCurrency } from '~/shared/utils/currency';

const cx = classNames.bind(style);

function CheckoutProduct({ children }) {
  const { items } = useSelector((state) => state.checkout);

  const subTotal = useMemo(() => {
    let tmp = 0;
    if (items && items.length > 0)
      tmp = items.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
    return tmp;
  });

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
        <div className="py-3 px-3">
          <div className={cx('summary')}>
            <span className={cx('title')}>Subtotal: </span>
            <span className={cx('price')}>{DollarCurrency(subTotal)}</span>
          </div>
          <div className={cx('summary')}>
            <span className={cx('title')}>Discount: </span>
            <span className={cx('price')}>{DollarCurrency(0)}</span>
          </div>
          <div className={cx('summary')}>
            <span className={cx('title')}>Total (USD): </span>
            <span className={cx('price')}>{DollarCurrency(subTotal)}</span>
          </div>
        </div>
        <div className="py-5 px-5">{children}</div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
