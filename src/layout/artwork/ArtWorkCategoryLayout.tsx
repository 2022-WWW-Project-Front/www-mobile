import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores';

interface ArtWorkCategoryProps {
  category: {
    part: string;
    image: (active?: boolean) => JSX.Element;
  }[];
  changeSlide: (part: string, idx: number) => void;
}

const ArtWorkCategoryLayout = ({ category, changeSlide }: ArtWorkCategoryProps) => {
  const path = useSelector((state: RootState) => state.artwork).activePart;
  return (
    <ArtworkCategoryContainer>
      {category.map(({ part, image }, idx) => (
        <div key={part} onClick={() => changeSlide(part, idx)}>
          <div>
            {image(path.includes(part))}
            <span style={{ color: path === part ? 'var(--white)' : '#FFFFFF80' }}>{part.toUpperCase()}</span>
          </div>
        </div>
      ))}
    </ArtworkCategoryContainer>
  );
};

export default ArtWorkCategoryLayout;

const ArtworkCategoryContainer = styled.div`
  position: fixed;
  top: 4.625rem;
  border-top: 1px var(--white) solid;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  padding: 0.625rem 0 1.625rem;
  width: 100%;
  min-width: 330px;
  background-color: var(--main1);
  a {
    text-decoration: none;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        margin-top: 0.625rem;
      }
    }
  }
`;
