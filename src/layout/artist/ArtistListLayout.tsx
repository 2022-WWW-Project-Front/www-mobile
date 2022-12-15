import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ArtistListProps {
  artistList: {
    id: number;
    genre: string;
    name: string;
    nickname: string;
    profileImage: string;
    email: string;
    contact: string;
    description: string;
    bio: string;
  }[];
}

const ArtistListLayout = ({ artistList }: ArtistListProps) => {
  return (
    <div>
      <ArtistTitle>ARTIST</ArtistTitle>
      <ArtistContainer>
        {artistList?.map((artist) => (
          <Link to={`${artist.id}`} key={artist.id}>
            <ArtistCard>
              <img src={`${artist.profileImage}`} alt={artist.nickname} />
            </ArtistCard>
          </Link>
        ))}
      </ArtistContainer>
    </div>
  );
};

export default ArtistListLayout;

const ArtistTitle = styled.div`
  width: 100%;
  height: 3.5rem;
  text-indent: 1.5rem;
  background-color: var(--main1);
  color: var(--white);
  border-top: 2px var(--white) solid;
  font-family: 'WWW', sans-serif;
  font-size: 1.625rem;
  display: flex;
  align-items: center;
`;

const ArtistContainer = styled.div`
  min-height: calc(100vh - 26.3rem);
  height: fit-content;
  background: var(--gradation-bg);
  gap: 0.75rem;
  padding: 3rem 1.25rem 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: flex-start;
`;

const ArtistCard = styled.div`
  overflow: hidden;
  position: relative;
  background-color: var(--black-100);
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  img {
    width: 100%;
    position: absolute;
  }
`;
