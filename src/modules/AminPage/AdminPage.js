import Sidebar from './components/Sidebar/Sidebar';
import style from './AdminPage.module.scss';
import classNames from 'classnames/bind';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function AdminPage() {
  const menu = [
    {
      label: 'Quản lý sản phẩm',
      path: '/admin/product',
      subMenu: [
        { label: 'Danh sách sản phẩm', path: '/admin/product/view' },
        { label: 'Thêm sản phẩm', path: '/admin/product/add' },
      ],
    },
    {
      label: 'Quản lý mã giảm giá',
      path: '/admin/voucher',
      subMenu: [
        { label: 'Danh sách mã giảm giá', path: '/admin/voucher/view' },
        { label: 'Thêm mã giảm giá', path: '/admin/voucher/add' },
      ],
    },
    {
      label: 'Quản lý diễn đàn',
      path: '/admin/forum',
      subMenu: [{ label: 'Danh sách sản phẩm', path: '/admin/forum' }],
    },
    {
      label: 'Quản lý đơn hàng',
      path: '/admin/order',
      subMenu: [
        { label: 'Danh sách đơn hàng', path: '/admin/order/view' },
        { label: 'Tạo đơn hàng', path: '/admin/order/add' },
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faEye} />,
      label: 'Giao diện người dùng',
      path: '/admin/user',
    },
  ];

  const [active, setActive] = useState(menu[0]);

  return (
    <div className={cx('flex')}>
      <Sidebar menu={menu} setActive={setActive} />
      <div className={cx('wrapper')}>
        <Header active={active} />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPage;
