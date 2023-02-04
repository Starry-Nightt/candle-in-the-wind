import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import publicRoutes from '~/Routes/publicRoutes';

function MainLayout() {
  return (
    <div className="grid wide py-8">
      <Routes>
        <Route path="/" element={<Navigate to="home" />}></Route>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />}></Route>;
        })}
      </Routes>
    </div>
  );
}

export default MainLayout;
