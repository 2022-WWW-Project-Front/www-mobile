import React from 'react';
import * as S from '../common/CommonStyled';
import { useNavigate } from 'react-router-dom';
import { Artwork, ArtworkListByGenre } from '../../types';

const MediaLayout = ({ artworkList, isLoading }: ArtworkListByGenre) => {
  const navigate = useNavigate();

  return (
    <S.Container length={artworkList?.length}>
      {!isLoading &&
        artworkList?.map((artwork: Artwork, idx: number) => {
          return (
            <S.ImageBox
              key={artwork.url}
              url={artwork.url}
              index={idx}
              onClick={() => navigate(`/artwork-detail/${artwork.artist.id}`)}
            >
              <img src={artwork.url} alt={artwork.url} />
            </S.ImageBox>
          );
        })}
    </S.Container>
  );
};

export default MediaLayout;
