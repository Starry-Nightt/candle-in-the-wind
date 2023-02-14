import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './AuthChangePass.module.scss';

function AuthChangePass({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const onChangePasswordTab = () => {
    navigate('/changepassword');
  };

  const isChangePasswordTab = () => {
    return pathname === '/changepassword';
  };

  return (
    <div className={`${style.wrapper}`}>
      {/* Tabs */}
      <div className="flex">
        <div
          className={`${style.tab} ${isChangePasswordTab() ? style.active : ''}`}
          onClick={onChangePasswordTab}
        >
          <span>Đổi mật khẩu</span>
        </div>
      </div>
      {/* Modal body */}
      <div className={`${style.form}`}>
        {children}
        <p className={`${style.alert}`}>
          Bằng việc chọn tiếp tục, bạn đã đồng ý với <span>Điều khoản & Điều kiện</span> cùng{' '}
          <span>Chính sách bảo mật và chia sẻ thông tin</span> của Candle In The Wind
        </p>
      </div>
    </div>
  );
}

export default AuthChangePass;
