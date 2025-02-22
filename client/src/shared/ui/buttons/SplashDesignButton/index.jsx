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
      S T A R T &nbsp; D E S I G N I N G
    </SplashButton>
  );
}

export default SplashDesignButton;
