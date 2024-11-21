import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { BaseLayout, EmptyLayout } from '../layout';
import { AUTH, HOME } from './routes';
import { Auth, Home } from './pages';

const routes = [
  {
    element: <EmptyLayout />,
    children: [
      {
        path: AUTH,
        element: <Auth />,
      },
    ],
  },
  {
    element: <BaseLayout />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
    ],
  },
];

export default createBrowserRouter(routes);
