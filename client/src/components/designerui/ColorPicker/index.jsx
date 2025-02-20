import React from 'react';
import styled from 'styled-components';
import { CustomPicker } from 'react-color';
import CurrentColors from './CurrentColors';
import {
  EditableInput,
  Hue,
  Saturation,
} from 'react-color/lib/components/common';
import {
  CustomColorContainer,
  HueContainer,
  SaturationContainer,
  CustomColorInputContainer,
  CustomColorInputSwatch,
} from './styledComponents';
import {
  CustomColorPointer,
  CustomColorPointerOffset,
} from './CustomColorPointers';
import {
  InterfaceSingleButtons,
  InterfaceDoubleButtons,
  InterfaceButton,
  InterfaceButtonBox,
} from '../';

const ColorPickerWrapper = styled.div`
  /* Wrapper to prevent props from being passed to DOM */
`;

export const CustomColor = ({
  hex,
  hsl,
  hsv,
  onChange,
  handleColorChange,
  colorsArray,
}) => {
  return (
    <ColorPickerWrapper>
      <CustomColorContainer>
      <InterfaceSingleButtons>
        <InterfaceButtonBox>
          <HueContainer>
            <Hue
              hsl={hsl}
              onChange={onChange}
              pointer={CustomColorPointerOffset}
            />
          </HueContainer>
        </InterfaceButtonBox>

        <InterfaceButtonBox>
          <SaturationContainer>
            <Saturation
              hsl={hsl}
              hsv={hsv}
              onChange={onChange}
              pointer={CustomColorPointer}
            />
          </SaturationContainer>
        </InterfaceButtonBox>

        <CurrentColors
          colorsArray={colorsArray}
          handleColorChange={handleColorChange}
        />
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
          <CustomColorInputContainer>
            <EditableInput
              className="editable-input"
              value={hex}
              onChange={onChange}
            />
            <CustomColorInputSwatch color={hex}></CustomColorInputSwatch>
          </CustomColorInputContainer>
        </InterfaceButtonBox>
      </InterfaceDoubleButtons>
      </CustomColorContainer>
    </ColorPickerWrapper>
  );
};

export default CustomPicker(CustomColor);
