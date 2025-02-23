import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles/Carousel.css';
import UserProvider from '../../shared/context/UserContext';
import { simpleFetch } from '../../shared/utils/helpers/fetchHelpers';
import { Button } from '../../components/ui/button';
import {
  LandingContainer,
  LandingContent,
  LandingHeader,
  FeaturedDesignsContainer,
  LandingSignUpContainer,
  LandingHeaderTitle,
  LandingSectionLabel,
  LandingSpacing,
  HeaderSpacing,
} from './styles/Landing.styles';
import { FeaturedDesignCard } from '../../shared/ui/Cards';
import LandingSplash from '../../shared/ui/LandingSplash';
import MyDesigns from '../../shared/ui/MyDesigns';

function Landing() {
  const userData = useContext(UserProvider.context);
  const [featured, setFeatured] = useState();
  const [myDesigns, setMyDesigns] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    simpleFetch('/api/featured', 'GET')
      .then((data) => setFeatured(data));

    if (userData) {
      simpleFetch('/api/outlines/mydesigns', 'GET')
        .then((data) => setMyDesigns(data));
    }
  }, [userData]);

  let items = featured
    ? featured.featured.map((design, key) => (
        <FeaturedDesignCard props={design} userData={userData} key={key} />
      ))
    : null;

  const responsive = {
    0: { items: 1.7 },
    700: { items: 3 },
  };

  return (
    <LandingContainer>
      <LandingHeader>
        <LandingHeaderTitle>
          <strong>Sole</strong> Composer
        </LandingHeaderTitle>

        {userData ? (
          <Link to="/profile">{userData.firstName}</Link>
        ) : (
          <Button 
            variant="ghost"
            className="opacity-70 cursor-not-allowed"
            onClick={(e) => e.preventDefault()}
          >
            Login (Disabled)
          </Button>
        )}
      </LandingHeader>

      <HeaderSpacing />

      {!userData && <LandingSplash />}

      <LandingContent>
        {featured && (
          <FeaturedDesignsContainer>
            <LandingSectionLabel>FEATURED</LandingSectionLabel>
            <AliceCarousel responsive={responsive} items={items} />
          </FeaturedDesignsContainer>
        )}

        {userData && (
          <Button 
            variant="outline" 
            size="lg"
            className="w-full max-w-sm tracking-widest"
            onClick={() => navigate('/designer')}
          >
            NEW DESIGN
          </Button>
        )}

        {!userData && (
          <LandingSignUpContainer>
            <Button 
              variant="secondary"
              size="lg"
              className="w-full max-w-sm opacity-70 cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
            >
              Sign Up (Disabled)
            </Button>
          </LandingSignUpContainer>
        )}

        {myDesigns && <LandingSectionLabel>MY DESIGNS</LandingSectionLabel>}
        {myDesigns && <MyDesigns myDesigns={myDesigns} />}
      </LandingContent>
    </LandingContainer>
  );
}

export default Landing;
