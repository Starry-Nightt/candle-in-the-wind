import classNames from 'classnames/bind';

import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

function Filter() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('price', 'filter')}>
        <h4>Mức giá</h4>
        <div className={cx('input')}>
          <input type={'number'} placeholder="từ ...đ" /> -
          <input type={'number'} placeholder="đến ...đ" />
        </div>
        <button>Áp dụng</button>
      </div>

      <div className={cx('size', 'filter')}>
        <h4>Kích cỡ</h4>
        <div className={cx('checkbox')}>
          <input id="small" name="size" type={'checkbox'} value="small" />{' '}
          <label htmlFor="small">Nhỏ</label>
        </div>
        <div className={cx('checkbox')}>
          <input id="medium" name="size" type={'checkbox'} value="medium" />{' '}
          <label htmlFor="medium">Vừa</label>
        </div>
        <div className={cx('checkbox')}>
          <input id="large" name="size" type={'checkbox'} value="large" />{' '}
          <label htmlFor="large">Lớn</label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
