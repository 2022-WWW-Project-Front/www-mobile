import React from 'react';
import ArtistDetailLayout from '../../layout/artist/ArtistDetailLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import { useArtistDetailQuery } from '../../stores/rtkQuery';

const ArtistDetail = () => {
  const { pathname } = useLocation();
  const artistId = pathname.split('/')[2];
  const { data: artistDetail, isLoading } = useArtistDetailQuery(Number(artistId));
  const navigate = useNavigate();
  const backToList = () => {
    navigate('/artist');
  };

  return <ArtistDetailLayout artistDetail={artistDetail} isLoading={isLoading} backToList={backToList} />;
};

export default ArtistDetail;
