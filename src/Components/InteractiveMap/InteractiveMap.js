import { Add, Remove } from '@mui/icons-material';
import { Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import MapImage from '../../Assets/map.jpg';
import './InteractiveMap.css';
import Locations from './locations.json';
import Marker from './Marker';

export default function InteractiveMap() {
    function getCoords(e) {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        console.log(x, y);
    }

    return (
        <div onClick={(e) => getCoords(e)}>
            <TransformWrapper className="transform-wrapper">
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                        <ButtonGroup
                            className="map-tools"
                            orientation="vertical"
                            aria-label="vertical contained button group"
                            variant="contained"
                        >
                            <Button onClick={() => zoomIn()}>
                                <Add />
                            </Button>
                            <Button onClick={() => zoomOut()}>
                                <Remove />
                            </Button>
                        </ButtonGroup>

                        <TransformComponent>
                            <div id="map-container">
                                {Locations.map((location, index) => {
                                    return (
                                        <Marker
                                            key={index}
                                            title={location.title}
                                            cardTitle={location.cardTitle}
                                            description={location.description}
                                            image={location.image}
                                            x={location.x}
                                            y={location.y}
                                        />
                                    );
                                })}
                                <img src={MapImage} alt="map" />
                            </div>
                        </TransformComponent>
                    </React.Fragment>
                )}
            </TransformWrapper>
        </div>
    );
}
