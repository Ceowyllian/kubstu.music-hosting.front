import React from 'react';
import { Outlet } from 'react-router-dom';
import Stub from './Stub';

function EmptyLayout() {
  return (
    <Stub>
      <Outlet />
    </Stub>
  );
}

export default EmptyLayout;
