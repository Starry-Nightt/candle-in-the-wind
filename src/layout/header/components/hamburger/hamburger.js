import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showSidebar } from '~/redux/sidebar/sidebar.action';
import MenuList from '../menuList/menuList';
import style from './hamburger.module.scss';

function Hamburger() {
  const dispatch = useDispatch();

  const openSidebar = () => {
    dispatch(showSidebar(<MenuList />));
  };

  return (
    <div className={`${style.hamburger}`} onClick={openSidebar}>
      <div className={`${style.hamburgerBar}`}></div>
    </div>
  );
}

export default Hamburger;
