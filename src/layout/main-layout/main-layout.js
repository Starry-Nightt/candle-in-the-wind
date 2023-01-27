import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from '~/Routes/routes';

function MainLayout() {
  return (
    <div className="grid wide" style={{ padding: '32px 0' }}>
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
