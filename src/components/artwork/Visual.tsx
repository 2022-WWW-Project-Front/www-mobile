import React from 'react';
import VisualLayout from '../../layout/artwork/VisualLayout';
import { useArtworkListByGenreQuery } from '../../stores/rtkQuery';

const Visual = () => {
  const { data: visualList, isLoading } = useArtworkListByGenreQuery('visual');
  return <VisualLayout artworkList={visualList} isLoading={isLoading} />;
};

export default Visual;
