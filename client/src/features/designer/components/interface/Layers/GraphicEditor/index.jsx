import React, { useEffect } from 'react';
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowsAlt,
  FaArrowUp,
  FaCompressArrowsAlt,
  FaRedoAlt,
  FaUndoAlt,
} from 'react-icons/fa';
import './GraphicEditor.css';
import {
  LeftInterfaceContainer,
  InterfaceButtonBox,
  InterfaceButton,
  InterfaceDoubleButtons,
} from '../../../../ui';

function GraphicEditor({ props }) {
  const {
    currentLayer,
    currentPartName,
    graphicVisualCanvas,
    handleChangeManager,
    handleUpdateGraphicVisualCanvas,
    setLayersView,
    setCanSave,
    currentShoe,
  } = props;

  const handleMoveGraphic = (direction, distance) => {
    setCanSave(true);
    handleChangeManager({
      type: 'graphic-moved',
      partName: currentPartName,
      layerIndex: currentLayer,
      direction,
      distance,
    });
  };

  useEffect(() => {
    const placeGraphicVisual = () => {
      let div = document.getElementById('graphic-visual-container');
      div.innerHTML = '';
      div.appendChild(graphicVisualCanvas);
    };
    placeGraphicVisual();
    handleUpdateGraphicVisualCanvas(currentPartName);
    // eslint-disable-next-line
  }, []);

  return (
    <LeftInterfaceContainer>
      <div className="h-[300px] relative m-[6px]">
        <div
          id="graphic-visual-container"
          className={`absolute inset-0 z-0 flex flex-col justify-center items-center ${currentShoe === 'left' ? 'scale-x-[-1]' : ''}`}
          style={{
            width: '100%',
            height: '100%'
          }}
        ></div>
        <div 
          className="absolute h-full inset-0 grid grid-cols-[1fr_3fr_1fr_3fr_1fr] grid-rows-[1fr_3fr_1fr_3fr_1fr] z-[1]"
          style={{
            gridTemplateAreas: `
              'counter . up . clock'
              '. . . . .'
              'left . . . right'
              '. . . . .'
              'compress . down . expand'
            `
          }}
        >
          <button
            id="counterclockwise-button"
            onClick={() => handleMoveGraphic('rotate', -5)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none"
          >
            <FaUndoAlt />
          </button>
          <button
            id="up-button"
            onClick={() => handleMoveGraphic('vert', -30)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none"
          >
            <FaArrowUp />
          </button>
          <button
            id="clockwise-button"
            onClick={() => handleMoveGraphic('rotate', 5)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none"
          >
            <FaRedoAlt />
          </button>
          <button
            id="left-button"
            onClick={() => handleMoveGraphic('hor', -30)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none"
          >
            <FaArrowLeft />
          </button>
          <button
            id="right-button"
            onClick={() => handleMoveGraphic('hor', 30)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none"
          >
            <FaArrowRight />
          </button>
          <button
            id="scale-down-button"
            onClick={() => handleMoveGraphic('scale', 0.9)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none"
          >
            <FaCompressArrowsAlt />
          </button>
          <button
            id="down-button"
            onClick={() => handleMoveGraphic('vert', 30)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none"
          >
            <FaArrowDown />
          </button>
          <button
            id="scale-up-button"
            onClick={() => handleMoveGraphic('scale', 1.1)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none"
          >
            <FaArrowsAlt />
          </button>
        </div>
      </div>
      <InterfaceDoubleButtons>
        <InterfaceButtonBox>
          <InterfaceButton $active onClick={() => handleMoveGraphic('reset', 0)}>
            Reset
          </InterfaceButton>
        </InterfaceButtonBox>
        <InterfaceButtonBox>
          <InterfaceButton $active onClick={() => setLayersView('LayersMain')}>
            Done
          </InterfaceButton>
        </InterfaceButtonBox>
      </InterfaceDoubleButtons>
    </LeftInterfaceContainer>
  );
}

export default GraphicEditor;
