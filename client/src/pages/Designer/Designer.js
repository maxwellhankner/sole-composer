import React, { useEffect, useState, useContext } from 'react';
import './Designer.css';
import DesignerContainer from '../../components/DesignerContainer/DesignerContainer';
import {
  createTexture,
  createCanvas,
  createGraphicVisualCanvas,
} from '../../canvasFunctions';
import { simpleFetch } from '../../helpers/fetchHelpers';
import { useParams } from 'react-router-dom';
import UserProvider from '../../context/UserProvider';

function Designer() {
  const { id } = useParams();
  const userData = useContext(UserProvider.context);

  const [designSpec, setDesignSpec] = useState(null);
  const [graphicVisualCanvas, setGraphicVisualCanvas] = useState(null);

  const [rightInnerOverlayCanvas, setRightInnerOverlayCanvas] = useState(null);
  const [rightOuterOverlayCanvas, setRightOuterOverlayCanvas] = useState(null);
  const [rightTextureCanvas, setRightTextureCanvas] = useState(null);
  const [rightTexture, setRightTexture] = useState(null);

  const [leftInnerOverlayCanvas, setLeftInnerOverlayCanvas] = useState(null);
  const [leftOuterOverlayCanvas, setLeftOuterOverlayCanvas] = useState(null);
  const [leftTextureCanvas, setLeftTextureCanvas] = useState(null);
  const [leftTexture, setLeftTexture] = useState(null);

  const setup = (data) => {
    setDesignSpec(data);
    setGraphicVisualCanvas(createGraphicVisualCanvas({ design: data }));
    setRightInnerOverlayCanvas(createCanvas({ design: data }));
    setRightOuterOverlayCanvas(createCanvas({ design: data }));
    setRightTextureCanvas(createCanvas({ design: data }));

    setLeftInnerOverlayCanvas(createCanvas({ design: data }));
    setLeftOuterOverlayCanvas(createCanvas({ design: data }));
    setLeftTextureCanvas(createCanvas({ design: data }));
  };

  useEffect(() => {
    if (id) {
      simpleFetch(`/api/outlines/${id}`, 'GET')
        .then((res) => res.json())
        .then((data) => {
          setup(data);
        });
    } else {
      simpleFetch('/api/outlines/newdesign', 'GET')
        .then((res) => res.json())
        .then((data) => {
          setup(data);
        });
    }
  }, [id]);

  useEffect(() => {
    if (rightTextureCanvas && leftTextureCanvas) {
      setRightTexture(createTexture(rightTextureCanvas));
      setLeftTexture(createTexture(leftTextureCanvas));
    }
  }, [rightTextureCanvas, leftTextureCanvas]);

  const initialized =
    userData &&
    designSpec &&
    graphicVisualCanvas &&
    rightInnerOverlayCanvas &&
    rightOuterOverlayCanvas &&
    rightTextureCanvas &&
    rightTexture &&
    leftInnerOverlayCanvas &&
    leftOuterOverlayCanvas &&
    leftTextureCanvas &&
    leftTexture;

  if (initialized) {
    return (
      <div className='designer-root-container'>
        <DesignerContainer
          userData={userData}
          designSpec={designSpec}
          graphicVisualCanvas={graphicVisualCanvas}
          rightInnerOverlayCanvas={rightInnerOverlayCanvas}
          rightOuterOverlayCanvas={rightOuterOverlayCanvas}
          rightTexture={rightTexture}
          rightTextureCanvas={rightTextureCanvas}
          leftInnerOverlayCanvas={leftInnerOverlayCanvas}
          leftOuterOverlayCanvas={leftOuterOverlayCanvas}
          leftTexture={leftTexture}
          leftTextureCanvas={leftTextureCanvas}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Designer;
