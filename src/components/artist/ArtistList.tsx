import React from 'react';
import ArtistListLayout from '../../layout/artist/ArtistListLayout';
import { useArtistListQuery } from '../../stores/rtkQuery';

const ArtistList = () => {
  const { data: artistList } = useArtistListQuery();
  return <ArtistListLayout artistList={artistList} />;
};

export default ArtistList;
