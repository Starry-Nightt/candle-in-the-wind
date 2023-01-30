import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from '~/routes/routes';

function MainLayout() {
  return (
    <div className="grid wide py-8">
      <Routes>
        <Route path="/" element={<Navigate to="home" />}></Route>
        {publicRoutes.map((route, idx) => {
          const Page = route.component;
          return <Route key={idx} path={route.path} element={<Page />}></Route>;
        })}
      </Routes>
    </div>
  );
}

export default MainLayout;
