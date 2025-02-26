import React, { useState, useEffect } from 'react';
import { uploadImage } from '../../../../utils/helpers/uploadImage';
import { convertAwsLink } from '../../../../utils/helpers/convertAwsLink';
import CurrentGraphics from './CurrentGraphics';
import {
  LeftInterfaceContainer,
  InterfaceTitle,
  InterfaceSingleButtons,
  InterfaceButtonBox,
  InterfaceButton,
  LoadingSpinner
} from '../../ui';

function GraphicPicker({ props }) {
  const { setLayersView, handleAddLayer, design } = props;

  const [warning, setWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [graphicsArray, setGraphicsArray] = useState();

  useEffect(() => {
    const getGraphicsArray = () => {
      const graphics = ['red-apple.png'];

      // parts
      for (const property in design.outlineData.parts) {
        for (const layer in design.outlineData.parts[property].right) {
          if (
            design.outlineData.parts[property].right[layer].type === 'graphic'
          ) {
            const thisGraphic =
              design.outlineData.parts[property].right[layer].link;
            if (!graphics.includes(thisGraphic)) {
              graphics.push(thisGraphic);
            }
          }
        }
        for (const layer in design.outlineData.parts[property].left) {
          if (
            design.outlineData.parts[property].left[layer].type === 'graphic'
          ) {
            const thisGraphic =
              design.outlineData.parts[property].left[layer].link;
            if (!graphics.includes(thisGraphic)) {
              graphics.push(thisGraphic);
            }
          }
        }
      }
      // overlays
      for (const property in design.outlineData.overlays) {
        for (const layer in design.outlineData.overlays[property].right) {
          if (
            design.outlineData.overlays[property].right[layer].type ===
            'graphic'
          ) {
            const thisGraphic =
              design.outlineData.overlays[property].right[layer].link;
            if (!graphics.includes(thisGraphic)) {
              graphics.push(thisGraphic);
            }
          }
        }
        for (const layer in design.outlineData.overlays[property].left) {
          if (
            design.outlineData.overlays[property].left[layer].type === 'graphic'
          ) {
            const thisGraphic =
              design.outlineData.overlays[property].left[layer].link;
            if (!graphics.includes(thisGraphic)) {
              graphics.push(thisGraphic);
            }
          }
        }
      }
      if (!graphics[0]) {
        return null;
      } else {
        return graphics;
      }
    };

    setGraphicsArray(getGraphicsArray());
  }, [design]);

  const onFileChange = async (e) => {
    const fileSize = (e.target.files[0].size / 1024 / 1024).toFixed(4); // MB
    if (fileSize < 2) {
      setIsLoading(true);
      const file = e.target.files[0];
      await uploadImage(file, true).then((data) => {
        const awsFileName = convertAwsLink(data.image);
        handleAddGraphicLayer(awsFileName);
      });
    } else {
      setWarning(true);
    }
  };

  const handleAddGraphicLayer = (fileName) => {
    handleAddLayer('Graphic', fileName);
    setLayersView('LayersMain');
  };

  if (isLoading) {
    return (
      <LeftInterfaceContainer>
        <LoadingSpinner />
      </LeftInterfaceContainer>
    );
  }

  return (
    <LeftInterfaceContainer>
      <InterfaceTitle>Graphics</InterfaceTitle>
      {graphicsArray && (
        <div className="w-full mb-4">
          <CurrentGraphics
            graphicsArray={graphicsArray}
            handleAddGraphicLayer={handleAddGraphicLayer}
          />
        </div>
      )}
      <div className="m-[6px]">
        <div className="box-border border border-[#343434] rounded-[6px] bg-black p-[3px]">
          <label 
            htmlFor="image-input-id" 
            className="block w-full h-[38px] box-border border border-[#343434] rounded-[3px] bg-[#f9f9f9] text-[#333333] p-0 text-base cursor-pointer flex items-center justify-center"
          >
            <input
              onChange={(e) => onFileChange(e)}
              id="image-input-id"
              type="file"
              name="myImage"
              accept="image/png, image/jpeg, .png, .jpg"
              className="hidden"
            />
            Upload
          </label>
        </div>
      </div>

      {warning && (
        <div className="text-center text-base text-[#ff5555]">
          <p>file must be less that 2MB.</p>
        </div>
      )}

      <InterfaceSingleButtons>
        <InterfaceButtonBox>
          <InterfaceButton $active onClick={() => setLayersView('LayersMain')}>
            Cancel
          </InterfaceButton>
        </InterfaceButtonBox>
      </InterfaceSingleButtons>
    </LeftInterfaceContainer>
  );
}

export default GraphicPicker;
