import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/shared/components/Button';
import PageNumber from '../PageNumber/PageNumber';

import styles from './TopFilter.module.scss';

const cx = classNames.bind(styles);

function TopFilter({ numbersPage, setNumbersPage, currentPage, setCurrentPage }) {
  const filterList = ['Phổ biến', 'Mới nhất', 'A-Z', 'Z-A'];
  const [primaryBtn, setPrimaryBtn] = useState(filterList[0]);
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
          Trang {currentPage}/{numbersPage[4]}
        </span>
        <PageNumber noneMargin={true}>
          <FontAwesomeIcon
            onClick={() =>
              setCurrentPage((prev) => {
                return prev > numbersPage[0] ? prev - 1 : prev;
              })
            }
            icon={faCaretLeft}
          />
        </PageNumber>
        <PageNumber noneMargin={true}>
          <FontAwesomeIcon
            onClick={() =>
              setCurrentPage((prev) => {
                return prev < numbersPage[4] ? prev + 1 : prev;
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
