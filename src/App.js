import Router from './Routes/router';
import { useSelector, useDispatch } from 'react-redux';
import { TOKEN } from './shared/constants';
import { useEffect } from 'react';
import { loginAccount } from './redux/user-profile/user-profile.thunk';
import Spinner from './shared/components/spinner/spinner';
import { hideLayer, showLayer } from './redux/layer/layer.action';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from './layout/footer/footer';
import Header from './layout/header/header';
import Layer from './shared/components/layer/layer';

function App() {
  const userProfile = useSelector((state) => state.userProfile);
  const { loading } = userProfile;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, role } = userProfile;

  useEffect(() => {
    if (role) {
      navigate('/admin');
    } else if (isLoggedIn) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [isLoggedIn, role]);

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
      {role ? (
        <Router />
      ) : (
        <div>
          <Header />
          <Router />
          <Footer />
          <Layer />
        </div>
      )}
    </div>
  );
}

export default App;
