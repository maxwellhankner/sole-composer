import React from 'react';
import { Link } from 'react-router-dom';

function MyDesigns({ myDesigns }) {
  return (
    <div className="w-full mb-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 m-1 md:m-4">
        {myDesigns.map((design, key) => (
          <Link
            key={key}
            to={`/designer/${design._id}`}
            className="block w-full bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="w-full">
              <img
                src={`/api/assets/images/${design.screenshot}`}
                alt="my-design-preview"
                className="w-full h-auto"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MyDesigns; 