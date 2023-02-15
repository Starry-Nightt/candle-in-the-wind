import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unShowSidebar } from '~/redux/sidebar/sidebar.action';
import { logout } from '~/redux/user-profile/user-profile.thunk';
import style from './menuList.module.scss';

function MenuList() {
  const navLinks = [
    {
      path: 'home',
      viewValue: 'Trang chủ',
    },
    {
      path: 'forum',
      viewValue: 'Diễn đàn trao đổi',
    },
    {
      path: 'products/all',
      viewValue: 'Shop now',
    },
  ];
  const userProfile = useSelector((state) => state.userProfile);
  const { isLoggedIn } = userProfile;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickMenuItem = (path) => {
    dispatch(unShowSidebar());
    navigate(path);
  };

  const onLogout = () => {
    dispatch(unShowSidebar());
    dispatch(logout());
  };

  return (
    <div className={`${style.menuList}`}>
      <ul className={`${style.list}`}>
        {navLinks &&
          navLinks.length > 0 &&
          navLinks.map((item, index) => {
            return (
              <li
                key={index}
                className={`${style.item}`}
                onClick={() => onClickMenuItem(item.path)}
              >
                {item.viewValue}
              </li>
            );
          })}
        {isLoggedIn ? (
          <li className={`${style.item}`} onClick={() => onLogout()}>
            Đăng xuất
          </li>
        ) : (
          <>
            <li className={`${style.item}`} onClick={() => onClickMenuItem('login')}>
              Đăng nhập
            </li>
            <li className={`${style.item}`} onClick={() => onClickMenuItem('register')}>
              Đăng ký
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default MenuList;
