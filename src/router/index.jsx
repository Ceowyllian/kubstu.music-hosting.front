import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { BaseLayout, EmptyLayout } from '../layout';
import { HOME, LOGIN, PROFILE, REGISTRATION } from './routes';
import { Home, Login, Profile, Registration } from './pages';
import RequireAuth from './RequireAuth';

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
      {
        path: PROFILE,
        element: <RequireAuth page={<Profile />} />,
      },
    ],
  },
];

export default createBrowserRouter(routes);
