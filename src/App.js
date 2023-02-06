import Footer from './layout/footer/footer';
import Header from './layout/header/header';
import Layer from './modules/layer/layer';
import { Provider } from 'react-redux';
import store from './redux/store';
import RoutesBrowser from './routes/routes-browser';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RoutesBrowser />
        <Footer />
        <Layer />
      </div>
    </Provider>
  );
}

export default App;
