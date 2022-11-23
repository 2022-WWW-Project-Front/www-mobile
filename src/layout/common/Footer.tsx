import React from 'react';
import styled from 'styled-components';

const Footer = () => {
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
