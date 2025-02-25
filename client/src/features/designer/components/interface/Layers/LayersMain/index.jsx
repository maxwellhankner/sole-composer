import React from 'react';
import { handleConvertPartName } from '../../../../utils/helpers/convertPartNames';
import { FaChevronUp, FaChevronDown, FaPlus, FaTrash } from 'react-icons/fa';
import PartSelector from './PartSelector';
import {
  InterfaceIconButtonBox,
  InterfaceIconButton
} from '../../../../ui';

function LayersMain({ props }) {
  const {
    allLayers,
    currentPart,
    design,
    currentLayer,
    numberOfLayers,
    setCurrentLayer,
    setCurrentPart,
    setLayersView,
    handleDeleteLayer,
    handleEditLayer,
    handleMoveLayer,
    currentShoe,
    setCurrentShoe,
  } = props;

  const deleteLayer = (index) => {
    if (index !== -1) {
      if (allLayers[index].type !== 'overlay') {
        handleDeleteLayer(index);
      }
    }
  };

  const moveLayer = (index, direction) => {
    if (index !== -1) {
      if (direction === -1) {
        if (index !== 0) {
          handleMoveLayer(index, direction);
        }
      } else {
        if (index !== numberOfLayers - 1) {
          handleMoveLayer(index, direction);
        }
      }
    }
  };

  const setNoCurrentLayer = (e) => {
    e.preventDefault();
    if (e.target.id === 'layers-box') {
      setCurrentLayer(-1);
    }
  };

  return (
    <div>
      <PartSelector
        design={design}
        currentPart={currentPart}
        setCurrentPart={setCurrentPart}
        setCurrentLayer={setCurrentLayer}
        setLayersView={setLayersView}
        currentShoe={currentShoe}
        setCurrentShoe={setCurrentShoe}
      />

      <div className="h-[5px] bg-black border-t border-b border-[#343434] border-x-0"></div>

      <div className="m-[6px] flex justify-between">
        <div className="flex flex-col justify-center">
          <p className="text-base text-white m-0 pl-[6px]">Layers</p>
        </div>
        <div className="flex [&>svg]:text-white">
          <InterfaceIconButtonBox>
            <InterfaceIconButton
              $active={
                currentLayer !== -1 &&
                allLayers?.[currentLayer]?.type !== 'overlay'
              }
              onClick={() => deleteLayer(currentLayer)}
            >
              <FaTrash />
            </InterfaceIconButton>
          </InterfaceIconButtonBox>
          <InterfaceIconButtonBox>
            <InterfaceIconButton
              $active={
                currentLayer !== -1 && numberOfLayers - 1 !== currentLayer
              }
              onClick={() => moveLayer(currentLayer, 1)}
            >
              <FaChevronUp />
            </InterfaceIconButton>
          </InterfaceIconButtonBox>
          <InterfaceIconButtonBox>
            <InterfaceIconButton
              $active={currentLayer !== -1 && 0 !== currentLayer}
              onClick={() => moveLayer(currentLayer, -1)}
            >
              <FaChevronDown />
            </InterfaceIconButton>
          </InterfaceIconButtonBox>
          <InterfaceIconButtonBox>
            <InterfaceIconButton
              $active
              onClick={() => setLayersView('AddLayerType')}
            >
              <FaPlus />
            </InterfaceIconButton>
          </InterfaceIconButtonBox>
        </div>
      </div>

      <div 
        id="layers-box" 
        onClick={(e) => setNoCurrentLayer(e)}
        className="flex flex-col overflow-hidden h-[150px] m-[6px] border border-[#343434] rounded-[6px] bg-black p-[3px]"
      >
        <div className="flex flex-col overflow-auto">
          <div className="flex flex-col-reverse justify-end rounded-[4px]">
            {allLayers.map((layer, i) => (
              <div
                key={i}
                className="h-[40px] flex-shrink-0 flex flex-row mb-[3px] text-base capitalize overflow-hidden first:mb-0"
                onClick={() => {
                  if (i === currentLayer) {
                    handleEditLayer(i, layer);
                  } else {
                    setCurrentLayer(i);
                  }
                }}
              >
                <div className="w-[40px] mr-[3px] flex flex-col rounded-[4px] bg-[#212121]">
                  {layer.type === 'color' ? (
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundColor: layer.color,
                      }}
                    ></div>
                  ) : layer.type === 'graphic' ? (
                    <img
                      src={`/api/assets/images/${layer.link}`}
                      className="w-full h-full object-cover"
                      alt="design-graphic"
                    />
                  ) : layer.type === 'mask' ? (
                    <img
                      src={`/api/assets/designimages/${layer.link}`}
                      className="w-full h-full object-cover"
                      alt="design-graphic"
                    />
                  ) : (
                    <img
                      src={`/api/assets/designimages/${layer.source}Mask.png`}
                      className="w-full h-full object-cover"
                      alt="design-graphic"
                    />
                  )}
                </div>
                <div 
                  className={`flex-grow flex flex-col justify-center rounded-[4px] ${
                    i === currentLayer 
                      ? 'bg-[#EEEEEE] text-black border border-[#EEEEEE]' 
                      : 'bg-[#212121] text-[#EEEEEE] border border-[#343434]'
                  }`}
                >
                  <p className="m-0 pl-[10px]">
                    {layer.type === 'overlay'
                      ? handleConvertPartName(layer.source).toLowerCase()
                      : layer.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayersMain;
