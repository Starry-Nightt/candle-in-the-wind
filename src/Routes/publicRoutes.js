import Login from '~/modules/auth/components/login/login';
import Register from '~/modules/auth/components/register/register';
import Home from '~/modules/Home/home';
import NotFound from '~/modules/not-found/not-found';
import Products from '~/modules/Products/products';
import DetailProduct from '~/modules/DetailProduct/DetailProduct';

const publicRoutes = [
  {
    path: '*',
    component: NotFound,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/products/:productId',
    component: DetailProduct,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];

export default publicRoutes;
