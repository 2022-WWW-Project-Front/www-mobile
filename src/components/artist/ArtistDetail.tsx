import React from 'react';
import ArtistDetailLayout from '../../layout/artist/ArtistDetailLayout';
import { useNavigate } from 'react-router-dom';

const ArtistDetail = () => {
  const user = {
    profile:
      'https://avatars.githubusercontent.com/u/98644969?s=400&u=473c711eeed5bf1453e9e7522718ed012ece3235&v=4',
    name: 'Ryn',
    part: 'Visual',
    title: '작가소개 공백포함 16자제한',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 공백포한 700자로 제한합니다......`
  };
  const navigate = useNavigate();
  const backToList = () => {
    navigate('/artist');
  };

  return <ArtistDetailLayout user={user} backToList={backToList} />;
};

export default ArtistDetail;
