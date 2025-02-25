// Canvas utility functions
// This file exports all canvas-related functions from the canvas directory

// Setup
import { setup } from './canvas/setup/setup';

// Create
import {
  createTexture,
  createCanvas,
  createRedMapCanvas,
  createGraphicVisualCanvas,
} from './canvas/create/createCanvasFunctions';

import { createColorLayerCanvas } from './canvas/create/createColorLayerCanvas';
import { createGraphicLayerCanvas } from './canvas/create/createGraphicLayerCanvas';
import { createMaskLayerCanvas } from './canvas/create/createMaskLayerCanvas';
import { createOverlayLayerCanvas } from './canvas/create/createOverlayLayerCanvas';

// Convert
import {
  designObjectToCanvasObject,
  overlayCanvasObjectToTextureCanvas,
  updateGraphicVisualCanvas,
} from './canvas/create/initialFunctions';

// Update
import { canvasObjectToTextureCanvas } from './canvas/update/canvasObjectToTextureCanvas';
import { partChangeManager } from './canvas/update/partChangeManager';
import { overlayChangeManager } from './canvas/update/overlayChangeManager';

// Export all canvas-related functions
export {
  setup,
  canvasObjectToTextureCanvas,
  createTexture,
  createCanvas,
  createRedMapCanvas,
  createGraphicVisualCanvas,
  createColorLayerCanvas,
  createGraphicLayerCanvas,
  createMaskLayerCanvas,
  createOverlayLayerCanvas,
  designObjectToCanvasObject,
  updateGraphicVisualCanvas,
  partChangeManager,
  overlayCanvasObjectToTextureCanvas,
  overlayChangeManager,
}; 