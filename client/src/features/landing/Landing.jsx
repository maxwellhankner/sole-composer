import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles/Carousel.css';
import UserProvider from '../../context/UserContext';
import { simpleFetch } from '../../utils/helpers/fetchHelpers';
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
import { NewDesignButton } from '../../components/landingui/Buttons';
import { LandingSignUpButton } from '../../components/landingui/Buttons';
import { FeaturedDesignCard } from '../../components/landingui/Cards';
import LandingSplash from '../../components/landingui/LandingSplash';
import MyDesigns from '../../components/landingui/MyDesigns';

function Landing() {
  const userData = useContext(UserProvider.context);
  const [featured, setFeatured] = useState();
  const [myDesigns, setMyDesigns] = useState();

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
          <span 
            style={{ 
              cursor: 'not-allowed', 
              opacity: 0.7,
              color: '#ffffff',
              textDecoration: 'none',
              margin: 'auto 15px'
            }}
          >
            Login (Disabled)
          </span>
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

        {userData && <NewDesignButton />}

        {!userData && (
          <LandingSignUpContainer>
            <LandingSignUpButton 
              style={{ cursor: 'not-allowed', opacity: 0.7 }} 
              onClick={(e) => e.preventDefault()}
            >
              sign up (disabled)
            </LandingSignUpButton>
          </LandingSignUpContainer>
        )}

        {myDesigns && <LandingSectionLabel>MY DESIGNS</LandingSectionLabel>}
        {myDesigns && <MyDesigns myDesigns={myDesigns} />}
      </LandingContent>
    </LandingContainer>
  );
}

export default Landing;
