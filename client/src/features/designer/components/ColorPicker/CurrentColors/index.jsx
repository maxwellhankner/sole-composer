import React from 'react';
import { InterfaceButtonBox } from '../../../designerui';

function CurrentColors({ colorsArray, handleColorChange }) {
  return (
    <InterfaceButtonBox>
      <div className="w-full min-w-0 flex flex-[0_1_auto] overflow-auto rounded scrollbar-hide">
        {colorsArray.map((color, i) => (
          <button
            className="w-[38px] h-[38px] mr-[3px] rounded flex-none border-none focus:outline-none last:mr-0"
            style={{ backgroundColor: color }}
            key={i}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
    </InterfaceButtonBox>
  );
}

export default CurrentColors;
