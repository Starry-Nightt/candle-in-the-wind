import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './searchBox.module.scss';
import { categoryList } from '../category/category';

const cx = classNames.bind(styles);

function SearchBox() {
  const [currentOption, setCurrentOption] = useState('Tất cả');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrap-input')}>
        <input
          value={searchValue}
          className={cx('search-input')}
          placeholder="Nhập mã sản phẩm hoặc tên sản phẩm để tìm kiếm..."
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </div>

      <Tippy
        appendTo={() => document.body}
        interactive
        delay={[0, 500]}
        render={(attrs) => (
          <div tabIndex="-1" {...attrs} className={cx('options')}>
            {categoryList.map((category, index) => {
              return (
                <div
                  className={cx('item')}
                  key={index}
                  onClick={() => setCurrentOption(category.viewValue)}
                >
                  <span>{category.viewValue}</span>
                  {category.viewValue === currentOption ? (
                    <FontAwesomeIcon className={cx('check')} icon={faCheck} />
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      >
        <div className={cx('wrap-option')}>
          <span className={cx('current-option')}>{currentOption}</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </Tippy>

      <button className={cx('search-btn')}>
        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default SearchBox;
