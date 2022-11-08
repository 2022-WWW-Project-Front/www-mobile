import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import styled from 'styled-components';
import { HeaderProps } from '../../components/header/Header';

export const HeaderLayout = ({ www }: HeaderProps) => {
  return (
    <HeaderContainer bgColor={www ? 'var(--white)' : 'var(--main1)'}>
      <TopContainer>
        <Logo
          side={www ? 'var(--black-500)' : 'var(--white)'}
          center={www ? 'var(--main1)' : 'var(--white)'}
        />
        <Menu color={www ? 'var(--black-500)' : 'var(--white)'} />
      </TopContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  width: 100vw;
  height: 74px;
`;

const TopContainer = styled.div`
  width: min(600px, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 0 auto;
`;
