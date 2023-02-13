import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ data, pathname }) {
  return (
    <div className={cx('col l-2-4 m-4 c-4')}>
      <div className={cx('wrapper')}>
        <Link to={`${pathname}/${data.id}`}>
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
          <span className={cx('add')}>Thêm vào</span>
        </div>

        <div className={cx('sale')}>{Math.floor(data.discountPercentage)}% giảm</div>
      </div>
    </div>
  );
}

export default ProductItem;