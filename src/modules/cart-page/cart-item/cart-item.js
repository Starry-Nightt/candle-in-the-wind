import React, { useState } from 'react';
import style from './cart-item.module.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { decreaseItemInCart, increaseItemInCart, removeItemInCart } from '~/redux/cart/cart.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { DollarCurrency } from '~/shared/utils/currency';

const cx = classNames.bind(style);

function CartItem({ item }) {
  const { thumbnail, title, description, price, quantity, stock, id, brand } = item;
  const [canShowAlert, setCanShowAlert] = useState(false);
  const navigate = useNavigate();
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

  const onViewItem = () => {
    navigate(`/products/all/${id}`);
  };

  return (
    <div className="row py-3 bg-white">
      <div className="col l-5 m-5 c-5">
        <div className="flex">
          <div className={cx('item-image')} onClick={onViewItem}>
            <img src={thumbnail} alt="" />
          </div>
          <div className={cx('item-info')}>
            <h4 className={cx('item-title')} onClick={onViewItem}>
              {title}
            </h4>
            <p className={cx('item-brand')}>{brand}</p>
            <p className={cx('item-desc')}>{description}</p>
          </div>
        </div>
      </div>
      <div className="col l-2 m-2 c-2 flex align-center justify-center">
        <span className={cx('item-price')}>{DollarCurrency(price)}</span>
      </div>
      <div className="col l-3 m-3 c-3 flex align-center justify-center">
        <div className={cx('quantity')}>
          <div className={cx('quantity-action')}>
            <button onClick={onDecQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncQuantity}>+</button>
          </div>
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
      <div className="col l-2 m-2 c-2 flex align-center justify-center relative">
        <span className={cx('item-price-final')}>{DollarCurrency(price * quantity)}</span>
        <div className={cx('remove-icon')} onClick={() => dispatch(removeItemInCart(id))}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
