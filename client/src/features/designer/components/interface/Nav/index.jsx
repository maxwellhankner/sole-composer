import React from 'react';
import { FaLayerGroup, FaBars, FaEye, FaPaintRoller } from 'react-icons/fa';

function Nav({ handleViewChange, view }) {
  const viewManager = (viewName) => {
    if (view === viewName) {
      handleViewChange('DesignInfo');
    } else {
      handleViewChange(viewName);
    }
  };

  return (
    <div className="flex flex-col h-[280px] justify-between">
      <div
        className={`w-[40px] h-[40px] m-[15px] flex items-center justify-center [-webkit-tap-highlight-color:rgba(0,0,0,0)] ${
          view === 'Layers' ? 'bg-[#212121]' : ''
        } rounded-[6px]`}
        onClick={() => viewManager('Layers')}
      >
        <FaLayerGroup className={`text-[22px] ${view === 'Layers' ? 'text-white' : 'text-[#212121]'}`} />
      </div>
      <div
        className={`w-[40px] h-[40px] m-[15px] flex items-center justify-center [-webkit-tap-highlight-color:rgba(0,0,0,0)] ${
          view === 'ChangeBaseColor' ? 'bg-[#212121]' : ''
        } rounded-[6px]`}
        onClick={() => viewManager('ChangeBaseColor')}
      >
        <FaPaintRoller className={`text-[22px] ${view === 'ChangeBaseColor' ? 'text-white' : 'text-[#212121]'}`} />
      </div>
      <div
        className={`w-[40px] h-[40px] m-[15px] flex items-center justify-center [-webkit-tap-highlight-color:rgba(0,0,0,0)] ${
          view === 'DesignVisibility' ? 'bg-[#212121]' : ''
        } rounded-[6px]`}
        onClick={() => viewManager('DesignVisibility')}
      >
        <FaEye className={`text-[22px] ${view === 'DesignVisibility' ? 'text-white' : 'text-[#212121]'}`} />
      </div>
      <div
        className={`w-[40px] h-[40px] m-[15px] flex items-center justify-center [-webkit-tap-highlight-color:rgba(0,0,0,0)] ${
          view === 'DesignMenu' || view === 'ChangeDesignName' ? 'bg-[#212121]' : ''
        } rounded-[6px]`}
        onClick={() => viewManager('DesignMenu')}
      >
        <FaBars className={`text-[22px] ${view === 'DesignMenu' || view === 'ChangeDesignName' ? 'text-white' : 'text-[#212121]'}`} />
      </div>
    </div>
  );
}

export default Nav;
