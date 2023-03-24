import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './config/theme.js';
import DefaultLayout from './layouts/Default';
import { HomePage } from './pages/HomePage/Loadable.js';
import { ContactPage } from './pages/ContactPage/Loadable.js';
import ErrorPage from './pages/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/contact',
          element: <ContactPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
