import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './product/product.reducer';

const rootReducer = combineReducers({
  product: productReducer,
});

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
