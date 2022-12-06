import React from 'react';
import styled, { keyframes } from 'styled-components';

const ComingSoon = () => {
  return (
    <RandomBox>
      {Array.from(Array(9).keys()).map((i) => (
        <div key={i}></div>
      ))}
      <strong>
        <p>COMING SOON</p>
        <span>22.12.07 - 22.12.08</span>
      </strong>
    </RandomBox>
  );
};

export default ComingSoon;

const bounce = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-7px);
  }
  100% {
    transform: translatey(0px);
  }
`;

const RandomBox = styled.div`
  position: relative;
  width: 100%;
  height: 180vh;

  div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.1);
  }
  div:first-child {
    background-color: #5d6dff;
    width: 1.125rem;
    height: 1.125rem;
    top: 2.625rem;
    left: 2.5rem;
    animation: ${bounce} 2s linear infinite;
  }
  div:nth-child(2) {
    background-color: #9fa8ff;
    width: 7.875rem;
    height: 7.875rem;
    top: 5.125rem;
    left: 4.375rem;
    animation: ${bounce} 2.5s linear infinite;
  }
  div:nth-child(3) {
    background-color: #5d6dff;
    width: 1.125rem;
    height: 1.125rem;
    top: 8.5rem;
    right: 3.125rem;
    animation: ${bounce} 1.8s linear infinite;
  }
  div:nth-child(4) {
    background-color: #9fa8ff;
    width: 5.25rem;
    height: 8.125rem;
    top: 14.375rem;
    right: 3.125rem;
    animation: ${bounce} 2.6s linear infinite;
  }
  div:nth-child(5) {
    background-color: #5d6dff;
    width: 8.5rem;
    height: 8.5rem;
    top: 23.25rem;
    left: 1.375rem;
    animation: ${bounce} 1.9s linear infinite;
  }
  div:nth-child(6) {
    background-color: #5d6dff;
    width: 1.125rem;
    height: 1.125rem;
    top: 27.875rem;
    right: 7rem;
    animation: ${bounce} 2.7s linear infinite;
  }
  div:nth-child(7) {
    z-index: 2;
    background-color: #9fa8ff;
    width: 8.5rem;
    height: 8.5rem;
    top: 35.25rem;
    right: 3rem;
    animation: ${bounce} 2.1s linear infinite;
  }
  div:nth-child(8) {
    background-color: #7b8eff;
    width: 7.5rem;
    height: 8.75rem;
    top: 41.875rem;
    right: 10rem;
    animation: ${bounce} 2.4s linear infinite;
  }
  div:nth-child(9) {
    background-color: #5d6dff;
    width: 1.125rem;
    height: 1.125rem;
    top: 59.75rem;
    right: 5.875rem;
    animation: ${bounce} 1.6s linear infinite;
  }

  strong {
    position: absolute;
    width: 100%;
    height: 2.25rem;
    z-index: 4;
    color: var(--black-400);
    font-size: 2.25rem;
    font-family: 'www', sans-serif;
    white-space: nowrap;
    top: 16.25rem;
    display: block;
    span {
      display: block;
      font-family: 'Pretendard', sans-serif;
      font-weight: 700;
      padding-top: 1rem;
      font-size: 1rem;
      color: var(--black-200);
    }
  }
`;
