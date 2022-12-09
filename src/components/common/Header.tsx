import React, { useState } from 'react';
import { HeaderLayout } from '../../layout/common/HeaderLayout';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTopBtn } from '../../stores/artwork';

export interface HeaderProps {
  www: boolean;
  menu: boolean;
  setMenu: (menu: boolean) => void;
  closeAnimation: boolean;
  closeMenu: () => void;
}

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const www = pathname.includes('www');
  const [menu, setMenu] = useState(false);
  const [closeAnimation, setCloseAnimation] = useState(true);

  const closeMenu = () => {
    setCloseAnimation(false);
    setTimeout(() => {
      setMenu(false);
      setCloseAnimation(true);
      dispatch(setTopBtn(true));
    }, 500);
  };

  if (pathname.includes('artwork-detail') || pathname.includes('artist/')) {
    return null;
  }
  return (
    <HeaderLayout
      www={www}
      menu={menu}
      setMenu={setMenu}
      closeAnimation={closeAnimation}
      closeMenu={closeMenu}
    />
  );
};

export default Header;
