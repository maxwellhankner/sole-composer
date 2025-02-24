import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"

function NewDesignButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/designer`);
  };
  
  return (
    <Button 
      onClick={handleClick}
      className="px-6 py-3 text-sm tracking-widest hover:bg-primary/90"
    >
      N E W &nbsp; D E S I G N
    </Button>
  );
}

export default NewDesignButton;
