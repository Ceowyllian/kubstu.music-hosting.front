import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { isUserAuthenticated } from 'auth/';

function RequireAuth({ page }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuthenticated()) {
      navigate('/login');
    }
  });

  return page;
}

export default RequireAuth;
