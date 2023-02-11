import classNames from 'classnames/bind';
import Button from '~/shared/components/Button';

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
        <Button type='primary' size='large' children={'Áp dụng'}/>
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

      <Button type='primary' size='large' children={'Xoá tất cả'}/>
    </div>
  );
}

export default Filter;
