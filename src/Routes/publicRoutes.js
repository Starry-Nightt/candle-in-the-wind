import Home from '~/modules/Home/home';
import NotFound from '~/modules/NotFound/notFound';
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
