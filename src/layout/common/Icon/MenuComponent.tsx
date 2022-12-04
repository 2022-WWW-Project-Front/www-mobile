import React from 'react';
import styled from 'styled-components';

const MenuComponent = (props: { menuName: string }) => {
  return (
    <Container>
      <Box1>
        <SmallBoxContainer>
          <SmallBox position={['top', 'left']} />
          <SmallBox position={['bottom', 'right']} />
        </SmallBoxContainer>
        <MediumBox />
      </Box1>
      <Box2 />
      <span>{props.menuName}</span>
    </Container>
  );
};

export default MenuComponent;

const Container = styled.div`
  position: relative;
  display: flex;
  filter: drop-shadow(-3px -1px 6px rgba(22, 53, 244, 0.31));
  span {
    position: absolute;
    left: 5.2rem;
    top: 3rem;
    color: var(--white);
    font-family: 'WWW', 'Pretendard', sans-serif;
    font-size: 1.5rem;
  }
`;

const Box1 = styled.div`
  width: 3rem;
`;

const SmallBoxContainer = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
`;

const SmallBox = styled.div<{ position: Array<string> }>`
  position: absolute;
  ${({ position }) => position[0]}: 0;
  ${({ position }) => position[1]}: 0;
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--main1);
`;

const MediumBox = styled.div`
  width: 100%;
  height: 4rem;
  background-color: var(--main1);
`;

const Box2 = styled.div`
  width: 16.25rem;
  height: 7rem;
  background-color: var(--main1);
`;
