import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { handleConvertPartName } from '../../../../../utils/helpers/convertPartNames';
import { InterfaceSingleButtons } from '../../../../../ui';

function PartSelector({
  design,
  currentPart,
  setCurrentPart,
  setCurrentLayer,
  setLayersView,
  currentShoe,
  setCurrentShoe,
}) {
  const numberOfParts = design.configData.partsArray.length;
  const arrayOfParts = design.configData.partsArray;

  const handlePartChange = (i) => {
    if (currentPart === 0 && i < 0) {
      setCurrentPart(numberOfParts - 1);
    } else if (currentPart === numberOfParts - 1 && i > 0) {
      setCurrentPart(0);
    } else {
      setCurrentPart(currentPart + i);
    }
  };

  const handleShoeChange = () => {
    if (currentShoe === 'right') {
      setCurrentShoe('left');
    } else {
      setCurrentShoe('right');
    }
  };

  return (
    <InterfaceSingleButtons>
      <div className="flex w-full justify-center">
        <div className="box-border border border-[#343434] rounded-[6px] bg-black p-[3px]">
          <button
            className="box-border border border-[#343434] rounded-[4px] text-white w-[38px] h-[38px] bg-[#212121] p-0 text-base flex flex-col justify-center items-center focus:outline-none [&>svg]:text-white"
            onClick={() => {
              handlePartChange(-1);
              setCurrentLayer(-1);
            }}
          >
            <FaChevronLeft />
          </button>
        </div>

        <div className="box-border border border-[#343434] rounded-[6px] bg-black p-[3px]">
          <button
            className="box-border border border-[#343434] rounded-[4px] text-white w-[38px] h-[38px] bg-[#212121] p-0 text-base flex flex-col justify-center items-center focus:outline-none"
            onClick={() => {
              handleShoeChange(-1);
              setCurrentLayer(-1);
            }}
          >
            {currentShoe[0].toUpperCase()}
          </button>
        </div>

        <div className="w-full min-w-0 box-border border border-[#343434] rounded-[6px] bg-black p-[3px]">
          <button
            className="w-full h-[38px] text-center border border-[#343434] bg-[#212121] text-white text-base p-0 flex flex-col justify-center items-center focus:outline-none"
            onClick={() => {
              setLayersView('PartList');
            }}
          >
            {handleConvertPartName(arrayOfParts[currentPart])}
          </button>
        </div>

        <div className="box-border border border-[#343434] rounded-[6px] bg-black p-[3px]">
          <button
            className="box-border border border-[#343434] rounded-[4px] text-white w-[38px] h-[38px] bg-[#212121] p-0 text-base flex flex-col justify-center items-center focus:outline-none [&>svg]:text-white"
            onClick={() => {
              handlePartChange(1);
              setCurrentLayer(-1);
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </InterfaceSingleButtons>
  );
}

export default PartSelector;
