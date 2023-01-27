import React from 'react';
import style from './category.module.scss';
import { NavLink } from 'react-router-dom';

function Category() {
  const category = [
    {
      path: 'products',
      viewValue: 'Tinh dầu',
    },
    {
      path: 'productx',
      viewValue: 'Nến',
    },
    {
      path: 'producty',
      viewValue: 'Sáp thơm',
    },
    {
      path: 'productz',
      viewValue: 'Trang trí',
    },
    {
      path: 'productt',
      viewValue: 'Phụ kiện',
    },
  ];

  return (
    <div className="row">
      <ul className="col l-o-2 flex">
        {category &&
          category.length > 0 &&
          category.map((item, index) => {
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
    </div>
  );
}

export default Category;
