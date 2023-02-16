import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './searchBox.module.scss';
import { categoryList } from '../category/category';
import { useLocation, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function SearchBox() {
  const [currentOption, setCurrentOption] = useState(categoryList[0]);
  const [searchValue, setSearchValue] = useState('');
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    let notChange = true;
    categoryList.forEach((item) => {
      if (item.path === currentPath) {
        notChange = false;
        setCurrentOption(item);
      }
    });
    if (notChange) setCurrentOption(categoryList[0]);
  }, [currentPath]);

  const onSearch = () => {
    setSearchValue('');
    navigate(`${currentOption.path}?search=${searchValue}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrap-input')}>
        <input
          name="search"
          value={searchValue}
          className={cx('search-input')}
          placeholder="Nhập mã sản phẩm hoặc tên sản phẩm để tìm kiếm..."
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>

      <Tippy
        appendTo={() => document.body}
        interactive
        delay={[0, 500]}
        render={(attrs) => (
          <div tabIndex="-1" {...attrs} className={cx('options')}>
            {categoryList.map((category, index) => {
              return (
                <div className={cx('item')} key={index} onClick={() => setCurrentOption(category)}>
                  <span>{category.viewValue}</span>
                  {category.viewValue === currentOption.viewValue ? (
                    <FontAwesomeIcon className={cx('check')} icon={faCheck} />
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
        hideOnClick={false}
      >
        <div className={cx('wrap-option')}>
          <span className={cx('current-option')}>{currentOption.viewValue}</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </Tippy>

      <button className={cx('search-btn')} onClick={() => onSearch()}>
        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default SearchBox;
