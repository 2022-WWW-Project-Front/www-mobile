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
            to={`/www${url}`}
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
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
`;

const Tab = styled.div`
  height: 40px;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
