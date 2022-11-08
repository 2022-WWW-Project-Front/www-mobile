import React from 'react';
import { HeaderLayout } from '../../layout/header/HeaderLayout';
import { useLocation } from 'react-router-dom';

export interface HeaderProps {
  www: boolean;
}

const Header = () => {
  const { pathname } = useLocation();
  const www = pathname.includes('www');
  return (
    <div>
      <HeaderLayout www={www} />
    </div>
  );
};

export default Header;
