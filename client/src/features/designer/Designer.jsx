import React, { useEffect, useState } from 'react';
import DesignerContainer from './components/DesignerContainer';
import {
  createTexture,
  createCanvas,
  createRedMapCanvas,
  createGraphicVisualCanvas,
} from './utils/canvas';
import { simpleFetch } from './utils/helpers/fetchHelpers';
import { useParams } from 'react-router-dom';
import { useUserContext } from '../../shared/context/UserContext';
import { P, LoadingScreen, ErrorScreen } from '../../shared/ui';

function Designer() {
  const { id } = useParams();
  // userData can be null if user is not logged in, and that's okay
  // Designer will still work but with limited functionality
  const { userData, isLoading, error } = useUserContext();

  const [designSpec, setDesignSpec] = useState(null);
  const [graphicVisualCanvas, setGraphicVisualCanvas] = useState(null);
  const [isDesignerLoading, setIsDesignerLoading] = useState(true);
  const [designerError, setDesignerError] = useState(null);

  const [rightInnerOverlayCanvas, setRightInnerOverlayCanvas] = useState(null);
  const [rightOuterOverlayCanvas, setRightOuterOverlayCanvas] = useState(null);
  const [rightTextureCanvas, setRightTextureCanvas] = useState(null);
  const [rightTexture, setRightTexture] = useState(null);

  const [leftInnerOverlayCanvas, setLeftInnerOverlayCanvas] = useState(null);
  const [leftOuterOverlayCanvas, setLeftOuterOverlayCanvas] = useState(null);
  const [leftTextureCanvas, setLeftTextureCanvas] = useState(null);
  const [leftTexture, setLeftTexture] = useState(null);

  const [redMapCanvas, setRedMapCanvas] = useState(null);

  const setup = async (data) => {
    try {
      setDesignSpec(data);
      setGraphicVisualCanvas(createGraphicVisualCanvas({ design: data }));
      const canvasOne = await createCanvas({ design: data });
      setRightInnerOverlayCanvas(canvasOne);
      const canvasTwo = await createCanvas({ design: data });
      setRightOuterOverlayCanvas(canvasTwo);
      const canvasThree = await createCanvas({ design: data });
      setRightTextureCanvas(canvasThree);

      const canvasFour = await createCanvas({ design: data });
      setLeftInnerOverlayCanvas(canvasFour);
      const canvasFive = await createCanvas({ design: data });
      setLeftOuterOverlayCanvas(canvasFive);
      const canvasSix = await createCanvas({ design: data });
      setLeftTextureCanvas(canvasSix);

      const canvasSeven = await createRedMapCanvas({ design: data });
      setRedMapCanvas(canvasSeven);
    } catch (err) {
      setDesignerError(`Failed to initialize designer: ${err.message}`);
    } finally {
      setIsDesignerLoading(false);
    }
  };

  useEffect(() => {
    setIsDesignerLoading(true);
    if (id) {
      simpleFetch(`/api/outlines/${id}`, 'GET')
        .then((data) => {
          setup(data);
        })
        .catch((err) => {
          setDesignerError(`Failed to load design: ${err.message}`);
          setIsDesignerLoading(false);
        });
    } else {
      simpleFetch('/api/outlines/newdesign', 'GET')
        .then((data) => {
          setup(data);
        })
        .catch((err) => {
          setDesignerError(`Failed to create new design: ${err.message}`);
          setIsDesignerLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    if (rightTextureCanvas && leftTextureCanvas) {
      setRightTexture(createTexture(rightTextureCanvas));
      setLeftTexture(createTexture(leftTextureCanvas));
    }
  }, [rightTextureCanvas, leftTextureCanvas]);

  if (isLoading) {
    return <LoadingScreen message="Loading user data..." />;
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (isDesignerLoading) {
    return <LoadingScreen />;
  }

  if (designerError) {
    return <ErrorScreen error={designerError} />;
  }

  const initialized =
    designSpec &&
    graphicVisualCanvas &&
    rightInnerOverlayCanvas &&
    rightOuterOverlayCanvas &&
    rightTextureCanvas &&
    rightTexture &&
    leftInnerOverlayCanvas &&
    leftOuterOverlayCanvas &&
    leftTextureCanvas &&
    leftTexture &&
    redMapCanvas;

  if (initialized) {
    return (
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
        redMapCanvas={redMapCanvas}
      />
    );
  } else {
    return (
      <div />
    );
  }
}

export default Designer;
