import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '~/redux/filter/filter.action';

import styles from './PageNumber.module.scss';

const cx = classNames.bind(styles);

function PageNumber({ children, numberPage, className, noneMargin }) {
  const { currentPage } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <span
      className={cx('number', className, {
        active: numberPage == currentPage,
        noneMargin,
      })}
      onClick={() => {
        if (numberPage) dispatch(setCurrentPage(numberPage));
      }}
    >
      {children}
      {numberPage}
    </span>
  );
}

export default PageNumber;
