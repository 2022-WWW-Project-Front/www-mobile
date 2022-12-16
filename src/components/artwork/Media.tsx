import React from 'react';
import MediaLayout from '../../layout/artwork/MediaLayout';
import { useArtworkListByGenreQuery } from '../../stores/rtkQuery';

const Media = () => {
  const { data: mediaList, isLoading } = useArtworkListByGenreQuery('media');
  return <MediaLayout artworkList={mediaList} isLoading={isLoading} />;
};

export default Media;
