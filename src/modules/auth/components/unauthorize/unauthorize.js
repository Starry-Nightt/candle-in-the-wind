import React from 'react';
import style from './unauthorize.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Unauthorize() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <h4>401</h4>
        <p>Unauthorize</p>
      </div>
    </div>
  );
}

export default Unauthorize;
