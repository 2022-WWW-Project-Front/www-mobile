import React from 'react';
import FontLayout from '../../layout/info/FontLayout';

const Font = () => {
  const ttfFont = 'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/common/www.ttf';
  const otfFont = 'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/common/www.otf';
  return <FontLayout ttfFont={ttfFont} otfFont={otfFont} />;
};

export default Font;
