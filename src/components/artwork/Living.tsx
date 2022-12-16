import React from 'react';
import LivingLayout from '../../layout/artwork/LivingLayout';
import { useArtworkListByGenreQuery } from '../../stores/rtkQuery';

const Living = () => {
  const { data: livingList, isLoading } = useArtworkListByGenreQuery('living');
  return <LivingLayout artworkList={livingList} isLoading={isLoading} />;
};

export default Living;
