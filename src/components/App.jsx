import { PlayerProvider } from 'hooks/music';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from 'router';

export default function App() {
  return (
    <React.StrictMode>
      <PlayerProvider>
        <RouterProvider router={router} />
      </PlayerProvider>
    </React.StrictMode>
  );
}
