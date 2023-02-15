import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';

import Button from '~/shared/components/Button';
import PageNumber from '../PageNumber/PageNumber';
import styles from './TopFilter.module.scss';
import sortFilterList from './sortFilterList';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setSortFilter } from '~/redux/filter/filter.action';

const cx = classNames.bind(styles);

function TopFilter() {
  const { sortFilter, totalPage, currentPage } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [pageValue, setPageValue] = useState(currentPage);
  const [inputWidth, setInputWidth] = useState(12);
  useEffect(() => {
    setPageValue(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (!Number.isNaN(Number.parseInt(pageValue)))
      dispatch(setCurrentPage(Number.parseInt(pageValue)));
    if (pageValue.length > 0) setInputWidth(12 + 9 * (pageValue.length - 1));
  }, [pageValue]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('filter')}>
        <span className={cx('label')}>Sắp xếp theo</span>
        {sortFilterList.map((filter, index) => (
          <Button
            key={index}
            className={cx({
              primary: filter === sortFilter,
            })}
            type="pNoneOutline"
            children={filter.label}
            onClick={() => dispatch(setSortFilter(filter))}
          />
        ))}
      </div>

      <div className={cx('page')}>
        <span className={cx('page-label')}>
          Trang{' '}
          <input
            className={cx('page-input')}
            value={pageValue}
            style={{ width: inputWidth }}
            onChange={(e) => {
              let tmp = e.target.value;
              let lastChar = tmp[tmp.length - 1];
              if (
                tmp === '' ||
                (tmp[0] !== '0' &&
                  lastChar <= '9' &&
                  lastChar >= '0' &&
                  Number.parseInt(tmp) <= totalPage)
              )
                setPageValue(tmp);
            }}
          />
          / {totalPage}
        </span>
        <PageNumber noneMargin={true}>
          <FontAwesomeIcon
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            icon={faCaretLeft}
          />
        </PageNumber>
        <PageNumber noneMargin={true}>
          <FontAwesomeIcon
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            icon={faCaretRight}
          />
        </PageNumber>
      </div>
    </div>
  );
}

export default TopFilter;
