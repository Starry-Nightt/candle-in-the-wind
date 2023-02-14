import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Layer from '~/shared/components/layer/layer';

function MainLayout() {
  return (
    <div className="grid wide py-8">
      <Header />
      <Outlet></Outlet>
      <Footer />
      <Layer />
    </div>
  );
}

export default MainLayout;
