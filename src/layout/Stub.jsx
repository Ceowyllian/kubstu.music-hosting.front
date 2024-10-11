import React from 'react';
import { Suspense } from 'react';

function Stub({ children }) {
  return <Suspense>{children}</Suspense>;
}

export default Stub;
