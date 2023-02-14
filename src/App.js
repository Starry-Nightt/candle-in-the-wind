import Router from './Routes/router';
import { useSelector, useDispatch } from 'react-redux';
import { TOKEN } from './shared/constants';
import { useEffect } from 'react';
import { loginAccount } from './redux/user-profile/user-profile.thunk';
import Spinner from './shared/components/spinner/spinner';
import { hideLayer, showLayer } from './redux/layer/layer.action';

function App() {
  const userProfile = useSelector((state) => state.userProfile);
  const { loading } = userProfile;
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      const authInfo = JSON.parse(token);
      dispatch(loginAccount(authInfo));
    }
  }, []);

  useEffect(() => {
    if (loading) {
      dispatch(showLayer(<Spinner loading={true} size={12} absolute={true} color={'white'} />));
    } else {
      dispatch(hideLayer());
    }
  }, [loading]);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
