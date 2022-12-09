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
import ComingSoon from '../layout/common/ComingSoon';

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
    window.scrollTo(0, 0);
  };

  const changeSlide = (part: string, idx: number) => {
    swiperRef.current?.slideTo(idx, 400, true);
    dispatch(setActive({ part, idx }));
  };

  return (
    <div style={{ paddingTop: '11.1rem' }}>
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
            {/*<Visual />*/}
            <ComingSoon />
          </SwiperSlide>
          <SwiperSlide data-history="media">
            {/*<Media />*/}
            <ComingSoon />
          </SwiperSlide>
          <SwiperSlide data-history="fashion">
            {/*<Fashion />*/}
            <ComingSoon />
          </SwiperSlide>
          <SwiperSlide data-history="living">
            {/*<Living />*/}
            <ComingSoon />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </div>
  );
};

export default Artwork;

const SwiperContainer = styled.div`
  background: var(--gradation-bg);
  min-height: 100vh;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    min-height: 100vh;
    text-align: center;
    font-size: 18px;
    background: var(--gradation-bg);

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
`;
