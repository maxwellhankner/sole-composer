import React from 'react';

function DesignInfo({ design }) {
  return (
    <div className="pb-[10px] pl-[20px]">
      <p className="m-[5px] text-[26px] text-[#212121]">{design.title}</p>
      <p className="m-[5px] text-base text-[#212121]">{design.modelName}</p>
    </div>
  );
}

export default DesignInfo;
