import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItemToCart } from '~/redux/cart/cart.action';
import Star from '~/shared/components/star/star';
import { DollarCurrency } from '~/shared/utils/currency';
import style from './product-detail-info.module.scss';

function ProductDetailInfo({ product }) {
  const { title, description, price, discountPercentage, rating, stock, brand, category } = product;
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onIncreaseQuantity = () => {
    setNumber((prev) => prev + 1);
  };
  const onDecreaseQuantity = () => {
    setNumber((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  };

  const onChangeQuantity = (e) => {
    const tmp = Number(e.target.value);
    if (tmp >= stock) setNumber(stock);
    else setNumber(tmp);
  };

  const onAddToCart = () => {
    dispatch(addItemToCart(product, number));
  };

  const onPurchase = () => {
    navigate('/cart-purchase');
  };

  return (
    <div className="text-start">
      <h3 className="section-title my-2 text-primary">{title}</h3>
      <div className="flex align-center">
        <span className="text-lg uppercase font-semibold">{brand}</span>
        <span className="mx-2"></span>
        <span className={`${style.categoryName}`}>{category}</span>
      </div>
      <ul className="my-2 flex align-center">
        <div className={`${style.stars}`}>
          <span className={`${style.rating}`}>{rating}</span>
          <Star active={true} />
          <Star active={true} />
          <Star active={true} />
          <Star active={true} />
          <Star />
        </div>
      </ul>
      <div className={`${style.price}`}>
        <span className={`${style.oldPrice}`}>{DollarCurrency(price)}</span>
        <span className={`${style.salePrice}`}>
          {DollarCurrency(Math.floor((1 - discountPercentage / 100) * price))}
        </span>
        <span className={`${style.sale} text-center`}>{Math.floor(discountPercentage)}% giảm</span>
      </div>
      <div className="my-2">
        <h5 className={`text-primary font-semibold text-xl ${style.title}`}>Mô tả</h5>
        <p className={`${style.desc}`}>{description}</p>
      </div>
      <div className="flex align-center flex-wrap">
        <span className={`text-primary font-semibold text-xl ${style.title}`}>Số lượng: </span>
        <div className={`${style.quantity}`}>
          <button onClick={onDecreaseQuantity}>-</button>
          <input type="number" value={number} onChange={(e) => onChangeQuantity(e)} />
          <button onClick={onIncreaseQuantity}>+</button>
        </div>
        <div className="text-sm">
          Còn:
          <span className="text-xl text-primary font-semibold mx-1">{stock}</span>
          sản phẩm
        </div>
      </div>
      <div className={`${style.action}`}>
        <button className={`${style.btnAdd}`} onClick={onAddToCart}>
          <i className="fa-solid fa-cart-plus"></i>
          <span>Thêm vào giỏ hàng</span>
        </button>
        <button className={`${style.btnBuy}`} onClick={onPurchase}>
          Mua ngay
        </button>
      </div>
    </div>
  );
}

export default ProductDetailInfo;
