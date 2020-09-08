import React from 'react';
import './LayerOverview.css';
import { handleConvertPartName } from '../../helpers/convertPartNames';
import { FaChevronUp, FaChevronDown, FaPen, FaTimes } from 'react-icons/fa';
import { partsArray } from '../../helpers/partsObject';
import PartSelector from '../PartSelector/PartSelector';

function LayerOverview({ props }) {
	const {
		allLayers,
		currentPart,
		currentPartName,
		design,
		focusLayer,
		handleDesignChangeManager,
		handleViewChange,
		numberOfLayers,
		setCurrentLayer,
		setCurrentPart,
		setFocusLayer,
		setLayersView,
	} = props;

	const handleFocusLayer = (i) => {
		setFocusLayer(i);
	};

	const handleClearFocusLayer = (aClass) => {
		if (aClass === 'layers-view-container') {
			setFocusLayer(-1);
		}
	};

	const handleCurrentLayer = (key) => {
		setCurrentLayer(key);
	};

	const handleDeleteLayer = (layer) => {
		handleDesignChangeManager(['layer-deleted', currentPartName, layer]);
		setFocusLayer(-1);
	};

	const handleMoveLayer = (layer, direction) => {
		const tempDesign = JSON.parse(JSON.stringify(design));
		let array;

		if (
			currentPartName === 'outerOverlay' ||
			currentPartName === 'innerOverlay'
		) {
			array = tempDesign.overlays[currentPartName].layers;
		} else {
			array = tempDesign.parts[currentPartName].layers;
		}

		if (layer === array.length - 1 && direction === 1) {
			return;
		} else if (layer === 0 && direction === -1) {
			return;
		} else {
			let tempElement = array[layer];
			array[layer] = array[layer + direction];
			array[layer + direction] = tempElement;
			if (
				currentPartName === 'outerOverlay' ||
				currentPartName === 'innerOverlay'
			) {
				tempDesign.overlays[currentPartName].layers = array;
			} else {
				tempDesign.parts[currentPartName].layers = array;
			}
			handleDesignChangeManager([
				'layer-moved',
				currentPartName,
				layer,
				direction,
			]);
			setFocusLayer(focusLayer + direction);
		}
	};

	return (
		<div
			className="layers-view-container"
			onClick={(e) => handleClearFocusLayer(e.target.className)}
		>
			<PartSelector
				currentPart={currentPart}
				setCurrentPart={setCurrentPart}
				setFocusLayer={setFocusLayer}
			/>
			<div className="view-title">
				<p>Layers</p>
			</div>

			<div className="add-layer-button">
				<button onClick={() => setLayersView('AddLayerType')}>
					Add Layer
				</button>
			</div>

			<div className="layers-box-container">
				{allLayers.map((layer, i) => (
					<div key={i} className="layer-list-items">
						<div
							className={`layer-list-item-end ${
								focusLayer !== i ? 'hide-edit-buttons' : ''
							}`}
						>
							<div
								className={`edit-layer-button ${
									i === numberOfLayers - 1
										? 'edit-layer-button-dead'
										: ''
								}`}
							>
								<button onClick={() => handleMoveLayer(i, 1)}>
									<FaChevronUp />
								</button>
							</div>
							<div
								className={`edit-layer-button ${
									i === 0 ? 'edit-layer-button-dead' : ''
								}`}
							>
								<button onClick={() => handleMoveLayer(i, -1)}>
									<FaChevronDown />
								</button>
							</div>
						</div>
						<div
							className={`layer-list-item-middle ${
								focusLayer === i ? 'focus-layer-highlight' : ''
							}`}
							onClick={() => handleFocusLayer(i)}
						>
							<div className="layer-list-item-type">
								{layer.type === 'overlay'
									? handleConvertPartName(
											layer.source
									  ).toLowerCase()
									: layer.type}
							</div>

							{layer.type === 'color' ? (
								<div
									style={{
										backgroundColor: layer.color,
										width: '50px',
									}}
								></div>
							) : layer.type === 'graphic' ? (
								<div
									style={{
										width: '50px',
										backgroundColor: '#ffffff',
									}}
								>
									<img
										src={layer.link}
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover',
										}}
										alt="design-graphic"
									/>
								</div>
							) : layer.type === 'mask' ? (
								<div
									style={{
										width: '50px',
										backgroundColor: '#ffffff',
									}}
								>
									<img
										src={layer.link}
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover',
										}}
										alt="design-graphic"
									/>
								</div>
							) : (
								<div></div>
							)}
						</div>
						<div
							className={`layer-list-item-end ${
								focusLayer !== i ? 'hide-edit-buttons' : ''
							}`}
						>
							{layer.type === 'color' ? (
								<div className="edit-layer-button">
									<button
										onClick={() => {
											handleCurrentLayer(i);
											setLayersView('ColorPicker');
										}}
									>
										<FaPen />
									</button>
								</div>
							) : layer.type === 'graphic' ? (
								<div className="edit-layer-button">
									<button
										onClick={() => {
											handleCurrentLayer(i);
											setLayersView('GraphicEditor');
										}}
									>
										<FaPen />
									</button>
								</div>
							) : layer.type === 'mask' ? (
								<div className="edit-layer-button">
									<button
										onClick={() => {
											handleCurrentLayer(i);
											setLayersView('ColorPicker');
										}}
									>
										<FaPen />
									</button>
								</div>
							) : (
								<div className="edit-layer-button">
									<button
										onClick={() => {
											setCurrentPart(
												partsArray.indexOf(layer.source)
											);
											setFocusLayer(-1);
										}}
									>
										<FaPen />
									</button>
								</div>
							)}
							{layer.type === 'overlay' ? (
								<div className="edit-layer-button edit-layer-button-dead">
									<button>
										<FaTimes />
									</button>
								</div>
							) : (
								<div className="edit-layer-button">
									<button
										onClick={() => handleDeleteLayer(i)}
									>
										<FaTimes />
									</button>
								</div>
							)}
						</div>
					</div>
				))}
			</div>

			<div className="change-view-button">
				<button onClick={() => handleViewChange('DesignPreview')}>
					Back
				</button>
			</div>
		</div>
	);
}

export default LayerOverview;