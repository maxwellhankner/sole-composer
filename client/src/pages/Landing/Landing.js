import React, { useState, useEffect, useContext } from 'react';
import './Landing.css';
import NewDesignButton from '../../components/NewDesignButton/NewDesignButton';
import FeaturedDesignCard from '../../components/FeaturedDesignCard/FeaturedDesignCard';
import MyDesignTiles from '../../components/MyDesignTiles/MyDesignTiles';
import UserProvider from '../../context/UserProvider';
import { simpleFetch } from '../../helpers/fetchHelpers';
// import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Landing() {
  const userData = useContext(UserProvider.context);
  const [featured, setFeatured] = useState();
  const [myDesigns, setMyDesigns] = useState();

  useEffect(() => {
    simpleFetch('/api/featured', 'GET')
      .then((res) => res.json())
      .then((data) => setFeatured(data));

    if (userData) {
      simpleFetch('/api/outlines/mydesigns', 'GET')
        .then((res) => res.json())
        .then((data) => setMyDesigns(data));
    }
  }, [userData]);

  return (
    <div className='landing-container'>
      <div className='landing-header'>
        <p>
          <strong>Sole</strong> Composer
        </p>
        {userData ? (
          <Link to='/profile'>{userData.firstName}</Link>
        ) : (
          <Link to='/login'>Login</Link>
        )}

        {/* <FaBars /> */}
      </div>

      <div className='landing-content'>
        <div className='featured-designs-container'>
          <p className='landing-section-label'>Featured</p>
          <div className='feature-designs'>
            {featured
              ? featured.featured.map((design, key) => (
                  <FeaturedDesignCard props={design} key={key} />
                ))
              : null}
          </div>
        </div>

        <NewDesignButton />

        {myDesigns && <MyDesignTiles myDesigns={myDesigns} />}
      </div>
    </div>
  );
}

export default Landing;
