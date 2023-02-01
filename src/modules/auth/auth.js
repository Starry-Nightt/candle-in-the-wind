import React, { useState } from 'react';
import style from './auth.module.scss';
import Login from './components/login/login';
import Register from './components/register/register';

const tabs = {
  login: 1,
  register: 2,
};

const tabsView = {
  login: <Login />,
  register: <Register />,
};

function Auth() {
  const [tab, setTab] = useState(tabs.login);
  const [tabView, setTabView] = useState(tabsView.login);

  const openLoginTab = () => {
    setTab(tabs.login);
    setTabView(tabsView.login);
  };

  const openRegisterTab = () => {
    setTab(tabs.register);
    setTabView(tabsView.register);
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex">
        <div
          className={`${style.tab} ${tab === tabs.login ? style.active : ''}`}
          onClick={openLoginTab}
        >
          <span>Đăng nhập</span>
        </div>
        <div
          className={`${style.tab} ${tab === tabs.register ? style.active : ''}`}
          onClick={openRegisterTab}
        >
          <span>Đăng ký</span>
        </div>
      </div>
      {/* Modal body */}
      <div className={`${style.form}`}>
        {tabView}
        <p className={`${style.alert}`}>
          Bằng việc chọn tiếp tục, bạn đã đồng ý với <span>Điều khoản & Điều kiện</span> cùng{' '}
          <span>Chính sách bảo mật và chia sẻ thông tin</span> của Candle In The Wind
        </p>
      </div>
    </div>
  );
}

export default Auth;
