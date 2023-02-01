import React, { useState } from 'react';
import style from './register.module.scss';

function Register() {
  const [detail, setDetail] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const onChangeUsernameField = (e) => {
    setDetail({
      ...detail,
      username: e.target.value,
    });
  };
  const onChangePasswordField = (e) => {
    setDetail({
      ...detail,
      password: e.target.value,
    });
  };
  const onChangeConfirmPasswordField = (e) => {
    setDetail({
      ...detail,
      confirmPassword: e.target.value,
    });
  };
  return (
    <form className={`${style.form}`} onSubmit={(e) => {}}>
      <h4>Đăng ký để Shop có cơ hội phục vụ bạn tốt hơn.</h4>
      <div className={`${style.formGroup}`}>
        <input
          type="text"
          placeholder="Tên tài khoản"
          value={detail.username}
          onChange={(e) => onChangeUsernameField(e)}
        />
      </div>
      <div className={`${style.formGroup}`}>
        <input
          type="password"
          placeholder="Mật khẩu"
          value={detail.password}
          onChange={(e) => onChangePasswordField(e)}
        />
      </div>
      <div className={`${style.formGroup}`}>
        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
          value={detail.confirmPassword}
          onChange={(e) => onChangeConfirmPasswordField(e)}
        />
      </div>
      <button type="submit" className={`${style.formSubmitButton}`}>
        Đăng ký
      </button>
    </form>
  );
}

export default Register;
