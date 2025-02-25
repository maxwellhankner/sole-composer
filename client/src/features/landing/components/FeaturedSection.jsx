import React from 'react';
import { H3 } from '../../../shared/ui/typography';
import { Carousel } from "./ui/carousel";
import FeaturedDesignCard from './FeaturedDesignCard';

function FeaturedSection({ designs, userData }) {
  if (!designs) return null;

  return (
    <div className="w-full mb-8">
      <H3 className="ml-4 mb-2">FEATURED</H3>
      <div className="relative">
        <Carousel className="w-full">
          {designs.map((design, index) => (
            <FeaturedDesignCard key={index} props={design} userData={userData} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default FeaturedSection; 