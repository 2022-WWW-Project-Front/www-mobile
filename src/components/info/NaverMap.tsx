import React, { useEffect, useRef } from 'react';

const NaverMap = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줌
    const location = new naver.maps.LatLng(37.5454, 127.0503);
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT
      }
    };
    const content = [
      '<div id="marker">',
      '<div id="marker__cafe"></div>',
      '<div id="marker__place">',
      '<div>무브모브</div>',
      '</div>',
      '</div>'
    ].join('');
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
      icon: {
        content,
        size: new naver.maps.Size(38, 58),
        anchor: new naver.maps.Point(19, 58)
      }
    });
  }, []);

  return <div ref={mapElement} style={{ minHeight: '12.5rem', marginTop: '1.703rem' }} />;
};

export default NaverMap;
