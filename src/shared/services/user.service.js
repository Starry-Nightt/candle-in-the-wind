import appClient from '@utils/appClient';

class UserService {
  login = (authInfo) => {
    return appClient().post('/auth/login', authInfo);
  };
}

export default new UserService();
