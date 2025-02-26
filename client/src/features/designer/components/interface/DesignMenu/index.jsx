import React, { useState } from 'react';
import { LoadingSpinner } from '../../loading';
import { Link } from 'react-router-dom';
import { uploadImage } from '../../../utils/helpers/uploadImage';
import { takeScreenshot } from '../../../utils/helpers/takeScreenshot';
import { convertAwsLink } from '../../../utils/helpers/convertAwsLink';
import { designFetch } from '../../../utils/helpers/fetchHelpers';
import { FaPen } from 'react-icons/fa';

function DesignMenu({
  handleViewChange,
  design,
  canSave,
  setCanSave,
  userData,
  setCameraReset,
}) {
  const [loading, setLoading] = useState(false);
  
  // Safely access userData properties with null checks
  let userId = null;
  if (userData && typeof userData === 'object' && '_id' in userData) {
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
      <div className="bg-[#212121] rounded-[9px]">
        <LoadingSpinner message="Menu Loading..."/>
      </div>
    );
  } else {
    return (
      <div className="bg-[#212121] rounded-[9px]">
        <div className="flex justify-between m-[6px]">
          <div className="h-[46px] flex flex-col justify-center">
            <p className="text-[18px] mx-[14px] my-[10px] text-white">{design.title}</p>
          </div>
          <div className="box-border border border-[#343434] rounded-[6px] bg-black p-[3px] ml-[6px]">
            <button
              className={`box-border border rounded-[3px] w-[38px] h-[38px] p-0 text-base flex flex-col justify-center items-center ${
                true ? 'border-[#343434] bg-[#212121] text-white' : 'border-black bg-black text-[#343434]'
              } focus:outline-none`}
              onClick={() => handleViewChange('ChangeDesignName')}
            >
              <FaPen />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[6px] m-[6px]">
          <div className="w-full min-w-0 box-border border border-[#343434] rounded-[6px] bg-black p-[3px]" onClick={() => setCameraReset(true)}>
            <button className="box-border border border-[#343434] rounded-[3px] w-full h-[38px] bg-[#212121] text-white p-0 text-base focus:outline-none">
              Reset Camera
            </button>
          </div>
          
          {canSave && userData ? (
            <div className="w-full min-w-0 box-border border border-[#343434] rounded-[6px] bg-black p-[3px]" onClick={handleSaveDesign}>
              <button className="box-border border border-[#343434] rounded-[3px] w-full h-[38px] bg-[#212121] text-white p-0 text-base focus:outline-none">
                Save
              </button>
            </div>
          ) : (
            <div className="w-full min-w-0 box-border border border-[#343434] rounded-[6px] bg-black p-[3px]">
              <button className="box-border border border-[#343434] rounded-[3px] w-full h-[38px] bg-[#212121] text-[#bbbbbb] p-0 text-base focus:outline-none">
                Save
              </button>
            </div>
          )}
          
          {userData && design.author === userId ? (
            <div className="w-full min-w-0 box-border border border-[#343434] rounded-[6px] bg-black p-[3px]" onClick={handleDeleteDesign}>
              <button className="box-border border border-[#343434] rounded-[3px] w-full h-[38px] bg-[#212121] text-white p-0 text-base focus:outline-none">
                Delete
              </button>
            </div>
          ) : (
            <div className="w-full min-w-0 box-border border border-[#343434] rounded-[6px] bg-black p-[3px]">
              <button className="box-border border border-[#343434] rounded-[3px] w-full h-[38px] bg-[#212121] text-[#bbbbbb] p-0 text-base focus:outline-none">
                Delete
              </button>
            </div>
          )}

          <div className="w-full min-w-0 box-border border border-[#343434] rounded-[6px] bg-black p-[3px]">
            <Link to="/">
              <button className="box-border border border-[#343434] rounded-[3px] w-full h-[38px] bg-[#212121] text-white p-0 text-base focus:outline-none">
                Exit
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DesignMenu;
