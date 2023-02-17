import appAPI from '@utils/appClient2';

class UserService {
  login = (authInfo) => {
    console.log(authInfo);
    return appAPI().post('/auth/login', authInfo);
  };

  logout = () => {
    return appAPI().post('auth/logout');
  };

  register = (authInfo) => {
    return appAPI().post('auth/register', authInfo);
  };
}

export default new UserService();
