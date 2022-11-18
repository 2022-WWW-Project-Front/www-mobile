import React from 'react';
import { HeaderLayout } from '../../layout/common/HeaderLayout';
import { useLocation } from 'react-router-dom';

export interface HeaderProps {
  www: boolean;
}

const Header = () => {
  const { pathname } = useLocation();
  const www = pathname.includes('www');
  return <HeaderLayout www={www} />;
};

export default Header;
