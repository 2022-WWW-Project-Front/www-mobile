import React from 'react';
import styled from 'styled-components';

interface CreditDetailProps {
  name: string;
  email: string | null;
  links: {
    instagram?: string;
    github?: string;
  }[];
  close: (modal: boolean) => void;
}

const CreditDetailLayout = ({ name, email, links, close }: CreditDetailProps) => {
  return <div></div>;
};

export default CreditDetailLayout;

const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: linear-gradient(180deg, #ffffff 10.21%, #dee3ff 52.4%, #8f9df2 100%); ;
`;
