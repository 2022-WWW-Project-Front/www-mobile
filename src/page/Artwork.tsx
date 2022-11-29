import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArtworkCategory from '../components/artwork/ArtworkCategory';
import Visual from '../components/artwork/Visual';
import Media from '../components/artwork/Media';
import Fashion from '../components/artwork/Fashion';
import Living from '../components/artwork/Living';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setActive } from '../stores/artwork';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperRef } from 'swiper';
import { History } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';

const Artwork = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const swiperRef = useRef<SwiperRef>();

  useEffect(() => {
    (pathname === '/artwork' || pathname === '/artwork/') && navigate('/artwork/visual');
  }, [pathname]);

  const onSlideChangeHistory = (props: any) => {
    dispatch(setActive({ idx: props.realIndex, part: props.slides[props.realIndex].dataset.history }));
  };

  const changeSlide = (part: string, idx: number) => {
    swiperRef.current?.slideTo(idx, 400, true);
    dispatch(setActive({ part, idx }));
  };

  return (
    <div style={{ paddingTop: '11.563rem' }}>
      <ArtworkCategory changeSlide={changeSlide} />
      <SwiperContainer>
        <Swiper
          modules={[History]}
          slidesPerView={1}
          onSlideChange={onSlideChangeHistory}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          history={{
            key: '',
            replaceState: true
          }}
        >
          <SwiperSlide data-history="visual">
            <Visual />
          </SwiperSlide>
          <SwiperSlide data-history="media">
            <Media />
          </SwiperSlide>
          <SwiperSlide data-history="fashion">
            <Fashion />
          </SwiperSlide>
          <SwiperSlide data-history="living">
            <Living />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </div>
  );
};

export default Artwork;

const SwiperContainer = styled.div`
  background: var(--gradation-bg);
  height: 100vh;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: var(--gradation-bg);

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
`;
