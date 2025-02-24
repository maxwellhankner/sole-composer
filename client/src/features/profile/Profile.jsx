import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../shared/context/UserContext';
import { P } from '../../features/landing/components/ui/typography';
import { Button } from '../../features/landing/components/ui/button';

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
    <div className="max-w-[400px] mx-auto flex flex-col p-4">
      <P>Profile</P>
      <Link to="/">Return Home</Link>
      <Button onClick={() => handleLogout()}>Log Out</Button>
    </div>
  );
}

export default Profile;
