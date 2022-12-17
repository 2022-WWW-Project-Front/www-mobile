import React, { useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import CloseBtn from '../common/Icon/CloseBtn';
import * as S from '../common/CommonStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useNavigate } from 'react-router-dom';
import { ArtworkDetailByArtist } from '../../types';

interface ArtworkDetailProps {
  artistDetail: ArtworkDetailByArtist | undefined;
  isLoading: boolean;
}

const ArtworkDetailLayout = ({ artistDetail, isLoading }: ArtworkDetailProps) => {
  const navigate = useNavigate();
  const descriptionBox = useRef(null);

  useEffect(() => {
    if (artistDetail) {
      descriptionBox.current.innerText = artistDetail?.description;
    }
  }, [artistDetail]);

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
        title: artistDetail?.title,
        text: artistDetail?.title,
        url: `https://m.wwweb.kr/artwork-detail/${artistDetail?.artist.id}`
      });
    } else if (navigator.clipboard) {
      navigator.clipboard
        .writeText(`https://m.wwweb.kr/artwork-detail/${artistDetail?.id}`)
        .then(() => alert('링크가 클립보드에 복사되었습니다.'));
    } else {
      alert('공유하기가 지원되지 않는 환경 입니다.');
    }
  };

  const thumbnailSort = (artistDetail) => {
    if (artistDetail) {
      const assets = artistDetail.assets;
      const main = assets.find((asset) => asset.isMain);
      return [main, ...assets.filter((asset) => !asset.isMain)];
    }
  };

  const newAssets = useMemo(() => thumbnailSort(artistDetail), [artistDetail]);

  return (
    <ArtworkDetailContainer>
      {!isLoading && (
        <div>
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
              navigation
            >
              {newAssets.map((asset) => (
                <SwiperSlide key={asset.url}>
                  {asset.type === 'image' && (
                    <Image src={asset.url.replace('.jpeg', '_720p.jpeg')} alt={asset.url} />
                  )}
                  {asset.type === 'video' && (
                    <Video src={asset.url} playsInline loop muted controls>
                      <source src={asset.url} type="video/mp4" />
                    </Video>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
            <S.BtnContainer>
              <S.Btn
                onClick={() => navigate(`/artist/${artistDetail.artist.id}`)}
                bgColor="var(--main1)"
                border={false}
              >
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
                <span>{artistDetail?.assets[0].genre}</span>
                <span>{artistDetail?.artist.nickname || artistDetail?.artist.nickname}</span>
              </div>
              <strong>{artistDetail?.title}</strong>
            </TitleContainer>
            <DescriptionContainer ref={descriptionBox}>{artistDetail?.description}</DescriptionContainer>
          </ContentContainer>
        </div>
      )}
    </ArtworkDetailContainer>
  );
};

export default ArtworkDetailLayout;

const ArtworkDetailContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--black-400);
  overflow-y: auto;
  overflow-x: hidden;
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

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-size: contain;
  object-fit: contain;
  background-repeat: no-repeat;
`;

const Video = styled.video`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
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

const DescriptionContainer = styled.div`
  line-height: 148.34%;
`;

const ShareBtn = styled.div`
  position: absolute;
  top: 2.625rem;
  right: 1.375rem;
  white-space: pre-wrap;
`;
