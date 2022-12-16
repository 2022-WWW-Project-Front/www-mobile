import React from 'react';
import styled, { keyframes } from 'styled-components';
import CloseBtn from '../common/Icon/CloseBtn';
import * as S from '../common/CommonStyled';
import { Link } from 'react-router-dom';
import { ArtistDetail } from '../../types';

interface ArtistDetailProps {
  artistDetail: ArtistDetail;
  isLoading: boolean;
  backToList: () => void;
}

const ArtistDetailLayout = ({ artistDetail, isLoading, backToList }: ArtistDetailProps) => {
  return (
    <ArtistDetailContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <ProfileImgContianer>
            <div>
              <ProfileImage profile={artistDetail?.profileImage} />
              <Introduce>
                <span>{artistDetail?.genre}</span>
                <span>{artistDetail.nickname ? artistDetail.nickname : artistDetail.name}</span>
              </Introduce>
            </div>
            <S.BtnBox onClick={backToList}>
              <CloseBtn />
            </S.BtnBox>
            <S.BtnContainer>
              <div
                onClick={() => {
                  if (artistDetail.linkTree) {
                    window.open(artistDetail.linkTree);
                  } else if (artistDetail.email) {
                    navigator.clipboard.writeText(artistDetail.email).then(() => alert('copied e-mail'));
                  }
                }}
              >
                <S.Btn bgColor="var(--black-400)" border>
                  Contact{' >'}
                </S.Btn>
              </div>
              <Link to={`/artwork-detail/${artistDetail?.id}`}>
                <S.Btn bgColor="var(--main1)" border>
                  Artwork{' >'}
                </S.Btn>
              </Link>
            </S.BtnContainer>
          </ProfileImgContianer>
          <ContentContainer>
            <strong>{artistDetail?.description}</strong>
            <div>{artistDetail?.bio}</div>
          </ContentContainer>
        </div>
      )}
    </ArtistDetailContainer>
  );
};

export default ArtistDetailLayout;

const ArtistDetailContainer = styled.div`
  margin-top: -4.625rem;
  overflow: auto;
  inset: 0;
  width: 100%;
  min-height: 100vh;
  background-color: var(--sub);
`;

const ProfileImgContianer = styled.div`
  height: 26.625rem;
  border-bottom: 1px var(--black-500) solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProfileImage = styled.div<{ profile: string }>`
  width: 14.375rem;
  height: 14.375rem;
  border: 1px var(--black-100) solid;
  box-sizing: border-box;
  background-image: url(${({ profile }) => profile});
  background-size: cover;
  background-position: center;
`;

const Introduce = styled.div`
  margin: 1.25rem 0;
  font-size: 0.875rem;
  font-weight: 700;
  span:first-child {
    &:after {
      content: ' | ';
      margin: 0 0.5rem;
    }
  }
`;

const ContentContainer = styled.div`
  padding: 3rem 2rem 4rem;
  display: block;
  overflow: auto;
  height: fit-content;
  position: relative;
  strong {
    font-size: 1.5rem;
    font-weight: 600;
  }
  div {
    margin-top: 1.625rem;
    line-height: 1.5rem;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 40%;
  left: calc(50% - 1.5rem);
  background: rgb(22, 53, 244);
  background: linear-gradient(90deg, var(--main1) 0%, rgb(73, 235, 255) 65%, var(--main2) 100%);
  animation: ${rotate} 1s linear forwards infinite;

  &::after {
    content: '';
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    position: absolute;
    background-color: var(--sub);
  }
`;
