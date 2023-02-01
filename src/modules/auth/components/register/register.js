import React from 'react';
import style from './register.module.scss';
import { useForm } from 'react-hook-form';
import Input from '@components/input/input';
import { requiredField, minLengthField, maxLengthField } from '@utils/validator';

function Register() {
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

  const onRegister = (data) => {
    console.log(data);
  };

  return (
    <form className={`${style.form}`} onSubmit={handleSubmit((data) => onRegister(data))}>
      <h4>Đăng ký để Shop có cơ hội phục vụ bạn tốt hơn.</h4>
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
      <div className={`${style.formGroup}`}>
        <Input
          formControl="confirmPassword"
          placeholder="Nhập lại mật khẩu"
          type="password"
          register={register}
          required={requiredField()}
          minLength={minLengthField(6)}
          error={errors.password}
        />
      </div>
      <button type="submit" className={`${style.submitButton}`}>
        Đăng ký
      </button>
    </form>
  );
}

export default Register;
