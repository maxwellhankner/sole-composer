import React from 'react';
import { Link } from 'react-router-dom';
import { P } from '../../shared/ui/typography';
import { Button } from '../../shared/ui/button';

function NoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-[400px] w-full mx-auto flex flex-col items-center gap-6 p-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <P className="text-4xl font-bold">404</P>
          <P className="text-xl">Page Not Found</P>
          <P className="text-gray-500">The page you're looking for doesn't exist or has been moved.</P>
        </div>
        <Link to="/">
          <Button variant="outline">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default NoPage;
