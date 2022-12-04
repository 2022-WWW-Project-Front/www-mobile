import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores';

const TopBtn = () => {
  const { pathname } = useLocation();
  const isNotMenu = useSelector((state: RootState) => state.artwork).topBtn;

  if (pathname === '/' || !isNotMenu) {
    return null;
  }

  return (
    <TopBtnBox onClick={() => window.scrollTo(0, 0)}>
      <img src="/assets/top_btn.png" alt="to top button" />
    </TopBtnBox>
  );
};

export default TopBtn;

const TopBtnBox = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 2.5rem;
  right: 1.25rem;
  width: 3.125rem;
  height: 3.125rem;
  img {
    width: 100%;
  }
`;
