import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../shared/ui/button';
import { Header, Footer } from './components/ui';
import LandingSplash from './components/LandingSplash';
import FeaturedSection from './components/FeaturedSection';
import MyDesignsSection from './components/MyDesignsSection';
import { useFeaturedDesigns } from './hooks/useFeaturedDesigns';
import { useMyDesigns } from './hooks/useMyDesigns';
import { useUserContext } from '../../shared/context/UserContext';
import { P } from '../../shared/ui/typography';

function Landing() {
  const { userData, isLoading, error } = useUserContext();
  const { featured } = useFeaturedDesigns();
  const { myDesigns } = useMyDesigns(userData);
  const navigate = useNavigate();

  return (
    <div className="h-full font-roboto">
      <Header />

      {isLoading ? (
        <div className="py-16 text-center">
          <P>Loading...</P>
        </div>
      ) : (
        <>
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

            <MyDesignsSection designs={myDesigns} />
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default Landing;
