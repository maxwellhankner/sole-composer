import React from 'react';
import { Link } from 'react-router-dom';
import { P } from '../../features/landing/components/ui/typography';

function NoPage() {
  return (
    <div className="max-w-[400px] mx-auto flex flex-col p-4">
      <P>Page Not Found</P>
      <Link to="/">Return Home</Link>
    </div>
  );
}

export default NoPage;
