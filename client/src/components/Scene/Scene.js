import React, { useEffect, useRef, useState } from 'react';
import './Scene.css';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { drawColorFunction, drawGraphicFunction, drawInitialFunction } from '../../helpers/drawFunctions.js';
import { partsObject } from '../../helpers/partsObject.js'


function Scene({ design }) {

  const createCanvas = () => {
    var ctx = document.createElement("canvas").getContext('2d');
    ctx.canvas.width = 4096;
    ctx.canvas.height = 4096;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    return ctx
  }

  const createMaterial = (texture) => {
    var aoimg = new Image();
    aoimg.src = 'assets/images/ao_diffuse.png';
    var ao = new THREE.CanvasTexture(aoimg);
    ao.flipY = false;

    return new THREE.MeshStandardMaterial({
      map: texture,
      aoMap: ao
    })
  }

  const createTexture = () => {
    var texture = new THREE.CanvasTexture(textureCanvas.canvas);
    texture.flipY = false;

    return texture;
  }

  const canvasRef = useRef(null);

  const [renderer] = useState(new THREE.WebGLRenderer());

  const [textureCanvas, setTextureCanvas] = useState(createCanvas());

  const [texture] = useState(createTexture());

  const [newMaterial] = useState(createMaterial(texture));

  useEffect(() => {
    canvasRef.current.appendChild(renderer.domElement);
    const width = canvasRef.current.clientWidth;
    const height = canvasRef.current.clientHeight;

    //===================================================== scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf9f9f9);

    //===================================================== camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 7;
    camera.position.y = 0;

    //===================================================== orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxDistance = 9;
    controls.minDistance = 3;
    controls.minPolarAngle = Math.PI * (1 / 5);
    controls.maxPolarAngle = Math.PI * (6 / 7);
    controls.enablePan = false;
    controls.update();

    //===================================================== lights
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    //===================================================== model
    var loader = new GLTFLoader();
    var model;
    loader.load(
      "assets/models/af1_ao.gltf", function (gltf) {
        gltf.scene.traverse(function (node) {
          if (node.isMesh) node.material = newMaterial;
        });
        model = gltf.scene;
        model.scale.set(.35, .35, .35);
        model.position.y = -1;
        model.rotation.y = -95 * (Math.PI / 180);
        scene.add(model);
      }
    );

    //===================================================== resize
    window.addEventListener("resize", resizecanvas);

    function resizecanvas() {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth * 2;
      const height = canvas.clientHeight * 2;
      if (canvas.width !== width || canvas.height !== height) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    }

    //===================================================== animate
    const render = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(render);
      resizecanvas();
      controls.update();
    }

    render()

    //===================================================== cleanup
    return function cleanup() {
      cancelAnimationFrame(render);
      controls.dispose();
    }

  }, [newMaterial, renderer])

  const oldDesignRef = useRef({});

  useEffect(() => {

    const getDesignPartChanges = (obj1, obj2) => {
      if (!obj1.parts) {
        console.log('no change')
        return
      }
      const obj1Keys = Object.keys(obj1.parts);
      for (let objKey of obj1Keys) {
        if (obj1.parts[objKey].layers.length !== obj2.parts[objKey].layers.length) {
          console.log('layer added', objKey)
          return [objKey, 0]
        }
        for (let i = 0; i < obj1.parts[objKey].layers.length; i++) {
          // console.log(obj1.parts[objKey].layers[i])
          for (let property of Object.keys(obj1.parts[objKey].layers[i])) {
            if (obj1.parts[objKey].layers[i][property] !== obj2.parts[objKey].layers[i][property]) {
              console.log('layer changed', objKey)
              return [objKey, i];
            }
          }
          // if (obj1.parts[objKey].layers[i].x !== obj2.parts[objKey].layers[i].x) {
          //   console.log('layer changed', objKey)
          //   return [objKey, i];
          // }
        }
      }
    }

    const initialCanvas = async (design) => {
      drawInitialFunction(texture, textureCanvas, setTextureCanvas, '#ffbb55')
      for (let x = 0; x < Object.keys(design.parts).length; x++) {
        const property = Object.keys(design.parts)[x]
        for (let i = 0; i < design.parts[property].layers.length; i++) {
          if (design.parts[property].layers[i].type === 'color') {
            await drawColorFunction(texture, textureCanvas, setTextureCanvas, design.parts[property].layers[i].color, partsObject[property])
          }
          else {
            await drawGraphicFunction(texture, textureCanvas, setTextureCanvas, partsObject[property], design.parts[property].layers[i])
          }
        }
      }
    }

    const updateLayer = async (partChange) => {
      for (let i = 0; i < design.parts[partChange[0]].layers.length; i++) {
        if (design.parts[partChange[0]].layers[i].type === 'color') {
          await drawColorFunction(texture, textureCanvas, setTextureCanvas, design.parts[partChange[0]].layers[i].color, partsObject[partChange[0]])
        }
        else {
          await drawGraphicFunction(texture, textureCanvas, setTextureCanvas, partsObject[partChange[0]], design.parts[partChange[0]].layers[i])
        }
      }
    }

    if (design) {
      const partChange = getDesignPartChanges(oldDesignRef.current, design);
      if (partChange) {
        updateLayer(partChange)
      }
      else {
        initialCanvas(design);
      }

      oldDesignRef.current = design;
    }

  }, [design, texture, textureCanvas])

  return (
    <div className="scene-container" ref={canvasRef} />
  )
}

export default Scene;