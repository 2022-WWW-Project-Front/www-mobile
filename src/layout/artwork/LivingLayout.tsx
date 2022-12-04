import React from 'react';
import * as S from '../common/CommonStyled';

const LivingLayout = () => {
  const test = [
    { url: '/assets/test/1.jpg', artistId: 'Apple' },
    { url: '/assets/test/2.jpg', artistId: 'Banana' },
    { url: '/assets/test/3.jpg', artistId: 'Cherry' },
    { url: '/assets/test/4.jpg', artistId: 'Dole' },
    { url: '/assets/test/5.jpg', artistId: 'Example' },
    { url: '/assets/test/6.jpg', artistId: 'Flower' },
    { url: '/assets/test/7.jpg', artistId: 'Grape' },
    { url: '/assets/test/8.jpg', artistId: 'HollyMolly' },
    { url: '/assets/test/9.jpg', artistId: 'IceCream' },
    { url: '/assets/test/10.jpg', artistId: 'Jelly' },
    { url: '/assets/test/11.jpg', artistId: 'Knife' },
    { url: '/assets/test/12.jpg', artistId: 'Lemon' },
    { url: '/assets/test/13.jpg', artistId: 'Mango' },
    { url: '/assets/test/14.jpg', artistId: 'Next' },
    { url: '/assets/test/15.jpg', artistId: 'Orange' }
  ];
  return (
    <S.Container length={test.length}>
      {test.map((artwork, idx) => {
        return (
          <S.ImageBox key={artwork.url} url={artwork.url} index={idx}>
            <img src={artwork.url} alt={artwork.artistId} />
          </S.ImageBox>
        );
      })}
    </S.Container>
  );
};

export default LivingLayout;
