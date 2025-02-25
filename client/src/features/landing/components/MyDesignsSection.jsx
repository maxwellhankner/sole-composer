import React from 'react';
import { H3 } from '../../../shared/ui/typography';
import MyDesigns from './MyDesigns';

function MyDesignsSection({ designs }) {
  if (!designs) return null;

  return (
    <>
      <H3 className="ml-4 mb-2">MY DESIGNS</H3>
      <MyDesigns myDesigns={designs} />
    </>
  );
}

export default MyDesignsSection; 