import React, { useState } from 'react';
import style from './cart-item.module.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { decreaseItemInCart, increaseItemInCart, removeItemInCart } from '~/redux/cart/cart.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { VNDCurrency } from '~/shared/utils/currency';

const cx = classNames.bind(style);

function CartItem({ item }) {
  const { title, description, price, quantity, ID_Product, discount } = item;
  const [canShowAlert, setCanShowAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onIncQuantity = () => {
    dispatch(increaseItemInCart(ID_Product));
  };

  const onDecQuantity = () => {
    if (quantity > 0) {
      dispatch(decreaseItemInCart(ID_Product));
    }
    if (canShowAlert) setCanShowAlert(false);
  };

  const onViewItem = () => {
    navigate(`/products/all/${ID_Product}`);
  };

  return (
    <div className="row py-3 bg-white relative">
      <div className="col l-5 m-5 c-5">
        <div className="flex">
          <div className={cx('item-image')} onClick={onViewItem}>
            <img src={item?.Images?.[0]?.content} alt="" />
          </div>
          <div className={cx('item-info')}>
            <h4 className={cx('item-title')} onClick={onViewItem}>
              {title}
            </h4>
            <p className={cx('item-desc')}>{description}</p>
          </div>
        </div>
      </div>
      <div className="col l-2 m-2 c-2 ">
        <div className="flex align-center justify-center text-center full-height">
          <span className={cx('item-price')}>{VNDCurrency(price - discount)}</span>
        </div>
      </div>
      <div className="col l-3 m-3 c-3 flex align-center justify-center">
        <div className={cx('quantity')}>
          <div className={cx('quantity-action')}>
            <button onClick={onDecQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncQuantity}>+</button>
          </div>
        </div>
      </div>
      <div className="col l-2 m-2 c-2 ">
        <div className="flex align-center justify-center text-center full-height">
          <span className={cx('item-price-final')}>
            {VNDCurrency((price - discount) * quantity)}
          </span>
          <div className={cx('remove-icon')} onClick={() => dispatch(removeItemInCart(ID_Product))}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
