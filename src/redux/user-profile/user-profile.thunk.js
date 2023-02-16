import { TOKEN } from '~/shared/constants';
import { ErrorNotify, SuccessNotify } from '~/shared/utils/notify';

const { default: userService } = require('@services/user.service');
const {
  fetchUserProfileRequest,
  fetchUserProfileFailure,
  endSession,
  fetchUserProfileSuccess,
} = require('./user.profile.action');

const loginAccount = (authInfo) => {
  return function (dispatch) {
    dispatch(fetchUserProfileRequest());
    userService
      .login(authInfo)
      .then((res) => {
        localStorage.setItem(TOKEN, JSON.stringify(authInfo));
        dispatch(fetchUserProfileSuccess(res.data.user));
        console.log(res.data);
        SuccessNotify('Đăng nhập thành công');
      })
      .catch((error) => {
        dispatch(fetchUserProfileFailure(error));
        ErrorNotify('Đăng nhập thất bại');
      });
  };
};

const logout = () => {
  return function (dispatch) {
    userService
      .logout()
      .then((res) => {
        dispatch(endSession());
        localStorage.removeItem(TOKEN);
        SuccessNotify('Đăng xuất thành công');
      })
      .catch(() => {
        ErrorNotify('Đã xảy ra lỗi');
      });
  };
};

const registerAccount = (authInfo) => {
  return function (dispatch) {
    userService
      .register(authInfo)
      .then((res) => {
        SuccessNotify('Đăng ký thành công');
      })
      .catch(() => {
        ErrorNotify('Đã xảy ra lỗi');
      });
  };
};

export { loginAccount, logout, registerAccount };
