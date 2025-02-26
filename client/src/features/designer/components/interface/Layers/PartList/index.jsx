import React from 'react';
import {
  LeftInterfaceContainer,
  InterfaceTitle,
  InterfaceSingleButtons,
  InterfaceButtonBox,
  InterfaceButton
} from '../../ui';

function PartList({ props }) {
  const {
    design,
    setCurrentPart,
    setLayersView,
    setCurrentLayer,
    currentPartName,
  } = props;

  return (
    <LeftInterfaceContainer>
      <InterfaceTitle>Select Part</InterfaceTitle>
      <div className="flex flex-col overflow-hidden h-[220px] m-[6px] border border-[#343434] rounded-[6px] bg-black">
        <div className="flex flex-col overflow-auto">
          <div className="grid grid-cols-2 gap-[6px]">
            {design.configData.partsArray.map((part, i) => (
              <button
                key={i}
                className={`box-border ${
                  currentPartName === part 
                    ? 'text-white bg-[#212121] border-[#343434]' 
                    : 'text-[#999999] bg-black border-black'
                } border rounded-[4px] m-[3px] h-[40px] text-base capitalize overflow-hidden`}
                onClick={() => {
                  setCurrentLayer(-1);
                  setCurrentPart(i);
                  setLayersView('LayersMain');
                }}
              >
                {part}
              </button>
            ))}
          </div>
        </div>
      </div>

      <InterfaceSingleButtons>
        <InterfaceButtonBox>
          <InterfaceButton $active onClick={() => setLayersView('LayersMain')}>
            Back
          </InterfaceButton>
        </InterfaceButtonBox>
      </InterfaceSingleButtons>
    </LeftInterfaceContainer>
  );
}

export default PartList;
