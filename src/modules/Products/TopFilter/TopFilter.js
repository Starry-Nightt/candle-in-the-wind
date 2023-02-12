import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';

import Button from '~/shared/components/Button';
import PageNumber from '../PageNumber/PageNumber';
import styles from './TopFilter.module.scss';

const cx = classNames.bind(styles);

function TopFilter({ totalPage, currentPage, setCurrentPage }) {
  const filterList = ['Phổ biến', 'Mới nhất', 'A-Z', 'Z-A'];
  const [primaryBtn, setPrimaryBtn] = useState(filterList[0]);
  const [pageValue, setPageValue] = useState(currentPage);
  const [inputWidth, setInputWidth] = useState(12);

  useEffect(() => {
    setPageValue(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (!Number.isNaN(Number.parseInt(pageValue))) setCurrentPage(Number.parseInt(pageValue));
    if (pageValue.length > 0) setInputWidth(12 + 9 * (pageValue.length - 1));
  }, [pageValue]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('filter')}>
        <span className={cx('label')}>Sắp xếp theo</span>
        {filterList.map((filter, index) => (
          <Button
            key={index}
            className={cx({
              primary: filter === primaryBtn,
            })}
            type="pNoneOutline"
            children={filter}
            onClick={() => setPrimaryBtn(filter)}
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
            onClick={() =>
              setCurrentPage((prev) => {
                return prev > 1 ? prev - 1 : prev;
              })
            }
            icon={faCaretLeft}
          />
        </PageNumber>
        <PageNumber noneMargin={true}>
          <FontAwesomeIcon
            onClick={() =>
              setCurrentPage((prev) => {
                return prev < totalPage ? prev + 1 : prev;
              })
            }
            icon={faCaretRight}
          />
        </PageNumber>
      </div>
    </div>
  );
}

export default TopFilter;
