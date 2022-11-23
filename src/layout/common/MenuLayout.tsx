import React from 'react';
import Logo from './Logo';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import MenuComponent from './Icon/MenuComponent';

interface MenuProps {
  closeAnimation: boolean;
  closeMenu: () => void;
}

const MenuLayout = ({ closeAnimation, closeMenu }: MenuProps) => {
  return (
    <MenuContainer animation={closeAnimation}>
      <HeaderContainer>
        <TopContainer>
          <Link to="/">
            <Logo side={'var(--black-500)'} center={'var(--main1)'} />
          </Link>
          <img src="/assets/closeBtn.svg" alt="close button" onClick={closeMenu} />
        </TopContainer>
      </HeaderContainer>
      <MenuBox>
        <Link to="/artwork" onClick={closeMenu}>
          <MenuComponent menuName="ARTWORK" />
        </Link>
        <Link to="/artist" onClick={closeMenu}>
          <MenuComponent menuName="ARTIST" />
        </Link>
        <Link to="/www" onClick={closeMenu}>
          <MenuComponent menuName="INFO" />
        </Link>
      </MenuBox>
    </MenuContainer>
  );
};

export default MenuLayout;

const slideLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
`;

const MenuContainer = styled.div<{ animation: boolean }>`
  background: var(--gradation-bg);
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  ${({ animation }) =>
    animation
      ? css`
          animation: ${slideLeft} 0.5s cubic-bezier(0.65, 0, 0.35, 1) 0s 1 normal forwards;
        `
      : css`
          animation: ${slideRight} 0.5s cubic-bezier(0.65, 0, 0.35, 1) 0s 1 normal forwards;
        `};
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.25rem;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 4.625rem;
`;

const MenuBox = styled.div`
  width: 100%;
  margin-top: 4.875rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1.5rem;
`;
