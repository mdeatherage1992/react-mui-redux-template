import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

export default function DefaultLayout(props) {
  return (
    <div className="root">
      <Header />
      <div style={{ minHeight: '78vh' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
