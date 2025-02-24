import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../shared/context/UserContext';
import { P } from '../../features/landing/components/ui/typography';
import { Button } from '../../shared/ui/button';

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
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-[400px] w-full mx-auto flex flex-col items-center gap-6 p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <P className="text-2xl font-bold">Profile</P>
          {userData && (
            <div className="flex flex-col items-center gap-2">
              <img 
                src={userData.photos[0].value} 
                alt="Profile" 
                className="w-20 h-20 rounded-full border border-black/10"
              />
              <P className="text-xl">{userData.displayName}</P>
              <P className="text-gray-500">{userData.emails[0].value}</P>
            </div>
          )}
        </div>
        
        <div className="flex flex-col w-full gap-3">
          <Link to="/" className="w-full">
            <Button variant="outline" className="w-full">
              Return Home
            </Button>
          </Link>
          <Button 
            variant="destructive" 
            onClick={() => handleLogout()}
            className="w-full"
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
