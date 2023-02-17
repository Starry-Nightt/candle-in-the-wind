import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCart } from '~/redux/cart/cart.action';
import { DollarCurrency, VNDCurrency } from '~/shared/utils/currency';

import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ data, pathname }) {
  const dispatch = useDispatch();

  const onAddItemToCart = (item) => {
    dispatch(addItemToCart(item));
  };
  return (
    <div className={cx('col l-2-4 m-4 c-4')}>
      <div className={cx('wrapper')}>
        <div className={cx('item')}>
          <Link to={`${pathname}/${data.ID_Product}`}>
            <div
              className={cx('image')}
              style={{
                backgroundImage: `url(${data.thumbnail})`,
              }}
            ></div>
            <div className={cx('info')}>
              <Tippy content={data.title}>
                <h4 className={cx('name')}>{data.title}</h4>
              </Tippy>
              <Tippy content={data.description}>
                <p className={cx('description')}>{data.description}</p>
              </Tippy>
            </div>
          </Link>

          <div className={cx('bottom')}>
            <span className={cx('prize')}>{VNDCurrency(data.price)}</span>
            <span className={cx('add')} onClick={() => onAddItemToCart(data)}>
              Thêm vào
            </span>
          </div>

          <div className={cx('sale')}>{VNDCurrency(data.discount)} giảm</div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
