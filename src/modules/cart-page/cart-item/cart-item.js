import React, { useState } from 'react';
import style from './cart-item.module.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { decreaseItemInCart, increaseItemInCart } from '~/redux/cart/cart.action';

const cx = classNames.bind(style);

function CartItem({ item }) {
  const { thumbnail, title, description, price, quantity, stock, id } = item;
  const [canShowAlert, setCanShowAlert] = useState(false);

  const dispatch = useDispatch();

  const onIncQuantity = () => {
    if (quantity < stock) {
      dispatch(increaseItemInCart(id));
    } else setCanShowAlert(true);
  };

  const onDecQuantity = () => {
    if (quantity > 0) {
      dispatch(decreaseItemInCart(id));
    }
    if (canShowAlert) setCanShowAlert(false);
  };

  const onChangeQuantity = (event) => {
    const value = Number(event.target.value);
    if (value < 0) return;
    if (value > stock) {
      setCanShowAlert(true);
    } else {
      if (canShowAlert) setCanShowAlert(false);
    }
  };

  return (
    <div className="row py-3">
      <div className="col l-5 m-5 c-5">
        <div className="flex">
          <div className={cx('item-image')}>
            <img src={thumbnail} alt="" />
          </div>
          <div className={cx('item-info')}>
            <h4 className={cx('item-title')}>{title}</h4>
            <p className={cx('item-desc')}>{description}</p>
          </div>
        </div>
      </div>
      <div className="col l-2 m-2 c-2 flex align-center justify-center">
        <span className={cx('item-price')}>{price}.000 VNĐ</span>
      </div>
      <div className="col l-3 m-3 c-3 flex align-center justify-center">
        <div className={cx('quantity')}>
          <button onClick={onDecQuantity}>-</button>
          <input type="number" value={quantity} onChange={(e) => onChangeQuantity(e)} />
          <button onClick={onIncQuantity}>+</button>
          <div className="text-center">
            {canShowAlert ? (
              <p
                className="text-error text-xs font-semibold"
                style={{ transform: 'translateY(6px)' }}
              >
                Còn {stock} sản phẩm
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="col l-2 m-2 c-2 flex align-center justify-center">
        <span className={cx('item-price-final')}>{price * quantity}.000 VNĐ</span>
      </div>
    </div>
  );
}

export default CartItem;
