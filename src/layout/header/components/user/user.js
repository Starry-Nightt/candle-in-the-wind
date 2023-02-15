import React from 'react';
import style from './user.module.scss';

function User({ user }) {
  return (
    <div className="flex align-center">
      <div className={`${style.avatar}`}>
        <img src={user.avatar} alt=""></img>
      </div>
      <p className={`${style.username}`}>{user.username}</p>
    </div>
  );
}

export default User;
