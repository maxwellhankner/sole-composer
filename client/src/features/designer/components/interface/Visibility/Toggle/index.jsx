import React from 'react';
// import { FaEye } from 'react-icons/fa';
import { InterfaceSingleButtons } from '../../ui';

function Toggle({ setCurrentShoe, visibility, setVisibility }) {
  const hanleShoeVisibility = (shoe) => {
    if (shoe === 'left') {
      if (visibility.left && visibility.right) {
        let visObj = { ...visibility };
        visObj.left = false;
        setVisibility(visObj);
        setCurrentShoe('right');
      } else if (visibility.left && !visibility.right) {
        let visObj = { ...visibility };
        visObj.left = false;
        visObj.right = true;
        setVisibility(visObj);
        setCurrentShoe('right');
      } else {
        let visObj = { ...visibility };
        visObj.left = true;
        setVisibility(visObj);
        setCurrentShoe('left');
      }
    } else {
      if (visibility.left && visibility.right) {
        let visObj = { ...visibility };
        visObj.right = false;
        setVisibility(visObj);
        setCurrentShoe('left');
      } else if (!visibility.left && visibility.right) {
        let visObj = { ...visibility };
        visObj.right = false;
        visObj.left = true;
        setVisibility(visObj);
        setCurrentShoe('left');
      } else {
        let visObj = { ...visibility };
        visObj.right = true;
        setVisibility(visObj);
        setCurrentShoe('right');
      }
    }
  };

  return (
    <InterfaceSingleButtons>
      <div className="border border-[#343434] rounded-[6px] bg-black p-[3px]">
        <button
          className={`rounded-[4px] w-full h-[38px] p-0 text-base focus:outline-none ${
            visibility.left
              ? 'border border-[#343434] bg-[#212121] text-white'
              : 'border-none bg-black text-[#999999]'
          }`}
          onClick={() => {
            hanleShoeVisibility('left');
          }}
        >
          Left
        </button>
      </div>
      <div className="border border-[#343434] rounded-[6px] bg-black p-[3px]">
        <button
          className={`rounded-[4px] w-full h-[38px] p-0 text-base focus:outline-none ${
            visibility.right
              ? 'border border-[#343434] bg-[#212121] text-white'
              : 'border-none bg-black text-[#999999]'
          }`}
          onClick={() => {
            hanleShoeVisibility('right');
          }}
        >
          Right
        </button>
      </div>
    </InterfaceSingleButtons>
  );
}

export default Toggle;
