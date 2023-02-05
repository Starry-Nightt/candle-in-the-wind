import Footer from './layout/footer/footer';
import Header from './layout/header/header';
import MainLayout from './layout/main-layout/main-layout';
import Layer from './modules/layer/layer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <MainLayout />
                <Footer />
                <Layer />
            </div>
        </Provider>
    );
}

export default App;
