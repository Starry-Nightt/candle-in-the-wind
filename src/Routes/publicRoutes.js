import Login from '~/modules/auth/components/login/login';
import Register from '~/modules/auth/components/register/register';
import Home from '~/modules/home/home';
import NotFound from '~/modules/not-found/not-found';
import Products from '~/modules/products/products';

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
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];

export default publicRoutes;
