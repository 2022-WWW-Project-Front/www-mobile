import React, { useEffect } from 'react';
import * as S from '../common/CommonStyled';
import { useNavigate } from 'react-router-dom';
import { Artwork, ArtworkListByGenre } from '../../types';
import ArtworkPageLoading from '../common/ArtworkPageLoading';
import { RootState } from '../../stores';
import { artworkListLoading } from '../../stores/artwork';
import { useDispatch, useSelector } from 'react-redux';

const LivingLayout = ({ artworkList, isLoading }: ArtworkListByGenre) => {
  const navigate = useNavigate();
  const delay = useSelector((state: RootState) => state.artwork).delayLoading;
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(artworkListLoading());
    }, 1500);
  }, [artworkList]);

  return (
    <S.Container length={artworkList?.length}>
      {delay && <ArtworkPageLoading />}
      {!isLoading &&
        artworkList?.map((artwork: Artwork, idx: number) => {
          return (
            <S.ImageBox
              key={artwork.url + idx}
              url={artwork.url.replace('.jpeg', '_360p.jpeg')}
              index={idx}
              onClick={() => navigate(`/artwork-detail/${artwork.artist.id}`)}
            >
              <img src={artwork.url.replace('.jpeg', '_360p.jpeg')} alt={artwork.genre} />
            </S.ImageBox>
          );
        })}
    </S.Container>
  );
};

export default LivingLayout;
