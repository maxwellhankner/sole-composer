import React from 'react';
import { Link } from 'react-router-dom';
import { NoPageContainer } from './NoPage.styles';
import { P } from '../../components/ui/typography';

function NoPage() {
  return (
    <NoPageContainer>
      <P>Page Not Found</P>
      <Link to="/">Return Home</Link>
    </NoPageContainer>
  );
}

export default NoPage;
