import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import layerReducer from './layer/layer.reducer';
import modalReducer from './modal/modal.reducer';
import productReducer from './product/product.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  layer: layerReducer,
  modal: modalReducer,
});

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
