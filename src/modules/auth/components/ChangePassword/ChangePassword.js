import React from 'react';
import style from './ChangePassword.module.scss';
import { useForm } from 'react-hook-form';
import Input from '@components/input/input';
import { requiredField, minLengthField, maxLengthField } from '@utils/validator';
import AuthChangePass from '../AuthChangePass/AuthChangePass';
import { useDispatch } from 'react-redux';

function ChangePassword() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onChangePassword = (data) => {
    console.log(data);
  };

  return (
    <AuthChangePass>
      <form className={`${style.form}`} onSubmit={handleSubmit((data) => onChangePassword(data))}>
        <h4>Vui lòng nhập tên tài khoản và mật khẩu mới</h4>
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
            placeholder="Mật khẩu mới"
            type="password"
            register={register}
            required={requiredField()}
            minLength={minLengthField(6)}
            error={errors.password}
          />
        </div>
        <div className={`${style.formGroup}`}>
          <Input
            formControl="confirmPassword"
            placeholder="Nhập lại mật khẩu mới"
            type="password"
            register={register}
            required={requiredField()}
            minLength={minLengthField(6)}
            error={errors.password}
          />
        </div>
        <button type="submit" className={`${style.submitButton}`}>
          Đổi mật khẩu
        </button>
      </form>
    </AuthChangePass>
  );
}

export default ChangePassword;
