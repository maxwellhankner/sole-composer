import React from 'react';
import { cloneDeep, startCase } from 'lodash';
import {
  LeftInterfaceContainer,
  InterfaceSingleButtons,
  InterfaceButtonBox,
  InterfaceButton,
  InterfaceTitleAndIcon,
  InterfaceTitleBox,
  InterfaceTitle,
} from '../ui';

function EditName({ handleViewChange, design, setDesign, setCanSave }) {
  const handleUpdateDesignName = () => {
    const tempDesign = cloneDeep(design);
    const newTitle = startCase(
      document.getElementById('design-name-input').value
    );
    tempDesign.title = newTitle;
    setCanSave(true);
    setDesign(tempDesign);
    handleViewChange('DesignMenu');
  };

  return (
    <LeftInterfaceContainer>
      <InterfaceTitleAndIcon>
        <InterfaceTitleBox>
          <InterfaceTitle>Design Name</InterfaceTitle>
        </InterfaceTitleBox>
      </InterfaceTitleAndIcon>
      <InterfaceSingleButtons>
        <InterfaceButtonBox>
          <input
            type="text"
            id="design-name-input"
            defaultValue={design.title}
            className="block text-[18px] outline-none w-full box-border border-none rounded-[3px] h-[38px] pl-[10px]"
          />
        </InterfaceButtonBox>
        <InterfaceButtonBox>
          <InterfaceButton $active onClick={() => handleUpdateDesignName()}>
            Done
          </InterfaceButton>
        </InterfaceButtonBox>
      </InterfaceSingleButtons>
    </LeftInterfaceContainer>
  );
}

export default EditName;
