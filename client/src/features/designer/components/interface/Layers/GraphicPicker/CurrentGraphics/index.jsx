import React from 'react';

function CurrentGraphics({ graphicsArray, handleAddGraphicLayer }) {
  return (
    <div className='min-w-full flex flex-nowrap overflow-x-auto touch-pan-x scrollbar-hide'>
      {graphicsArray.map((graphic, i) => (
        <div
          className={`w-[100px] h-[100px] flex-none overflow-hidden text-center ${i === 0 ? 'ml-4' : ''} mr-[10px]`}
          key={i}
          onClick={() => handleAddGraphicLayer(graphic)}
        >
          <img src={`/api/assets/images/${graphic}`} alt='used-already' className='max-w-full max-h-full'></img>
        </div>
      ))}
    </div>
  );
}

export default CurrentGraphics;
