import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import styled from 'styled-components';
import { HeaderProps } from '../../components/common/Header';
import { Link } from 'react-router-dom';

export const HeaderLayout = ({ www }: HeaderProps) => {
  return (
    <HeaderContainer bgColor={www ? 'var(--white)' : 'var(--main1)'}>
      <TopContainer>
        <Link to="/">
          <Logo
            side={www ? 'var(--black-500)' : 'var(--white)'}
            center={www ? 'var(--main1)' : 'var(--white)'}
          />
        </Link>
        <Menu color={www ? 'var(--black-500)' : 'var(--white)'} />
      </TopContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 4.625rem;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.25rem;
`;
