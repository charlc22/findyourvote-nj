import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';  // Add Tooltip import
import './Map.css';
import 'leaflet/dist/leaflet.css';
import districtData from '../../data/NJCD_2021_ADOPTED_DEC22.json';
import stateBoundaryData from '../../data/State_Boundary_of_NJ%2C_3424.json';

function Map({ activeView, onDistrictSelect }) {
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    const districtStyle = (feature) => ({
        color: '#0000FF',
        weight: 2,
        fillOpacity: 0.1,
        fillColor: selectedDistrict === feature.properties.DISTRICT
            ? '#2980b9'
            : '#3498db'
    });

    const stateStyle = {
        color: '#0000FF',
        weight: 2,
        fillOpacity: 0,
        fillColor: 'transparent'
    };

    const onEachDistrict = (feature, layer) => {
        // Add tooltip to the layer
        layer.bindTooltip(`District ${feature.properties.DISTRICT}`, {
            permanent: false,
            direction: 'center',
            className: 'district-tooltip'
        });

        layer.on({
            mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                    fillOpacity: 0.3
                });
            },
            mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                    fillOpacity: 0.1
                });
            },
            click: (e) => {
                setSelectedDistrict(feature.properties.DISTRICT);
                onDistrictSelect(feature.properties.DISTRICT);
            }
        });
    };

    return (
        <div className="map-container">
            <MapContainer
                center={[40.1, -74.6]}
                zoom={8}
                style={{ height: '630px', width: '100%', borderRadius: '8px' }}
                maxBounds={[[38.8, -75.6], [41.4, -73.9]]}
                minZoom={7}
                maxZoom={12}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                {activeView === 'house' && (
                    <GeoJSON
                        data={districtData}
                        style={districtStyle}
                        onEachFeature={onEachDistrict}
                    />
                )}
                {activeView === 'senate' && (
                    <GeoJSON
                        data={stateBoundaryData}
                        style={stateStyle}
                    />
                )}
            </MapContainer>
        </div>
    );
}

export default Map;