import classNames from 'classnames/bind';
import NotFoundImage from '~/assets/images/not-found.png';
import styles from './NotFoundProduct.module.scss';

const cx = classNames.bind(styles);

function NotFoundProduct() {
  return (
    <div className={cx('wrapper')}>
      <img src={NotFoundImage} className={cx('img')} />
      <div className={cx('label')}>Không tìm thấy kết quả nào</div>
    </div>
  );
}

export default NotFoundProduct;
