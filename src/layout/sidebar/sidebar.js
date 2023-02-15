import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unShowSidebar } from '~/redux/sidebar/sidebar.action';
import style from './sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const { component } = sidebar;

  const closeSidebar = () => {
    dispatch(unShowSidebar());
  };

  return (
    <div className={`${style.sidebar}`}>
      <h3 className={`${style.sidebarTitle}`}>Menu</h3>
      <button className={`${style.sidebarCloseButton}`} onClick={closeSidebar}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      {component}
    </div>
  );
}

export default Sidebar;
