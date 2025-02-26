import React from 'react';
import Toggle from './Toggle';
import { LeftInterfaceContainer } from '../ui';

function Visibility({
  currentShoe,
  setCurrentShoe,
  shoeVisibility,
  setShoeVisibility,
}) {
  return (
    <div className="w-1/2 ml-auto bg-[#212121] rounded-[9px]">
      <LeftInterfaceContainer>
        <Toggle
          currentShoe={currentShoe}
          setCurrentShoe={setCurrentShoe}
          visibility={shoeVisibility}
          setVisibility={setShoeVisibility}
        />
      </LeftInterfaceContainer>
    </div>
  );
}

export default Visibility;
