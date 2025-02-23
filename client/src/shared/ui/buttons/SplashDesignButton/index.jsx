import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SplashButton } from './styledComponents';

function SplashDesignButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/designer`);
  };
  return (
    <SplashButton onClick={() => handleClick()}>
      START DESIGNING
    </SplashButton>
  );
}

export default SplashDesignButton;
