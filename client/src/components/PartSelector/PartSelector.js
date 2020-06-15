import React from 'react';
import './PartSelector.css';
import { partsObject } from '../../helpers/partsObject'

function PartSelector({ currentPart, setCurrentPart }) {

  const numberOfParts = Object.keys(partsObject).length
  const arrayOfParts = Object.keys(partsObject)

  const handlePartChange = (i) => {
    if(currentPart === 0 && i < 0){
      setCurrentPart(numberOfParts - 1)
    }
    else if(currentPart === numberOfParts - 1 && i > 0){
      setCurrentPart(0)
    }
    else{
      setCurrentPart(currentPart + i)
    }
  }

  return (
    <div className="part-selector-container">
      <div>
        <button onClick={() => handlePartChange(-1)} >{'<'}</button>
        <p>{arrayOfParts[currentPart]}</p>
        <button onClick={() => handlePartChange(1)} >{'>'}</button>
      </div>
    </div>
  );
}

export default PartSelector;