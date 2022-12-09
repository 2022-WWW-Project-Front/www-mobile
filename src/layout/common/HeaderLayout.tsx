import React from 'react';
import Logo from './Logo';
import MenuIcon from './Icon/MenuIcon';
import styled from 'styled-components';
import { HeaderProps } from '../../components/common/Header';
import { Link } from 'react-router-dom';
import MenuLayout from './MenuLayout';
import { setTopBtn } from '../../stores/artwork';
import { useDispatch } from 'react-redux';

export const HeaderLayout = ({ www, menu, setMenu, closeAnimation, closeMenu }: HeaderProps) => {
  const dispatch = useDispatch();
  return (
    <div>
      <HeaderContainer bgColor={www ? 'var(--white)' : 'var(--main1)'}>
        <TopContainer>
          <Link to="/">
            <Logo
              side={www ? 'var(--black-500)' : 'var(--white)'}
              center={www ? 'var(--main1)' : 'var(--white)'}
            />
          </Link>
          <div
            onClick={() => {
              setMenu(true);
              dispatch(setTopBtn(false));
            }}
          >
            <MenuIcon color={www ? 'var(--black-500)' : 'var(--white)'} />
          </div>
        </TopContainer>
      </HeaderContainer>
      {menu && <MenuLayout closeAnimation={closeAnimation} closeMenu={closeMenu} />}
    </div>
  );
};

const HeaderContainer = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  position: fixed;
  z-index: 200;
  width: 100%;
  height: 4.625rem;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.25rem;
`;
