import React from 'react';
import MainLayout from '~/layout/main-layout/main-layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import RequireAuth from '~/modules/auth/components/require-auth/require-auth';
import publicRoutes from '~/Routes/publicRoutes';
import userRoutes from '~/Routes/userRoutes';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Navigate to="home" />}></Route>
        {publicRoutes.map((route, idx) => {
          const Page = route.component;
          return <Route key={idx} path={route.path} element={<Page />}></Route>;
        })}
        <Route element={<RequireAuth />}>
          {userRoutes.map((route, idx) => {
            const Page = route.component;
            return <Route key={idx} path={route.path} element={<Page />}></Route>;
          })}
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
