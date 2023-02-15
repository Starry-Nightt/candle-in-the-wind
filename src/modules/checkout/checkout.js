import React from 'react';
import style from './checkout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Checkout({ items }) {
  console.log(items);
  return (
    <div className="row">
      <div className="col l-6 m-6 c-12">
        <div className={cx('delivery-information')}></div>
      </div>
      <div className="col l-6 m-6 c-12">
        <div className={cx('order-summary')}></div>
      </div>
    </div>
  );
}

export default Checkout;
