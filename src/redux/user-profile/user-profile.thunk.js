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
        dispatch(fetchUserProfileSuccess(res.data));
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
    dispatch(endSession());
    localStorage.removeItem(TOKEN);
  };
};

export { loginAccount, logout };
