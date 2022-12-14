import React from 'react';
import styled from 'styled-components';
import Logo from '../common/Logo';

const WwwLayout = () => {
  return (
    <div>
      <TitleArea>
        <Logo width={72.5} />
        <div>EXHIBITION MARKET</div>
      </TitleArea>
      <PosterPlace>
        <Poster src={'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/common/www%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC.jpg'} alt={'www poster'} />
      </PosterPlace>
      <Description>
        <BlueTitle>
          HELLO
          <br />
          OUR TEAM WWW
        </BlueTitle>
        <GreenTitle>
          WE WANT WORTH
          <br />
          IN WORLD WIDE WEB
        </GreenTitle>
        <Contents>
          <span>
            WWW : 월드 와이드 웹<br />
            온라인으로만 존재하던 그들의 작품이,
            <br />
            WWW 버그로 오프라인에 출현하다
          </span>
          <br />
          <br />
          <br />
          COVID19로 온라인으로 졸업전시를 해야했던
          <br />
          디자인 대학생들은 어느새 작가가 되어 그들의 작품을 오프라인으로 출현시킵니다.
          <br />
          www는 이들의 작품으로 오프라인에서 전시 및 굿즈를 판매하고 온라인에 그들만의 공간을 마련합니다.
          <br />
          <br />
          온라인이 억울했던 학생들은
          <br />
          www버그를 통해 드디어 작품을 세상밖에 내보입니다.
          <br />
          저희 www버그 축제에 모두 놀러오세요.
          <br />
          <br />
          <br />
        </Contents>
      </Description>
    </div>
  );
};

export default WwwLayout;

const TitleArea = styled.div`
  height: 9.375rem;
  border-bottom: var(--black-100) solid 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'www', 'Pretendard', sans-serif;
  font-size: 1.688rem;
  color: var(--black-400);
  white-space: nowrap;
`;

const PosterPlace = styled.div`
  height: 100%;
  min-width: 200px;
  margin: 2.125rem 1.25rem 3.313rem;
  display: flex;
  justify-content: center;
`;

const Poster = styled.img`
  width: min(100%, 600px);
  background-size: cover;
  display: block;
`;

const Description = styled.div`
  display: flex;
  padding: 0 1.25rem 10rem;
  flex-direction: column;
  line-height: 2.1rem;
`;
const BlueTitle = styled.span`
  font-family: 'www', 'Pretendard', sans-serif;
  font-size: 1.75rem;
  color: var(--main1);
  padding-bottom: 1rem;
`;

const GreenTitle = styled.span`
  font-family: 'www', 'Pretendard', sans-serif;
  font-size: 1.75rem;
  color: var(--main2);
  padding-bottom: 1.3rem;
`;

const Contents = styled.span`
  line-height: 1.938rem;
  color: var(--black-300);
  span {
    font-weight: 700;
  }
`;
