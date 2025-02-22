import React from 'react';
import { NewDesignButtonStyled } from './styledComponents';
import { useNavigate } from 'react-router-dom';

function NewDesignButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/designer`);
  };
  return (
    <NewDesignButtonStyled onClick={() => handleClick()}>
      N E W &nbsp; D E S I G N
    </NewDesignButtonStyled>
  );
}

export default NewDesignButton;
