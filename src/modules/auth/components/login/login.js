import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { hideLayer } from '~/redux/layer/layer.action';
import { closeModal } from '~/redux/modal/modal.action';
import { loginAccount } from '~/redux/user-profile/user-profile.thunk';
import { requiredField, minLengthField, maxLengthField } from '@utils/validator';
import Input from '@components/input/input';
import style from './login.module.scss';

function Login(props) {
  const userProfileState = useSelector((state) => state.userProfile);
  const { isLoggedIn, error } = userProfileState;
  const dispatch = useDispatch();
  const { closeModal } = props;
  const navigate = useNavigate();
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

  const [invalidAccountAlert, setInvalidAccountAlert] = useState('');

  const login = (detail) => {
    console.log(detail);
    dispatch(loginAccount(detail));
  };

  useEffect(() => {
    if (isLoggedIn) {
      closeModal();
      navigate('/');
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!error) {
      setInvalidAccountAlert('');
      return;
    }
    if (error === 'Invalid credentials')
      setInvalidAccountAlert('Tài khoản hoặc mật khẩu không đúng');
    else setInvalidAccountAlert('Tài khoản không hợp lệ');
  }, [error]);

  return (
    <form className={`${style.form}`} onSubmit={handleSubmit((data) => login(data))}>
      <h4>Cảm ơn bạn đã trở lại</h4>
      {invalidAccountAlert && invalidAccountAlert.length && (
        <p className={`${style.alert}`}>{invalidAccountAlert}</p>
      )}
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
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(closeModal());
      dispatch(hideLayer());
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
