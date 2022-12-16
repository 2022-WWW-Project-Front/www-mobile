import React from 'react';
import styled from 'styled-components';

interface FontProps {
  ttfFont: string;
  otfFont: string;
}

const FontLayout = ({ ttfFont, otfFont }: FontProps) => {
  return (
    <div>
      <TitleArea>
        <div>
          WWW FONT
          <br />
          FREE DOWNLOAD
        </div>
      </TitleArea>
      <FontTest>
        <div>
          ABCDEFGHIJKLMN
          <br />
          OPQRSTUVWXYZ
        </div>
        only english
        <br />
        MAKE by DISP
      </FontTest>
      <Description>
        전시 기념 자체제작 폰트 www를 무료 배포합니다.
        <br />
        <br />
        www는 픽셀아트 느낌을 최소화 하고
        <br />
        대담한 무드를 강조한 폰트입니다.
        <br />
        사이트, 포스터, 부스, 브로슈어 등 활용되었으며
        <br />
        전시의 전반적인 브랜딩을 보여줍니다.
        <br />
        <br />
        상업적 이용을 허용하되 무단 복제 및 배포를 금합니다.
        <br />
        <span>FontCopyrightⓒDISP</span>
      </Description>
      <ButtonPlace>
        <button onClick={() => window.open(ttfFont)}>WWW TTF</button>
        <button onClick={() => window.open(otfFont)}>WWW OTF</button>
      </ButtonPlace>
    </div>
  );
};

export default FontLayout;

const TitleArea = styled.div`
  height: 9.375rem;
  border-bottom: var(--black-100) solid 1px;
  box-sizing: border-box;
  line-height: 2.25rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'www', 'Pretendard', sans-serif;
  font-size: 1.688rem;
  color: var(--black-400);
  padding: 2.5rem 0 1.688rem;
  white-space: nowrap;
`;
const FontTest = styled.div`
  font-family: 'www', 'Pretendard', sans-serif;
  font-size: 1.563rem;
  line-height: 2rem;
  white-space: nowrap;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2.2rem;
  div {
    color: var(--main1);
    margin-bottom: 0.75rem;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;
  padding: 3rem 1.25rem;
  line-height: 1.5rem;
  span {
    font-size: 0.8rem;
    margin-top: 1rem;
    color: var(--black-100);
  }
`;

const ButtonPlace = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 10rem;
  button {
    width: 10rem;
    height: 3.5rem;
    color: var(--white);
    font-size: 1.125rem;
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.375rem 0 1.625rem;
    border: none;
    &:after {
      content: '';
      display: block;
      width: 0.531rem;
      height: 0.531rem;
      border-top: var(--white) 1.5px solid;
      border-right: var(--white) 1.5px solid;
      transform: rotate(45deg);
    }
    &:first-child {
      background-color: var(--black-400);
    }
    &:last-child {
      background-color: var(--main1);
    }
  }
`;
