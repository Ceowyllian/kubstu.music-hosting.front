import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { BaseLayout, EmptyLayout } from '../layout';
import { HOME, LOGIN, REGISTRATION } from './routes';
import { Home, Login, Registration } from './pages';

const routes = [
  {
    element: <EmptyLayout />,
    children: [
      {
        path: LOGIN,
        element: <Login />,
      },
      {
        path: REGISTRATION,
        element: <Registration />,
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
