import styled, { css } from 'styled-components';

export const Container = styled.div<{ length: number }>`
  width: 100%;
  height: ${({ length }) => (length + 1.4) * 50}vw;
  position: relative;
`;

export const ImageBox = styled.div<{ url: string; index: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ index }) => (index + 0.2) * 50}vw;
  overflow: hidden;
  ${({ index }) => {
    if (index % 4 === 1) {
      return css`
        width: 50%;
        left: ${(index % 4) + 1.25}rem;
        z-index: 2;
      `;
    } else if (index % 4 === 2) {
      return css`
        width: 53%;
        right: ${(index % 3) + 1.25}rem;
        z-index: 4;
      `;
    } else if (index % 4 === 3) {
      return css`
        width: 47%;
        left: ${index % 4}rem;
        z-index: 3;
      `;
    } else {
      return css`
        width: 43%;
        right: ${(index % 4) + 1.25}rem;
      `;
    }
  }}
  img {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const BtnBox = styled.div`
  position: absolute;
  z-index: 200;
  top: 0;
  right: 0;
`;
