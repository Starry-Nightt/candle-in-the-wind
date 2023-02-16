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
import Checkout from '~/modules/checkout/checkout';
import Profile from '~/modules/profile/profile';
import ResetPassword from '~/modules/auth/components/reset-password/reset-password';

function Router() {
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
          <Route path="/cart-purchase" element={<Checkout />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
        </Route>

        {/* Private routes */}
      </Route>
    </Routes>
  );
}

export default Router;
