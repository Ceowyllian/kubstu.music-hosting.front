import React from 'react';
import Stub from './Stub';
import { Outlet } from 'react-router-dom';
import { TopNavigation } from 'components';

function BaseLayout() {
  return (
    <Stub>
      <TopNavigation />
      <Outlet />
    </Stub>
  );
}

export default BaseLayout;
