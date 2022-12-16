import React from 'react';
import FashionLayout from '../../layout/artwork/FashionLayout';
import { useArtworkListByGenreQuery } from '../../stores/rtkQuery';

const Fashion = () => {
  const { data: fashionList, isLoading } = useArtworkListByGenreQuery('fashion');
  return <FashionLayout artworkList={fashionList} isLoading={isLoading} />;
};

export default Fashion;
