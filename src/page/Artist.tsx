import React from 'react';
import { Outlet } from 'react-router-dom';

const Artist = () => {
  return (
    <div style={{ paddingTop: '4.625rem' }}>
      <Outlet />
    </div>
  );
};

export default Artist;
