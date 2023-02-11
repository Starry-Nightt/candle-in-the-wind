import classNames from 'classnames/bind';

import styles from './PageNumber.module.scss';

const cx = classNames.bind(styles);

function PageNumber({ children, currentPage, onClick, className, noneMargin }) {
  return (
    <span
      className={cx('number', className, {
        active: children == currentPage,
        noneMargin,
      })}
      onClick={onClick}
    >
      {children}
    </span>
  );
}

export default PageNumber;
