import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './cart/cart.reducer';
import checkoutReducer from './checkout/checkout.reducer';
import layerReducer from './layer/layer.reducer';
import modalReducer from './modal/modal.reducer';
import postsReducer from './post/post.reducer';
import productReducer from './product/product.reducer';
import sidebarReducer from './sidebar/sidebar.reducer';
import userProfileReducer from './user-profile/user-profile.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  layer: layerReducer,
  modal: modalReducer,
  userProfile: userProfileReducer,
  post: postsReducer,
  sidebar: sidebarReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
});

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
