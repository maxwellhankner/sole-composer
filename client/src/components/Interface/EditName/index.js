import React from 'react';
import { cloneDeep, startCase } from 'lodash';
import {
  LeftInterfaceContainer,
  InterfaceSingleButtons,
  InterfaceButtonBox,
  InterfaceButton,
} from '../../designerui';
import { EditNameTitle, EditNameInput } from './styledComponents';

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
      <EditNameTitle>Design Name</EditNameTitle>
      <InterfaceSingleButtons>
        <InterfaceButtonBox>
          <EditNameInput
            type="text"
            id="design-name-input"
            defaultValue={design.title}
          ></EditNameInput>
        </InterfaceButtonBox>
        <InterfaceButtonBox>
          <InterfaceButton active onClick={() => handleUpdateDesignName()}>
            Done
          </InterfaceButton>
        </InterfaceButtonBox>
      </InterfaceSingleButtons>
    </LeftInterfaceContainer>
  );
}

export default EditName;
