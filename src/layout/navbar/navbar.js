import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '~/assets/images/avatar-default.jpg';
import style from './navbar.module.scss';

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
    <section
      className={`bg-primary text-white text-sm ${style.navbar} ${fixed ? `${style.fixed}` : ''}`}
    >
      <div className="grid wide flex space-between align-center">
        <ul className={`${style.navbarLeft}`}>
          {navLinks &&
            navLinks.length > 0 &&
            navLinks.map((item, index) => {
              return (
                <li key={item.index}>
                  <Link to={item.path}>{item.viewValue}</Link>
                </li>
              );
            })}
        </ul>

        <div className={`${style.navbarRight}`}>
          {loggedIn ? (
            <div className="flex align-center">
              <div className={`${style.avatar}`}>
                <img src={avatar}></img>
              </div>
              <p className={`${style.username}`}>Dang Minh Tien</p>
              <button className="button flat-button" onClick={() => handleLogout()}>
                Đăng xuất
              </button>
            </div>
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
