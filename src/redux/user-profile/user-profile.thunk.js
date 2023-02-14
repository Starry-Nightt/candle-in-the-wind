import { TOKEN } from '~/shared/constants';

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
        console.log(res.data);
        dispatch(fetchUserProfileSuccess(res.data));
      })
      .catch((error) => dispatch(fetchUserProfileFailure(error)));
  };
};

const changePassword = (authInfo) => {
  return function (dispatch) {
    // userService
    //   .login(authInfo)
    //   .then((res) => {
    //     localStorage.setItem(TOKEN, JSON.stringify(authInfo));
    //     dispatch(fetchUserProfileSuccess(res.data));
    //   })
    //   .catch((error) => dispatch(fetchUserProfileFailure(error)));
  };
};

const logout = () => {
  return function (dispatch) {
    dispatch(endSession());
    localStorage.removeItem(TOKEN);
  };
};

export { loginAccount, logout };
