import React from 'react';
import styled from 'styled-components';

const HomeLayout = () => {
  return (
    <div>
      <MainBar>
        <Title>
          EXHIBITION
          <br />
          MARKET
        </Title>
        <DownLoadBook>
          <span>Book</span>
          <img src="/public/assets/download.svg" alt="download icon" />
        </DownLoadBook>
      </MainBar>
      <VideoPlace></VideoPlace>
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
  height: 400px;
  background-color: forestgreen;
`;
