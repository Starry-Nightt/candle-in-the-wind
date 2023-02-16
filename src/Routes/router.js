import React from 'react';
import MainLayout from '~/layout/main-layout/main-layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import RequireAuth from '~/modules/auth/components/require-auth/require-auth';
import Forum from '~/modules/forum/forum';
import Home from '~/modules/Home/home';
import Products from '~/modules/Products/products';
import Login from '~/modules/auth/components/login/login';
import Register from '~/modules/auth/components/register/register';
import NotFound from '~/modules/not-found/not-found';
import ProductDetail from '~/modules/product-detail/product-detail';
import CartPage from '~/modules/cart-page/cart-page';
import CartPurchase from '~/modules/cart-page/cart-purchase/cart-purchase';
import AdminPage, { menu } from '~/modules/AminPage/AdminPage';
import ProductList from '~/modules/AminPage/components/ProductList/ProductList';
import { useSelector } from 'react-redux';
import AddProduct from '~/modules/AminPage/components/AddProduct/AddProduct';
import UpdateProduct from '~/modules/AminPage/components/UpdateProduct/UpdateProduct';

function Router() {
  const { role } = useSelector((state) => state.userProfile);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Public Routes*/}
        <Route path="" element={<Navigate to="home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products/:category" element={<Products />}></Route>
        <Route path="/products/:category/:productId" element={<ProductDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/forum" element={<Forum />}></Route>
          <Route path="/cart-purchase" element={<CartPurchase />}></Route>
        </Route>

        {/* Private routes */}
      </Route>

      {role && (
        <Route path="/admin" element={<AdminPage />}>
          <Route path="/admin/product/view" element={<ProductList />}></Route>
          <Route path="/admin/product/add" element={<AddProduct />}></Route>
          {menu[0].subMenu.length === 3 ? <Route path="/admin/product/update/:id" element={<UpdateProduct />}></Route> : null}
          <Route path="/admin/forum/view" element={<NotFound />}></Route>
          <Route path="/admin/voucher/view" element={<NotFound />}></Route>
          <Route path="/admin/voucher/add" element={<NotFound />}></Route>
          <Route path="/admin/order/view" element={<NotFound />}></Route>
          <Route path="/admin/order/add" element={<NotFound />}></Route>
          <Route path="/admin/product" element={<Navigate to="/admin/product/view" />}></Route>
          <Route path="/admin/forum" element={<Navigate to="/admin/forum/view" />}></Route>
          <Route path="/admin/voucher" element={<Navigate to="/admin/voucher/view" />}></Route>
          <Route path="/admin/order" element={<Navigate to="/admin/order/view" />}></Route>
          <Route path="" element={<Navigate to="/admin/product/view" />}></Route>
        </Route>
      )}
    </Routes>
  );
}

export default Router;
