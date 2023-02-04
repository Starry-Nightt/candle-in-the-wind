import Home from '~/modules/Home/home';
import NotFound from '~/modules/not-found/not-found';
import Products from '~/modules/Products/products';

const publicRoutes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default publicRoutes;
