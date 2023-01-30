import Home from '~/modules/home/home';
import NotFound from '~/modules/not-found/not-found';
import Products from '~/modules/products/products';

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
