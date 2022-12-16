import React from 'react';
import styled from 'styled-components';

interface CreditProps {
  DirectorList: {
    part: string;
    list: {
      role: string;
      name: string;
      mw?: string;
      email?: string | null;
      links?: string | null;
    }[];
  }[];
}

const CreditLayout = ({ DirectorList }: CreditProps) => {
  return (
    <div>
      <TitleArea>
        <div>CREDIT</div>
        <SubTitle>
          <span>Director</span>
          <span>DISP</span>
        </SubTitle>
      </TitleArea>
      <GridContainer>
        <CreditRole>
          <div>Lead</div>
          <div>Serve</div>
          <div>Assist</div>
        </CreditRole>
        {DirectorList.map(({ part, list }, idx) => (
          <GridCard key={idx} className="card">
            <strong>{part}</strong>
            {list.map(({ role, name, mw, email, links }) => (
              <Member
                key={name}
                bgColor={role}
                linked={Boolean(links || email)}
                onClick={() => {
                  if (links) {
                    window.open(links);
                  } else if (email) {
                    navigator.clipboard.writeText(email).then(() => alert('copied e-mail'));
                  }
                }}
              >
                <span>{name}</span>
                {mw && <p className="mw">{mw}</p>}
              </Member>
            ))}
          </GridCard>
        ))}
      </GridContainer>
    </div>
  );
};

export default CreditLayout;

const TitleArea = styled.div`
  position: relative;
  height: 9.375rem;
  padding-bottom: 1.4rem;
  border-bottom: var(--black-100) solid 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'www', 'Pretendard', sans-serif;
  font-size: 1.688rem;
  color: var(--black-400);
`;

const SubTitle = styled.div`
  position: absolute;
  bottom: 1.75rem;
  color: var(--black-200);
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  width: 6.938rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const CreditRole = styled.div`
  background-color: var(--white);
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: var(--black-100) 1px solid;
  font-weight: 600;
  font-size: 0.9rem;
  color: #707070;
  div {
    position: relative;
    margin: 0 0.938rem;
    padding-left: 1.563rem;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      width: 0.813rem;
      height: 0.813rem;
    }
  }
  div:first-child:before {
    background-color: var(--lead);
  }
  div:nth-child(2):before {
    background-color: var(--serve);
  }
  div:last-child:before {
    background-color: var(--assist);
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 5.25rem repeat(6, 11.5rem);
  margin-bottom: 12.5rem;
  .card:nth-child(2n-1) {
    border-left: var(--black-100) 1px solid;
  }
`;

const GridCard = styled.div`
  background-color: var(--white);
  color: var(--black-200);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 2.15rem 0 0 2rem;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  border-bottom: var(--black-100) 1px solid;

  strong {
    margin-bottom: 0.1rem;
  }
`;

const Member = styled.div<{ bgColor: string; linked: boolean }>`
  font-weight: 500;
  position: relative;
  padding: 0.813rem 0 0 1.563rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #707070;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 0.813rem;
    height: 0.813rem;
    background-color: ${({ bgColor }) => bgColor};
  }
  span {
    text-decoration-color: inherit;
    ${({ linked }) => linked && 'text-decoration: underline;'}
  }
  .mw {
    color: var(--black-100);
    padding-top: 0.438rem;
    font-weight: 400;
  }
`;
