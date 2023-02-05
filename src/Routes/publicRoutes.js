import { categoryList } from '~/layout/header/components/category/category';
import Home from '~/modules/Home/home';
import NotFound from '~/modules/not-found/not-found';
import Products from '~/modules/Products/Products';

const publicRoutes = [
  {
    path: '/home',
    component: Home,
  },
  ...categoryList.map((category) => {
    return {
      path: category.path,
      component: Products,
    }
  }),
  {
    path: '*',
    component: NotFound,
  },
];

export default publicRoutes;
