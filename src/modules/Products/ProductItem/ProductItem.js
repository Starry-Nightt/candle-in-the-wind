import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ data }) {
  return (
    <div className={cx('column')}>
      <div className={cx('wrapper')}>
        <Link>
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
          <span className={cx('prize')}>{data.price}.000đ</span>
          <span className={cx('add')}>Add to cart</span>
        </div>

        <div className={cx('sale')}>20% off</div>
      </div>
    </div>
  );
}

export default ProductItem;
