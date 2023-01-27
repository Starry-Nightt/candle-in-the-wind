import Home from '~/modules/Home/home';
import NotFound from '~/modules/NotFound/notFound';
import Products from '~/modules/Products/products';

// Before sign in
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

// After Sign in
const userRoutes = [];

const adminRoutes = [];

export { publicRoutes, userRoutes, adminRoutes };
