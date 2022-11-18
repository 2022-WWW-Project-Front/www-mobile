import React from 'react';
import InfoCategory from '../components/info/InfoCategory';
import { Outlet } from 'react-router-dom';

const Info = () => {
  return (
    <div style={{ paddingTop: '74px' }}>
      <InfoCategory />
      <Outlet />
    </div>
  );
};

export default Info;
