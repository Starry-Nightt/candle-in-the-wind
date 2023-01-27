import Footer from './layout/footer/footer';
import Header from './layout/header/header';
import MainLayout from './layout/main-layout/main-layout';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <MainLayout />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
