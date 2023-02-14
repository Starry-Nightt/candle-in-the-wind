import style from './ProductManage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function ProductManage() {
  return <div className={cx('wrapper')}>ProductManage</div>;
}

export default ProductManage;
