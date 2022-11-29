import React from 'react';
import ArtWorkCategoryLayout from '../../layout/artwork/ArtWorkCategoryLayout';
import VisualIcon from '../../layout/common/Icon/VisualIcon';
import MediaIcon from '../../layout/common/Icon/MediaIcon';
import FashionIcon from '../../layout/common/Icon/FashionIcon';
import LivingIcon from '../../layout/common/Icon/LivingIcon';

interface ArtworkCategoryProps {
  changeSlide: (part: string, idx: number) => void;
}

const ArtworkCategory = ({ changeSlide }: ArtworkCategoryProps) => {
  const category = [
    {
      part: 'visual',
      image: (active?: boolean) => <VisualIcon active={active} />
    },
    {
      part: 'media',
      image: (active?: boolean) => <MediaIcon active={active} />
    },
    {
      part: 'fashion',
      image: (active?: boolean) => <FashionIcon active={active} />
    },
    {
      part: 'living',
      image: (active?: boolean) => <LivingIcon active={active} />
    }
  ];

  return <ArtWorkCategoryLayout category={category} changeSlide={changeSlide} />;
};

export default ArtworkCategory;
