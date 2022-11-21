import React from 'react';
import styled from 'styled-components';

const ArtistList = () => {
  return (
    <div>
      <ArtistTitle>ARTIST</ArtistTitle>
      <ArtistContainer>
        {Array.from(Array(20).keys()).map((i) => (
          <ArtistCard key={i} />
        ))}
      </ArtistContainer>
    </div>
  );
};

export default ArtistList;

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
  height: 700px;
  background: var(--gradation-bg);
  gap: 0.75rem;
  padding: 3rem 1.25rem 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ArtistCard = styled.div`
  background-color: var(--main2);
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
