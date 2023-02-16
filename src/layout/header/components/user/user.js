import React from 'react';
import style from './user.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '~/redux/user-profile/user-profile.thunk';

function User({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuItem = [
    {
      value: 'Xem thông tin tài khoản',
      handleClick() {
        navigate('/profile');
      },
    },
    {
      value: 'Đổi mật khẩu',
      handleClick() {
        navigate('/reset-password');
      },
    },
  ];
  return (
    <Tippy
      appendTo={() => document.body}
      interactive
      delay={[0, 400]}
      offset={[-50, 5]}
      render={(attrs) => (
        <div tabIndex="-1" {...attrs} className={`${style.options}`}>
          {menuItem.map((item, index) => {
            return (
              <div className={`${style.item}`} key={index} onClick={item.handleClick}>
                <span>{item.value}</span>
              </div>
            );
          })}
        </div>
      )}
      hideOnClick={false}
    >
      <div className="flex align-center">
        <div className={`${style.avatar}`}>
          <img src={user.avatar} alt=""></img>
        </div>
        <p className={`${style.username}`}>{user.username}</p>
      </div>
    </Tippy>
  );
}

export default User;
