import React from 'react';
import styled from 'styled-components';
import CloseBtn from '../common/Icon/CloseBtn';
import * as S from '../common/CommonStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useNavigate } from 'react-router-dom';

const ArtworkDetailLayout = () => {
  const navigate = useNavigate();
  const swiperStyle = {
    overflow: 'visible',
    width: '100%',
    height: '27.125rem',
    display: 'flex',
    justifyContent: 'center'
  };
  const handle = () => {
    if (navigator.share) {
      navigator.share({
        title: '작품이름',
        text: 'Hello World',
        url: 'https://m.wwweb.kr/artist-detail/'
      });
    } else if (navigator.clipboard) {
      navigator.clipboard
        .writeText(`https://m.wwweb.kr/artist-detail/`)
        .then(() => alert('링크가 클립보드에 복사되었습니다.'));
    } else {
      alert('공유하기가 지원되지 않는 환경 입니다.');
    }
  };

  const artworkList = [
    '/assets/test/5.jpg',
    '/assets/test/6.jpg',
    '/assets/test/7.jpg',
    '/assets/test/8.jpg'
  ];
  return (
    <ArtworkDetailContainer>
      <SwiperContainer>
        <S.BtnBox onClick={() => navigate(-1)}>
          <CloseBtn color="var(--white)" />
        </S.BtnBox>
        <Swiper
          style={swiperStyle}
          modules={[Pagination, Navigation]}
          pagination={{
            type: 'fraction'
          }}
          navigation={true}
        >
          {artworkList.map((artwork) => (
            <SwiperSlide key={artwork}>
              <OneArtwork src={artwork} alt={artwork} />
            </SwiperSlide>
          ))}
        </Swiper>
        <S.BtnContainer>
          <S.Btn bgColor="var(--main1)" border={false}>
            Artist<span>{'>'}</span>
          </S.Btn>
        </S.BtnContainer>
      </SwiperContainer>
      <ContentContainer>
        <ShareBtn onClick={handle}>
          <img src="/assets/share.png" alt="share button" />
        </ShareBtn>
        <TitleContainer>
          <div>
            <span>장르</span>
            <span>작가명</span>
          </div>
          <strong>작품 소개우우ㅜ우</strong>
        </TitleContainer>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 공백포한
          700자로 제한합니다......
        </div>
      </ContentContainer>
    </ArtworkDetailContainer>
  );
};

export default ArtworkDetailLayout;

const ArtworkDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--black-400);
  position: fixed;
  z-index: 999;
  overflow-y: auto;
`;

const SwiperContainer = styled.div`
  height: 29.625rem;
  border-bottom: 1px var(--white) solid;
  box-sizing: content-box;
  position: relative;
  .swiper-pagination {
    width: fit-content;
    position: absolute;
    bottom: -1.625rem;
    left: 2.5rem;
    color: var(--white);
    font-size: 0.875rem;
    font-weight: 400;
  }
  .swiper-pagination-current {
    font-weight: 600;
  }
  .swiper-button-prev {
    color: #ffffffb2;
    margin-left: 1.25rem;
  }
  .swiper-button-next {
    color: #ffffffb2;
    margin-right: 1.25rem;
  }
`;

const OneArtwork = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-size: contain;
  object-fit: contain;
  background-repeat: no-repeat;
`;

const ContentContainer = styled.div`
  color: var(--white);
  padding: 2.875rem 2rem 4.5rem;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    font-weight: 700;
    font-size: 0.875rem;
    span:first-child {
      &:after {
        content: ' | ';
        margin: 0 0.5rem;
      }
    }
  }
  strong {
    font-size: 1.563rem;
    font-weight: 600;
    margin: 0.844rem 0 1.625rem;
  }
`;

const ShareBtn = styled.div`
  position: absolute;
  top: 2.625rem;
  right: 1.375rem;
`;
