const { default: userService } = require('@services/user.service');
const {
  fetchUserProfileRequest,
  fetchUserProfileFailure,
  endSession,
  fetchUserProfileSuccess,
} = require('./user.profile.action');

const tokenKey = 'token';

const loginAccount = (authInfo) => {
  return function (dispatch) {
    dispatch(fetchUserProfileRequest);
    userService
      .login(authInfo)
      .then((res) => {
        localStorage.setItem(tokenKey, res.data?.token);
        dispatch(fetchUserProfileSuccess(res.data));
      })
      .catch((error) => dispatch(fetchUserProfileFailure(error.response?.data?.message)));
  };
};

const logout = () => {
  return function (dispatch) {
    dispatch(endSession());
    localStorage.removeItem(tokenKey);
  };
};

export { loginAccount, logout };
