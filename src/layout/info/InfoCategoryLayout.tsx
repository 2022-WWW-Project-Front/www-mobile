import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface ListProps {
  category: string;
  url: string;
}

interface InfoCategoryProps {
  list: Array<ListProps>;
}

export const InfoCategoryLayout = ({ list }: InfoCategoryProps) => {
  return (
    <div>
      <CategoryGrid>
        {list.map(({ category, url }: ListProps) => (
          <NavLink
            key={category}
            to={`/www/${url}`}
            style={({ isActive }) => ({
              backgroundColor: isActive ? 'var(--main2)' : 'var(--main1)',
              textDecoration: 'none'
            })}
          >
            <Tab>{category}</Tab>
          </NavLink>
        ))}
      </CategoryGrid>
    </div>
  );
};

const CategoryGrid = styled.div`
  display: grid;
  background-color: var(--white);
  position: fixed;
  z-index: 10;
  top: 4.625rem;
  width: 100vw;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
`;

const Tab = styled.div`
  height: 2.5rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
`;
