import React, { useEffect } from 'react';
import styled from 'styled-components';

interface HomeProps {
  downloadBook: () => void;
}

const HomeLayout = ({ downloadBook }: HomeProps) => {
  const videoSource = [
    'https://dp4qv0164jysa.cloudfront.net/video/www_motion_1.mp4',
    'https://dp4qv0164jysa.cloudfront.net/video/www_motion_2.mp4',
    'https://dp4qv0164jysa.cloudfront.net/video/www_motion_4-1.mp4',
    'https://dp4qv0164jysa.cloudfront.net/video/www_motion_4-2.mp4',
    'https://dp4qv0164jysa.cloudfront.net/video/www_motion_5.mp4',
    'https://dp4qv0164jysa.cloudfront.net/video/www_motion_6.mp4',
    'https://dp4qv0164jysa.cloudfront.net/video/www_motion_7.mp4',
    'https://dp4qv0164jysa.cloudfront.net/video/www_motion_9.mp4'
  ];

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  let videoIndex = 0;
  const resetVideo = (event) => {
    const video = event.target;
    if (videoIndex > videoSource.length - 1) {
      shuffle(videoSource);
      video.src = videoSource[0];
      return;
    }
    videoIndex += 1;
    video.src = videoSource[videoIndex];
  };

  useEffect(() => {
    shuffle(videoSource);
  }, []);

  return (
    <div>
      <MainBar>
        <Title>
          EXHIBITION
          <br />
          MARKET
        </Title>
        <DownLoadBook onClick={downloadBook}>
          <span>Book</span>
          <img src="/assets/download.svg" alt="download icon" />
        </DownLoadBook>
      </MainBar>
      <VideoPlace>
        <video autoPlay playsInline muted onEnded={(event) => resetVideo(event)}>
          <source src={videoSource[videoIndex]} type="video/mp4" />
        </video>
      </VideoPlace>
    </div>
  );
};

export default HomeLayout;

const MainBar = styled.div`
  background-color: var(--main1);
  width: 100%;
  font-family: 'WWW', 'Pretendard', sans-serif;
  font-size: 1.5rem;
  color: var(--white);
  position: fixed;
  top: 4.625rem;
`;

const Title = styled.div`
  padding: 0 1.25rem 1.25rem;
  border-bottom: var(--white) 1px solid;
  box-sizing: border-box;
`;

const DownLoadBook = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;
  span {
    padding-left: 2.5rem;
    padding-right: 1.25rem;
  }
`;

const VideoPlace = styled.div`
  margin-top: 7.1rem;
  width: 100%;
  height: calc(100vh - 11.725rem);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  video {
    height: 100%;
    //height: 100vw;
    //transform: rotate(90deg);
  }
`;
