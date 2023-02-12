import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/shared/components/Button';

import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

function Filter({ setPriceRange }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  return (
    <div className={cx('wrapper')}>
      <div className={cx('price', 'filter')}>
        <h4>Khoảng giá</h4>
        <div className={cx('input')}>
          <input
            maxLength={7}
            value={from}
            placeholder="từ...000đ"
            onChange={(e) => {
              let tmp = e.target.value;
              let lastChar = tmp[tmp.length - 1];
              if (tmp === '' || (tmp[0] !== '0' && lastChar <= '9' && lastChar >= '0'))
                setFrom(tmp);
            }}
          />{' '}
          -
          <input
            maxLength={7}
            value={to}
            placeholder="đến...000đ"
            onChange={(e) => {
              let tmp = e.target.value;
              let lastChar = tmp[tmp.length - 1];
              if (tmp === '' || (tmp[0] !== '0' && lastChar <= '9' && lastChar >= '0')) setTo(tmp);
            }}
          />
        </div>
        <Button
          type="primary"
          size="large"
          children={'Áp dụng'}
          onClick={() => {
            setPriceRange({ from, to });
          }}
        />
      </div>

      {/* <div className={cx('size', 'filter')}>
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
      </div> */}

      <Button
        type="primary"
        size="large"
        children={'Xóa bộ lọc'}
        onClick={() => {
          setFrom('');
          setTo('');
          setPriceRange({ from: '', to: '' });
        }}
      />
    </div>
  );
}

export default Filter;
