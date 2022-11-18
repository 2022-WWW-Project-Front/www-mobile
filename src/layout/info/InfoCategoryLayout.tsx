import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ListProps {
  category: string;
  url: string;
}

interface InfoCategoryProps {
  list: Array<ListProps>;
  active: string;
  setActive: (category: string) => void;
}

export const InfoCategoryLayout = ({ list, active, setActive }: InfoCategoryProps) => {
  return (
    <CategoryGrid>
      {list.map(({ category, url }: ListProps) => (
        <Link
          key={category}
          to={`/www${url}`}
          style={{ textDecoration: 'none' }}
          onClick={() => setActive(category)}
        >
          <Tab bgColor={active === category ? 'var(--main2)' : 'var(--main1)'}>{category}</Tab>
        </Link>
      ))}
    </CategoryGrid>
  );
};

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
`;

const Tab = styled.div<{ bgColor: string }>`
  height: 2.5rem;
  color: var(--white);
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
`;
