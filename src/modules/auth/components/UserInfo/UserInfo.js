import React from 'react';
import style from './UserInfo.module.scss';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import avatar from '~/assets/images/avatar-default.jpg';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function UserInfo() {
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
    <div className={`${style.wrapper}`}>
      <form className={`${style.form}`} onSubmit={handleSubmit((data) => onChangePassword(data))}>
        <h2 className={`${style.title}`}>Hồ Sơ Của Tôi</h2>
        <h4 className={`${style.subtitle}`}>Quản lý thông tin hồ sơ để bảo mật tài khoản</h4>
        <Link to="/changeuserinfo" className={`${style.naviChange}`}>
          <FontAwesomeIcon icon={faPencil} className={`${style.icon}`} />
          <h4 className={`${style.subtitle}`}>Sửa thông tin</h4>
        </Link>
        <div className={`${style.container}`}>
          <div className={`${style.infoContainer}`}>
            <div className={`${style.component}`}>
              <h4 className={`${style.info}`}>Họ và tên:</h4>
              <h4 className={`${style.value}`}>kmin chelle</h4>
            </div>
            <div className={`${style.component}`}>
              <h4 className={`${style.info}`}>Địa chỉ email: </h4>
              <h4 className={`${style.value}`}>kminchelle@gmail.com</h4>
            </div>
            <div className={`${style.component}`}>
              <h4 className={`${style.info}`}>Số điện thoại:</h4>
              <h4 className={`${style.value}`}>0935******689</h4>
            </div>
            <div className={`${style.component}`}>
              <h4 className={`${style.info}`}>Địa chỉ: </h4>
              <h4 className={`${style.value}`}>Hà Nội, Việt Nam</h4>
            </div>
          </div>
          <div className={`${style.split}`}></div>
          <div className={`${style.imageContainer}`}>
            <img src={avatar} alt="" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserInfo;
