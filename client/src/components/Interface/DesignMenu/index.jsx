import React, { useState } from 'react';
import {
  LeftInterfaceContainer,
  InterfaceDoubleButtons,
  InterfaceButtonBox,
  InterfaceButton,
  InterfaceTitleAndIcon,
  InterfaceIconButtonBox,
  InterfaceIconButton,
  InterfaceTitleBox,
  InterfaceTitle,
} from '../../designerui';
import { Link } from 'react-router-dom';
import { uploadImage } from '../../../utils/helpers/uploadImage';
import { takeScreenshot } from '../../../utils/helpers/takeScreenshot';
import { convertAwsLink } from '../../../utils/helpers/convertAwsLink';
import { designFetch } from '../../../utils/helpers/fetchHelpers';
import { FaPen } from 'react-icons/fa';
import { LoadingSpinner } from '../../designerui';

function DesignMenu({
  handleViewChange,
  design,
  canSave,
  setCanSave,
  userData,
  setCameraReset,
}) {
  const [loading, setLoading] = useState(false);
  let userId;
  if (typeof userData === 'object' && '_id' in userData) {
    userId = userData._id;
  }

  const handleSaveDesign = async () => {
    if (userData) {
      setCanSave(false);
      // if new design
      if (!design.author) {
        setLoading(true);
        setCameraReset(true);
        const file = await takeScreenshot('newImage');
        uploadImage(file, true).then((data) => {
          const imageName = convertAwsLink(data.image);
          const body = {
            author: userData._id,
            title: design.title,
            screenshot: imageName,
            configId: '5f925589cc6d6c16e44d5dfd',
            outlineData: design.outlineData,
          };
          designFetch('/api/outlines', 'POST', body)
            .then((data) => {
              window.location.href = `/designer/${data._id}`;
            });
        });
      }
      // if design is mine
      else if (design.author === userData._id) {
        setLoading(true);
        setCameraReset(true);
        const file = await takeScreenshot(design.screenshot);
        uploadImage(file, false).then((data) => {
          const imageName = convertAwsLink(data.image);
          const body = {
            author: design.author,
            title: design.title,
            screenshot: imageName,
            configId: '5f925589cc6d6c16e44d5dfd',
            outlineData: design.outlineData,
          };
          designFetch(`/api/outlines/${design._id}`, 'PUT', body);
          setLoading(false);
        });
      }
      // if design is not mine
      else {
        setLoading(true);
        setCameraReset(true);
        const file = await takeScreenshot(design.screenshot);
        uploadImage(file, true).then((data) => {
          const imageName = convertAwsLink(data.image);
          const body = {
            author: userData._id,
            title: design.title,
            screenshot: imageName,
            configId: '5f925589cc6d6c16e44d5dfd',
            outlineData: design.outlineData,
          };
          designFetch(`/api/outlines/`, 'POST', body)
            .then((data) => {
              window.location.href = `/designer/${data._id}`;
            });
        });
      }
    }
  };

  const handleDeleteDesign = async () => {
    if (userData && userData._id === design.author) {
      await designFetch(`/api/outlines/${design._id}`, 'DELETE');
      window.location.href = '/';
    }
  };

  if (loading) {
    return (
      <LeftInterfaceContainer>
        <LoadingSpinner />
      </LeftInterfaceContainer>
    );
  } else {
    return (
      <LeftInterfaceContainer>
        <InterfaceTitleAndIcon>
          <InterfaceTitleBox>
            <InterfaceTitle>{design.title}</InterfaceTitle>
          </InterfaceTitleBox>
          <InterfaceIconButtonBox>
            <InterfaceIconButton
              $active
              onClick={() => handleViewChange('ChangeDesignName')}
            >
              <FaPen />
            </InterfaceIconButton>
          </InterfaceIconButtonBox>
        </InterfaceTitleAndIcon>

        <InterfaceDoubleButtons>
          <InterfaceButtonBox onClick={() => setCameraReset(true)}>
            <InterfaceButton $active>Reset Camera</InterfaceButton>
          </InterfaceButtonBox>
          {canSave && userData ? (
            <InterfaceButtonBox
              onClick={() => {
                handleSaveDesign();
              }}
            >
              <InterfaceButton $active>Save</InterfaceButton>
            </InterfaceButtonBox>
          ) : (
            <InterfaceButtonBox>
              <InterfaceButton>Save</InterfaceButton>
            </InterfaceButtonBox>
          )}
          {userData && design.author === userId ? (
            <InterfaceButtonBox
              onClick={() => {
                handleDeleteDesign();
              }}
            >
              <InterfaceButton $active>Delete</InterfaceButton>
            </InterfaceButtonBox>
          ) : (
            <InterfaceButtonBox>
              <InterfaceButton>Delete</InterfaceButton>
            </InterfaceButtonBox>
          )}

          <InterfaceButtonBox>
            <Link to="/">
              <InterfaceButton $active>Exit</InterfaceButton>
            </Link>
          </InterfaceButtonBox>
        </InterfaceDoubleButtons>
      </LeftInterfaceContainer>
    );
  }
}

export default DesignMenu;
