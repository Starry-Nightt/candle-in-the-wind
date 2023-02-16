import React from 'react';
import style from './ChangeUserInfo.module.scss';
import { useForm } from 'react-hook-form';
import Input from '@components/input/input';
import avatar from '~/assets/images/avatar-default.jpg';
import { useDispatch } from 'react-redux';
import { requiredField, minLengthField, maxLengthField } from '@utils/validator';

function ChangeUserInfo() {
  const dispatch = useDispatch();
  const [step, setStep] = React.useState(1);
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

  const onChangePassword = (data) => {};

  const handleClick = () => {
    setStep(2);
  };

  return (
    <div className={`${style.wrapper}`}>
      <form className={`${style.form}`} onSubmit={handleSubmit((data) => onChangePassword(data))}>
        <h2 className={`${style.title}`}>Chỉnh sửa thông tin tài khoản</h2>
        <h4 className={`${style.subtitle}`}>Quản lý thông tin hồ sơ để bảo mật tài khoản</h4>
        {step == 1 ? (
          <div className={`${style.container}`}>
            <div className={`${style.infoContainer}`}>
              <div className={`${style.component}`}>
                <h4 className={`${style.info}`}>Họ và tên:</h4>
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
              </div>
              <div className={`${style.component}`}>
                <h4 className={`${style.info}`}>Địa chỉ email: </h4>
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
              </div>
              <div className={`${style.component}`}>
                <h4 className={`${style.info}`}>Số điện thoại:</h4>
                <div className={`${style.formGroup}`}>
                  <Input
                    formControl="phoneNumber"
                    placeholder="Số điện thoại"
                    register={register}
                    required={requiredField()}
                    minLength={minLengthField(6)}
                    maxLength={maxLengthField(15)}
                    error={errors.phoneNumber}
                  />
                </div>
              </div>
              <div className={`${style.component}`}>
                <h4 className={`${style.info}`}>Địa chỉ: </h4>
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
              </div>
            </div>
            <div className={`${style.split}`}></div>
            <div className={`${style.imageContainer}`}>
              <div className={`${style.image}`}>
                <img src={avatar} alt="" />
                <div className={`${style.chooseImage}`}>
                  <Input
                    formControl="avatar"
                    register={register}
                    type="file"
                    accept="image/png,image/jpeg,image/gif"
                    required={requiredField()}
                    error={errors.avatar}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`${style.containerNext}`}>
            <div className={`${style.component}`}>
              <h4 className={`${style.info}`}>Vui lòng xác nhận mật khẩu</h4>
              <div className={`${style.formGroup}`}>
                <Input
                  formControl="password"
                  placeholder="Mật khẩu"
                  register={register}
                  required={requiredField()}
                  minLength={minLengthField(6)}
                  maxLength={maxLengthField(15)}
                  error={errors.address}
                />
              </div>
            </div>
          </div>
        )}
        {step == 1 ? (
          <button onClick={handleClick} className={`${style.submitButton}`}>
            Tiếp
          </button>
        ) : (
          <button type="submit" className={`${style.submitButton}`}>
            Xác nhận chỉnh sửa
          </button>
        )}
      </form>
    </div>
  );
}

export default ChangeUserInfo;
