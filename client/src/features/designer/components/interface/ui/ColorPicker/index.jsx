import React from 'react';
import { CustomPicker } from 'react-color';
import CurrentColors from './CurrentColors';
import {
  EditableInput,
  Hue,
  Saturation,
} from 'react-color/lib/components/common';
import {
  CustomColorPointer,
  CustomColorPointerOffset,
} from './CustomColorPointers/index.jsx';
import {
  InterfaceSingleButtons,
  InterfaceDoubleButtons,
  InterfaceButton,
  InterfaceButtonBox,
} from '../../../../../designer/ui';

export const CustomColor = ({
  hex,
  hsl,
  hsv,
  onChange,
  handleColorChange,
  colorsArray,
}) => {
  return (
    <div>
      <div>
        <InterfaceSingleButtons>
          <InterfaceButtonBox>
            <div className="h-5 relative overflow-hidden border border-[#343434] rounded">
              <Hue
                hsl={hsl}
                onChange={onChange}
                pointer={CustomColorPointerOffset}
              />
            </div>
          </InterfaceButtonBox>

          <InterfaceButtonBox>
            <div className="w-full h-[120px] relative overflow-hidden border border-[#343434] rounded">
              <Saturation
                hsl={hsl}
                hsv={hsv}
                onChange={onChange}
                pointer={CustomColorPointer}
              />
            </div>
          </InterfaceButtonBox>

          {colorsArray && (
            <CurrentColors
              colorsArray={colorsArray}
              handleColorChange={handleColorChange}
            />
          )}
        </InterfaceSingleButtons>

        <InterfaceDoubleButtons>
          <InterfaceButtonBox>
            <InterfaceButton
              $active
              onClick={() =>
                handleColorChange(
                  '#' +
                    (
                      '00000' + ((Math.random() * (1 << 24)) | 0).toString(16)
                    ).slice(-6)
                )
              }
            >
              Random
            </InterfaceButton>
          </InterfaceButtonBox>

          <InterfaceButtonBox>
            <div className="rounded flex justify-between w-full min-w-0">
              <input
                type="text"
                value={hex}
                onChange={(e) => onChange({ hex: e.target.value })}
                className="w-full h-[38px] mr-[3px] border border-white rounded text-sm pl-2 pr-0 shadow-none appearance-none"
              />
              <div
                className="flex-none w-[38px] h-[38px] ml-[3px] rounded"
                style={{ backgroundColor: hex }}
              />
            </div>
          </InterfaceButtonBox>
        </InterfaceDoubleButtons>
      </div>
    </div>
  );
};

export default CustomPicker(CustomColor);
