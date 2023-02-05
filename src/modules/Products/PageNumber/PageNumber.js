import classNames from 'classnames/bind';

import styles from './PageNumber.module.scss';

const cx = classNames.bind(styles);

function PageNumber({ children, currentPage, onClick }) {
  return (
    <span
      className={cx('number', {
        active: children == currentPage,
      })}
      onClick={onClick}
    >
      {children}
    </span>
  );
}

export default PageNumber;
