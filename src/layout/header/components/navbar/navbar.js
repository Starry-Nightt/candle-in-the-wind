import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '~/assets/images/avatar-default.jpg';
import style from './navbar.module.scss';
import User from '../user/user';
import { connect, useDispatch } from 'react-redux';
import { logout } from '~/redux/user-profile/user-profile.thunk';
import Hamburger from '../hamburger/hamburger';

function Navbar(props) {
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
  const dispatch = useDispatch();
  const { user } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  const onLogin = () => {
    navigate('/login');
  };

  const onRegister = () => {
    navigate('/register');
  };

  useEffect(() => {
    if (user) setLoggedIn(true);
    else setLoggedIn(false);
  }, [user]);

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
      <div className="grid wide ">
        <div className="hide-on-mobile flex space-between align-center">
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
                <User user={{ ...user, avatar }} />
                <button className="button flat-button" onClick={() => handleLogout()}>
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <button className="button primary-button" onClick={() => onLogin()}>
                  Đăng nhập
                </button>
                <button className="button flat-button" onClick={() => onRegister()}>
                  Đăng ký
                </button>
              </>
            )}
          </div>
        </div>
        <div className="hide-on-tablet hide-on-pc py-1">
          <div className={`flex ${loggedIn === true ? 'space-between' : 'justify-end'}`}>
            {loggedIn && <User user={{ ...user, avatar }} />}
            <Hamburger />
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userProfile.user,
    isLoggedIn: state.userProfile.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(Navbar);
