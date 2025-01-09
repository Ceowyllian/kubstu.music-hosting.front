import React, { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';
import { isUserAuthenticated } from '../auth/';

function RequireAuth({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuthenticated()) {
      navigate('/login');
    }
  });

  return <Outlet>{children}</Outlet>;
}

export default RequireAuth;
