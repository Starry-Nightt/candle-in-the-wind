import React from 'react';
import style from './category.module.scss';
import { NavLink } from 'react-router-dom';

export const categoryList = [
  {
    path: '/products/all',
    viewValue: 'Tất cả',
  },
  {
    path: '/products/oil',
    viewValue: 'Tinh dầu',
  },
  {
    path: '/products/candle',
    viewValue: 'Nến',
  },
  {
    path: '/products/wax',
    viewValue: 'Sáp thơm',
  },
  {
    path: '/products/decorate',
    viewValue: 'Trang trí',
  },
  {
    path: '/products/accessory',
    viewValue: 'Phụ kiện',
  },
];

function Category() {
  return (
    <ul className="flex flex-wrap my-1">
      {categoryList.map((item, index) => {
        return (
          <li className={`${style.navLink}`} key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : undefined)}
              to={item.path}
            >
              {item.viewValue}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Category;
