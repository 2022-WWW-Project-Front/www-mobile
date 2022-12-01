import React from 'react';
import styled from 'styled-components';
import CloseBtn from '../common/Icon/CloseBtn';
import * as S from '../common/CommonStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

const ArtworkDetailLayout = () => {
  const artworkList = [
    '/assets/test/5.jpg',
    '/assets/test/6.jpg',
    '/assets/test/7.jpg',
    '/assets/test/8.jpg'
  ];
  return (
    <ArtworkDetailContainer>
      <SwiperContainer>
        <S.BtnBox>
          <CloseBtn color="var(--white)" />
        </S.BtnBox>
        <Swiper
          style={{ overflow: 'visible', width: '100%' }}
          modules={[Pagination, Navigation]}
          pagination={true}
          navigation={true}
          autoHeight={true}
        >
          {artworkList.map((artwork) => (
            <SwiperSlide key={artwork}>
              <OneArtwork src={artwork} alt={artwork} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
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
`;

const SwiperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 6rem 0;
  .swiper-pagination {
    bottom: -6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .swiper-pagination-bullet {
      background: var(--white);
      opacity: 0.4;
    }
    .swiper-pagination-bullet-active {
      background: var(--main1);
      width: 0.875rem;
      height: 0.875rem;
      opacity: 1;
    }
  }
`;

const OneArtwork = styled.img`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;
