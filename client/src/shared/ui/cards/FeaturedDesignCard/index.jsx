import React from 'react';
import { useNavigate } from 'react-router-dom';

function FeaturedDesignCard({ props }) {
  const { _id, title, configId, author, screenshot } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/designer/${_id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="cursor-pointer rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
    >
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <img 
          src={`api/assets/images/${screenshot}`} 
          alt="feature-design"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{configId.modelName}</p>
        <p className="text-sm text-gray-500">{author.firstName}</p>
      </div>
    </div>
  );
}

export default FeaturedDesignCard;
