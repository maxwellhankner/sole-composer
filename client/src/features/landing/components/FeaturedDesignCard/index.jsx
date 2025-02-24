import React from 'react';
import { useNavigate } from 'react-router-dom';
import { H3, P } from '../../../../components/ui/typography';

function FeaturedDesignCard({ props }) {
  const { _id, title, configId, author, screenshot } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/designer/${_id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="cursor-pointer rounded-md bg-white border border-black/10 hover:border-black/20 shadow-sm hover:shadow transition-all duration-200 overflow-hidden"
    >
      <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
        <img 
          src={`api/assets/images/${screenshot}`} 
          alt="feature-design"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 space-y-2">
        <H3 className="text-lg">{title}</H3>
        <P className="text-sm text-gray-600">{configId.modelName}</P>
        <P className="text-sm text-gray-500">{author.firstName}</P>
      </div>
    </div>
  );
}

export default FeaturedDesignCard; 