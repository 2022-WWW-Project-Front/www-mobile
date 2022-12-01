import React from 'react';
import styled from 'styled-components';
import CloseBtn from '../common/Icon/CloseBtn';
import * as S from '../common/CommonStyled';
import { Link } from 'react-router-dom';

interface ArtistDetailProps {
  user: {
    profile: string;
    name: string;
    part: string;
    title: string;
    description: string;
  };
  backToList: () => void;
}

const ArtistDetailLayout = ({ user, backToList }: ArtistDetailProps) => {
  const { profile, name, part, title, description } = user;
  return (
    <ArtistDetailContainer>
      <ProfileImgContianer>
        <div>
          <ProfileImage profile={profile} />
          <Introduce>
            <span>{part}</span>
            <span>{name}</span>
          </Introduce>
        </div>
        <S.BtnBox onClick={backToList}>
          <CloseBtn />
        </S.BtnBox>
        <BtnContainer>
          <Link to="">
            <Btn bgColor="var(--black-400)">Contact{' >'}</Btn>
          </Link>
          <Link to={name}>
            <Btn bgColor="var(--main1)">Artwork{' >'}</Btn>
          </Link>
        </BtnContainer>
      </ProfileImgContianer>
      <ContentContainer>
        <strong>{title}</strong>
        <div>{description}</div>
      </ContentContainer>
    </ArtistDetailContainer>
  );
};

export default ArtistDetailLayout;

const ArtistDetailContainer = styled.div`
  position: fixed;
  z-index: 999;
  overflow: auto;
  inset: 0;
  width: 100%;
  height: 100vh;
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

const BtnContainer = styled.div`
  position: absolute;
  bottom: -1px;
  right: 0;
  display: flex;
`;

const Btn = styled.button<{ bgColor: string }>`
  width: 6.25rem;
  height: 2.5rem;
  padding: 0;
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  background-color: ${({ bgColor }) => bgColor};
  border: 1px ${({ bgColor }) => bgColor} solid;
  box-sizing: content-box;
`;

const ContentContainer = styled.div`
  //height: auto;
  //min-height: 100% !important;
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
