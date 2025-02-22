import React, { useContext } from 'react';
import UserProvider from '../../shared/context/UserContext';
import { Link } from 'react-router-dom';
import { ProfileContainer } from './Profile.styles';
import { MenuButton } from '../../shared/ui/Buttons';
import { MenuPara } from '../../shared/ui/Text';

function Profile() {
  const userData = useContext(UserProvider.context);

  const handleLogout = () => {
    if (process.env.NODE_ENV === 'production') {
      window.open(`http://solecomposer.com/auth/logout`, '_self');
    } else {
      window.open(`http://localhost:8000/auth/logout`, '_self');
    }
  };

  return (
    <ProfileContainer>
      <MenuPara>{userData.firstName}</MenuPara>
      <MenuPara>{userData.email}</MenuPara>
      <MenuButton onClick={() => handleLogout()}>Log Out</MenuButton>
      <Link to="/">
        <MenuButton>Back</MenuButton>
      </Link>
    </ProfileContainer>
  );
}

export default Profile;
