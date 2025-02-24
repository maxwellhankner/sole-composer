import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../shared/context/UserContext';
import { ProfileContainer } from './Profile.styles';
import { P } from '../../components/ui/typography';
import { Button } from '../../components/ui/button';

function Profile() {
  const { userData } = useUserContext();

  const handleLogout = () => {
    if (process.env.NODE_ENV === 'production') {
      window.open(`http://solecomposer.com/auth/logout`, '_self');
    } else {
      window.open(`http://localhost:8000/auth/logout`, '_self');
    }
  };

  return (
    <ProfileContainer>
      <P>Profile</P>
      <Link to="/">Return Home</Link>
      <Button onClick={() => handleLogout()}>Log Out</Button>
    </ProfileContainer>
  );
}

export default Profile;
