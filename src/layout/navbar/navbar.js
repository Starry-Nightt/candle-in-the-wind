import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '~/assets/images/avatar-default.jpg';
import style from './navbar.module.scss';
import User from './components/user/user';

function Navbar() {
  const navLinks = [
    {
      path: 'home',
      viewValue: 'Trang chủ',
    },
    {
      path: 'forum',
      viewValue: 'Diễn đàn trao đổi',
    },
  ];
  const [loggedIn, setLoggedIn] = useState(false);
  const [fixed, setFixed] = useState(false);

  const user = {
    username: 'Dang Minh Tien',
    avatar,
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) setFixed(true);
      else setFixed(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`${style.navbar} ${fixed ? `${style.fixed}` : ''}`}>
      <div className="grid wide flex space-between align-center">
        <ul className={`${style.navbarLinks}`}>
          {navLinks &&
            navLinks.length > 0 &&
            navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.viewValue}</Link>
                </li>
              );
            })}
        </ul>
        <div className={`${style.navbarAuth}`}>
          {loggedIn ? (
            <>
              <User user={user} />
              <button className="button flat-button" onClick={() => handleLogout()}>
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <button className="button primary-button" onClick={() => handleLogin()}>
                Đăng nhập
              </button>
              <button className="button flat-button">Đăng ký</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Navbar;
