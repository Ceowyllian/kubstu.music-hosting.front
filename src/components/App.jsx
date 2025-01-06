import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '../router';
import { AuthProvider } from '../auth/context';

export default function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  );
}
