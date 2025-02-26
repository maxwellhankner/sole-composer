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
import {
  LeftInterfaceContainer,
  InterfaceButtonBox,
  InterfaceButton,
  InterfaceDoubleButtons,
} from '../../ui';

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
      graphicVisualCanvas.style.width = '100%';
      graphicVisualCanvas.style.height = '100%';
      graphicVisualCanvas.style.objectFit = 'contain';
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
          className={`absolute inset-0 z-0 flex flex-col justify-center items-center w-full h-full ${currentShoe === 'left' ? 'scale-x-[-1]' : ''}`}
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
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none [grid-area:counter]"
          >
            <FaUndoAlt />
          </button>
          <button
            id="up-button"
            onClick={() => handleMoveGraphic('vert', -30)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none [grid-area:up]"
          >
            <FaArrowUp />
          </button>
          <button
            id="clockwise-button"
            onClick={() => handleMoveGraphic('rotate', 5)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none [grid-area:clock]"
          >
            <FaRedoAlt />
          </button>
          <button
            id="left-button"
            onClick={() => handleMoveGraphic('hor', -30)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none [grid-area:left]"
          >
            <FaArrowLeft />
          </button>
          <button
            id="right-button"
            onClick={() => handleMoveGraphic('hor', 30)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none [grid-area:right]"
          >
            <FaArrowRight />
          </button>
          <button
            id="scale-down-button"
            onClick={() => handleMoveGraphic('scale', 0.9)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none [grid-area:compress]"
          >
            <FaCompressArrowsAlt />
          </button>
          <button
            id="down-button"
            onClick={() => handleMoveGraphic('vert', 30)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none [grid-area:down]"
          >
            <FaArrowDown />
          </button>
          <button
            id="scale-up-button"
            onClick={() => handleMoveGraphic('scale', 1.1)}
            className="bg-[#00000077] text-white w-10 h-10 border-none m-auto rounded-full p-0 text-xl flex flex-col justify-center items-center focus:outline-none [grid-area:expand]"
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
