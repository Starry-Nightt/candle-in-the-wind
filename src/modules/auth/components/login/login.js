import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginAccount } from '~/redux/user-profile/user-profile.thunk';
import { requiredField, minLengthField, maxLengthField } from '@utils/validator';
import Input from '@components/input/input';
import style from './login.module.scss';
import AuthWrapper from '../auth-wrapper/auth-wrapper';

function Login() {
  const userProfile = useSelector((state) => state.userProfile);
  const { error } = userProfile;
  const dispatch = useDispatch();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: 'kminchelle',
      password: '0lelplR',
    },
  });

  const [errorMsg, setErrorMsg] = useState('');

  const login = (detail) => {
    dispatch(loginAccount(detail));
  };

  useEffect(() => {
    if (!error) {
      setErrorMsg('');
      return;
    }
    const status = error?.response?.status;
    if (status === 429) setErrorMsg('No server response');
    else if (status === 400) setErrorMsg('Tài khoản hoặc mật khẩu không đúng');
    else setErrorMsg('Vui lòng kiểm tra kết nối internet');
  }, [error]);

  return (
    <AuthWrapper>
      <form className={`${style.form}`} onSubmit={handleSubmit((data) => login(data))}>
        <h4>Cảm ơn bạn đã trở lại</h4>
        {errorMsg && errorMsg.length && <p className={`${style.alert}`}>{errorMsg}</p>}
        <div className={`${style.formGroup}`}>
          <Input
            formControl="username"
            placeholder="Tên tài khoản"
            register={register}
            required={requiredField()}
            minLength={minLengthField(6)}
            maxLength={maxLengthField(15)}
            error={errors.username}
          />
        </div>
        <div className={`${style.formGroup}`}>
          <Input
            formControl="password"
            placeholder="Mật khẩu"
            type="password"
            register={register}
            required={requiredField()}
            minLength={minLengthField(6)}
            error={errors.password}
          />
        </div>
        <button type="submit" className={`${style.submitButton}`}>
          Đăng nhập
        </button>
      </form>
    </AuthWrapper>
  );
}

export default Login;
