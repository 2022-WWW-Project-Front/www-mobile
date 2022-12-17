import React from 'react';
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
  const randomNum = (start: number, end: number) => {
    return Math.floor(Math.random() * (end - start + 1) + start);
  };
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
        <video autoPlay playsInline loop muted>
          <source src={videoSource[randomNum(0, 4)]} type="video/mp4" />
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
