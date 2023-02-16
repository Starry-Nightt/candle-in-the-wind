import React from 'react';
import style from './ChangeUserInfo.module.scss';
import { useForm } from 'react-hook-form';
import Input from '@components/input/input';
import { requiredField, minLengthField, maxLengthField } from '@utils/validator';
import AuthChangePass from '../AuthChangePass/AuthChangePass';
import { useDispatch } from 'react-redux';

function ChangeUserInfo() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phoneNumber: '',
      avatar: '',
      address: '',
    },
  });

  const onChangePassword = (data) => {
    console.log(data);
  };

  return (
    <AuthChangePass>
      <form className={`${style.form}`} onSubmit={handleSubmit((data) => onChangePassword(data))}>
        <h4>Vui lòng nhập thông tin mới </h4>
        <div className={`${style.formGroup}`}>
          <Input
            formControl="fullname"
            placeholder="Họ và tên"
            register={register}
            required={requiredField()}
            minLength={minLengthField(6)}
            maxLength={maxLengthField(15)}
            error={errors.fullname}
          />
        </div>
        <div className={`${style.formGroup}`}>
          <Input
            formControl="avatar"
            placeholder="Hình ảnh"
            type="url"
            register={register}
            required={requiredField()}
            error={errors.address}
          />
        </div>
        <div className={`${style.formGroup}`}>
          <Input
            formControl="email"
            placeholder="Địa chỉ email"
            register={register}
            required={requiredField()}
            minLength={minLengthField(6)}
            maxLength={maxLengthField(15)}
            error={errors.email}
          />
        </div>
        <div className={`${style.formGroup}`}>
          <Input
            formControl="phoneNumber"
            placeholder="Số điện thoại"
            register={register}
            required={requiredField()}
            minLength={minLengthField(10)}
            maxLength={maxLengthField(11)}
            error={errors.phoneNumber}
          />
        </div>
        <div className={`${style.formGroup}`}>
          <Input
            formControl="address"
            placeholder="Địa chỉ"
            register={register}
            required={requiredField()}
            minLength={minLengthField(6)}
            maxLength={maxLengthField(15)}
            error={errors.address}
          />
        </div>
        <button type="submit" className={`${style.submitButton}`}>
          Sửa thông tin tài khoản 
        </button>
      </form>
    </AuthChangePass>
  );
}

export default ChangeUserInfo;
