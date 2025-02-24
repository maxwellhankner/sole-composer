import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Header } from '../../components/ui';
import { H3, P } from '../../components/ui/typography';
import { Carousel } from "../../components/ui/carousel";
import { FeaturedDesignCard } from '../../shared/ui/Cards';
import LandingSplash from '../../shared/ui/LandingSplash';
import MyDesigns from '../../shared/ui/MyDesigns';
import { useFeaturedDesigns } from './hooks/useFeaturedDesigns';
import { useMyDesigns } from './hooks/useMyDesigns';
import { useUserContext } from '../../shared/hooks/useUserContext';

function Landing() {
  const { userData } = useUserContext();
  const { featured } = useFeaturedDesigns();
  const { myDesigns } = useMyDesigns(userData);
  const navigate = useNavigate();

  return (
    <div className="h-full font-roboto">
      <Header />

      {!userData && <LandingSplash />}

      <div className="w-full px-4 md:max-w-[1100px] md:mx-auto">
        <FeaturedSection designs={featured?.featured} userData={userData} />
        
        {userData && (
          <Button 
            variant="outline"
            className="mx-auto block"
            onClick={() => navigate('/designer')}
          >
            NEW DESIGN
          </Button>
        )}

        {!userData && (
          <div className="mb-[60px] text-center">
            <Button 
              variant="outline"
              disabled
            >
              Sign Up (Disabled)
            </Button>
          </div>
        )}

        <MyDesignsSection designs={myDesigns} />
      </div>
    </div>
  );
}

const FeaturedSection = ({ designs, userData }) => {
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
};

const MyDesignsSection = ({ designs }) => {
  if (!designs) return null;

  return (
    <>
      <H3 className="ml-4 mb-2">MY DESIGNS</H3>
      <MyDesigns myDesigns={designs} />
    </>
  );
};

export default Landing;
