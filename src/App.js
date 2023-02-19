import Footer from './layout/footer/footer';
import Header from './layout/header/header';
import Layer from './shared/components/layer/layer';
import Router from './Routes/router';
import { useSelector, useDispatch } from 'react-redux';
// import { TOKEN } from './shared/constants/local-storage-key';
import { useEffect } from 'react';
// import { loginAccount } from './redux/user-profile/user-profile.thunk';
import Spinner from './shared/components/spinner/spinner';
import { hideLayer, showLayer } from './redux/layer/layer.action';
import 'react-toastify/dist/ReactToastify.css';
import { ADMIN_ROLE } from './shared/constants/role';

function App() {
  const userProfile = useSelector((state) => state.userProfile);
  const { loading, role } = userProfile;
  const dispatch = useDispatch();

  // useEffect(() => {
  // const token = localStorage.getItem(TOKEN);
  // if (token) {
  //   const authInfo = JSON.parse(token);
  //   dispatch(loginAccount(authInfo));
  // }
  // }, []);

  useEffect(() => {
    if (loading) {
      dispatch(showLayer(<Spinner loading={true} size={12} absolute={true} color={'white'} />));
    } else {
      dispatch(hideLayer());
    }
  }, [loading]);

  const isAdmin = () => {
    return role === ADMIN_ROLE;
  };

  return (
    <div className="App bg-neutral">
      {!isAdmin() && <Header />}
      <Router />
      {!isAdmin() && <Footer />}
      <Layer />
    </div>
  );
}

export default App;
