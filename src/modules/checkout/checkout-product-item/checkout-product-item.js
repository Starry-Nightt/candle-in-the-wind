import React from 'react';
import style from './checkout-product-item.module.scss';
import classNames from 'classnames/bind';
import { DollarCurrency } from '~/shared/utils/currency';

const cx = classNames.bind(style);

function CheckoutProductItem({ data }) {
  const { thumbnail, title, price, quantity, brand } = data;
  return (
    <div className="flex py-2">
      <div className={cx('item-image')}>
        <img src={thumbnail} alt="" />
      </div>
      <div className={cx('item-info')}>
        <h5 className={cx('item-title')}>{title}</h5>
        <p className={cx('item-brand')}>{brand}</p>
        <p className={cx('item-price')}>{DollarCurrency(price)}</p>
      </div>
      <div className={cx('item-quantity')}>
        <p>Số lượng: {quantity}</p>
      </div>
    </div>
  );
}

export default CheckoutProductItem;
