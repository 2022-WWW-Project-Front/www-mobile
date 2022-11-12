import React from 'react';
import styled from 'styled-components';
import NaverMap from '../../components/info/NaverMap';

const HowLayout = () => {
  return (
    <div>
      <TitleArea>HOW</TitleArea>
      <WhenContents>
        <p>WHEN</p>
        <div>
          <SubContents1>
            12/17 SAT
            <br />
            12/18 SUN
          </SubContents1>
          <SubContents1>
            10:00 - 19:00 <br />
            10:00 - 19:00
          </SubContents1>
        </div>
      </WhenContents>
      <Contents>
        <p>WHERE</p>
        <SubContents1>
          성수 무브모브 카페 & 스튜디오
          <br />
          서울 성동구 성수일로56
          <br />
          <br />
          <SubContents2>
            • &nbsp;뚝섬역 5분 출구 / 성수역 3번 출구
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;도보 10분 거리에 있습니다.
            <br />• &nbsp;전시장 주차공간이 없사오니 대중교통을 이용해주세요.
          </SubContents2>
        </SubContents1>
        <NaverMap />
      </Contents>
      <Contents>
        <p>WHO</p>
        <SubContents2>
          시각 | 미디어 | 패션 | 리빙
          <br />
          작가 20명
        </SubContents2>
      </Contents>
      <Contents>
        <p>WHAT</p>
        <SubContents2>
          • &nbsp;별도의 사전 예약이 없으며 무료 입장입니다.
          <br />
          • &nbsp;행사장 내부에서는 마스크를 상시 착용해야 합니다.
          <br />
          • &nbsp;외부 음식물 반입 금지이며, 전시장 내에서
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;모브무브 카페의 식음료만 취식이 가능합니다.
          <br />
          • &nbsp;현장 스태프와 전시 작가는 명찰을 착용하고 있습니다.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;문의사항은 스태프에게 말씀해주세요.
        </SubContents2>
      </Contents>
    </div>
  );
};

export default HowLayout;

const TitleArea = styled.div`
  height: 9.375rem;
  padding-bottom: 2rem;
  border-bottom: var(--black-100) solid 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'www', 'Pretendard', sans-serif;
  font-size: 1.688rem;
  color: var(--black-400);
`;
const WhenContents = styled.div`
  padding: 2.125rem 1.25rem 4.375rem;
  p {
    font-family: 'www', 'Pretendard', sans-serif;
    font-size: 1.5rem;
    color: var(--black-400);
    padding-bottom: 1rem;
  }
  div {
    display: flex;
  }
  div:first-child {
    margin-right: 1.25rem;
  }
`;

const Contents = styled.div`
  padding: 2.125rem 1.25rem 4.375rem;
  p {
    font-family: 'www', 'Pretendard', sans-serif;
    font-size: 1.5rem;
    color: var(--black-400);
    padding-bottom: 1rem;
  }
`;

const SubContents1 = styled.div`
  line-height: 1.5rem;
  color: var(--black-200);
`;

const SubContents2 = styled.div`
  line-height: 1.938rem;
  color: var(--black-200);
`;
