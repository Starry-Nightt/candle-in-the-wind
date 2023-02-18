import React, { useEffect, useState } from 'react';
import style from './category.module.scss';
import { NavLink } from 'react-router-dom';
import productService from '~/shared/services/product.service';

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
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    productService.getAllCategory().then((res) => {
      setCategories(res.data.categories);
    });
  }, []);
  return (
    <ul className="flex flex-wrap my-1">
      <li className={`${style.navLink}`}>
        <NavLink
          className={({ isActive }) => (isActive ? style.active : undefined)}
          to={`products/category/all`}
        >
          Tất cả
        </NavLink>
      </li>
      {categories &&
        categories.length > 0 &&
        categories.map((item, index) => {
          return (
            <li className={`${style.navLink}`} key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? style.active : undefined)}
                to={`products/category/${item.ID_Category}`}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
}

export default Category;
