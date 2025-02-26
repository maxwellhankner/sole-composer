import React from 'react';

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white z-[1]">
      <div className="relative left-1/2 top-1/2 w-[150px] h-[150px] -mt-[75px] -ml-[75px] border-[16px] border-[#e9e9e9] border-t-[#333333] rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner; 