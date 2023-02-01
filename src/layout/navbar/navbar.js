import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '~/assets/images/avatar-default.jpg';
import style from './navbar.module.scss';
import User from './components/user/user';
import { showLayer } from '~/redux/layer/layer.action';
import Auth from '~/modules/auth/auth';
import Modal from '~/modules/modal/modal';
import { connect, useDispatch } from 'react-redux';
import { openModal } from '~/redux/modal/modal.action';
import { logout } from '~/redux/user-profile/user-profile.thunk';

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
  const { user, openModal, isLoggedIn } = props;

  console.log('Logged in: ', isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  const onLogin = () => {
    openModal(<Auth />);
  };

  const onRegister = () => {
    openModal(<Auth />);
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
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userProfile.user,
    isLoggedIn: state.userProfile.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (component) => {
      dispatch(showLayer(<Modal />));
      dispatch(openModal(component));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
