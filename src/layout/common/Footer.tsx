import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname.includes('artwork-detail') || pathname.includes('artist/') || pathname === '/') {
    return null;
  }

  return (
    <FooterContainer>
      <img src="/assets/Footer.svg" alt="footer" />
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  background-color: var(--main1);
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 0;
`;
