import React from 'react';
import ArtworkDetailLayout from '../../layout/artwork/ArtworkDetailLayout';
import { useArtworkDetailByArtistQuery } from '../../stores/rtkQuery';
import { useLocation } from 'react-router-dom';

const ArtworkDetail = () => {
  const { pathname } = useLocation();
  const artistId = pathname.split('/')[2];
  const { data: artistDetail, isLoading } = useArtworkDetailByArtistQuery(artistId);
  return <ArtworkDetailLayout artistDetail={artistDetail} isLoading={isLoading} />;
};

export default ArtworkDetail;
