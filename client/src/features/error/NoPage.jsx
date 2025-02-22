import React from 'react';
import { Link } from 'react-router-dom';
import { NoPageContainer } from './NoPage.styles';
import { MenuButton } from '../../shared/ui/Buttons';
import { MenuPara } from '../../shared/ui/Text';

function NoPage() {
  return (
    <NoPageContainer>
      <MenuPara>404 - PAGE NOT FOUND</MenuPara>
      <Link to="/">
        <MenuButton>Home</MenuButton>
      </Link>
    </NoPageContainer>
  );
}

export default NoPage;
