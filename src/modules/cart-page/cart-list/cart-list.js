import React from 'react';
import style from './cart-list.module.scss';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import CartItem from '../cart-item/cart-item';

const cx = classNames.bind(style);

function CartList() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <div className="row bg-light-primary py-2 px-2 text-start text-primary font-semibold uppercase font-xl">
        <div className="col l-5 m-5 c-5">
          <span>Sản phẩm</span>
        </div>
        <div className="col l-2 m-2 c-2 text-center">
          <span>Giá</span>
        </div>
        <div className="col l-3 m-3 c-3 text-center">
          <span>Số lượng</span>
        </div>
        <div className="col l-2 m-2 c-2 text-center">
          <span>Tổng giá</span>
        </div>
      </div>
      {cartItems &&
        cartItems.length > 0 &&
        cartItems.map((item) => {
          return (
            <div key={item.id} className={cx('item-wrapper')}>
              <CartItem item={item} />
            </div>
          );
        })}
    </>
  );
}

export default CartList;
