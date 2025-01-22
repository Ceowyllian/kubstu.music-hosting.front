import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { BaseLayout, EmptyLayout } from 'layout';
import {
  HOME,
  LOGIN,
  ME,
  REGISTRATION,
  SEARCH_RESULTS,
  UPLOAD_TRACK,
} from './routes';
import {
  Home,
  Login,
  Me,
  Registration,
  SearchResults,
  UploadTrack,
} from './pages';
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
        path: ME,
        element: <RequireAuth page={<Me />} />,
      },
      {
        path: SEARCH_RESULTS,
        element: <SearchResults />,
      },
      {
        path: UPLOAD_TRACK,
        element: <RequireAuth page={<UploadTrack />} />,
      },
    ],
  },
];

export default createBrowserRouter(routes);
