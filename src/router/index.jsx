import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import EmptyLayout from '../layout/EmptyLayout';
import { HOME, AUTH } from './routes';
import { Home, Auth } from './pages';

const routes = [
  {
    element: <EmptyLayout />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: AUTH,
        element: <Auth />,
      },
    ],
  },
];

export default createBrowserRouter(routes);
