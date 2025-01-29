import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { BaseLayout, EmptyLayout } from 'layout';
import {
  HOME,
  LOGIN,
  ME,
  MY_TRACKS,
  REGISTRATION,
  SEARCH_RESULTS,
  UPLOAD_TRACK,
  MY_PLAYLISTS,
} from './routes';
import {
  Home,
  Login,
  Me,
  MyTracks,
  Registration,
  SearchResults,
  UploadTrack,
  MyPlaylists,
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
        path: SEARCH_RESULTS,
        element: <SearchResults />,
      },
    ],
  },
  {
    element: <RequireAuth page={<BaseLayout />} />,
    children: [
      {
        path: ME,
        element: <Me />,
      },
      {
        path: UPLOAD_TRACK,
        element: <UploadTrack />,
      },
      {
        path: MY_TRACKS,
        element: <MyTracks />,
      },
      {
        path: MY_PLAYLISTS,
        element: <MyPlaylists />,
      },
    ],
  },
];

export default createBrowserRouter(routes);
