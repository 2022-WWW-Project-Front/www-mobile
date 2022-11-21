import React, { useEffect } from 'react';
import InfoCategory from '../components/info/InfoCategory';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Info = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    (pathname === '/www' || pathname === '/www/') && navigate('/www/exhibition');
  }, [pathname]);
  return (
    <div style={{ paddingTop: '10.125rem' }}>
      <InfoCategory />
      <Outlet />
    </div>
  );
};

export default Info;
