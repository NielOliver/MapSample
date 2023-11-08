import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, LayersControl  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { stateData } from './geojson-data';

const ProvinceInfoOverlay = ({ selectedProvince }) => {
  if (!selectedProvince) {
    return null;
  }

  return (
    <div className="province-info-overlay">
      <h3>Province: {selectedProvince.NAME_1}</h3>
      <p>Land Area: {selectedProvince.land_area} sq. km</p>
      <p>Number of Farmers: {selectedProvince.farmers}</p>
    </div>
  );
};

export default function App() {
  const ilocosRegionPosition = [17.4756, 120.3863];

  const alienIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/7705/7705037.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  const [selectedProvince, setSelectedProvince] = useState(null);

  const geojsonStyle = (feature) => {
    const ID_1 = feature.properties.ID_1;
    const fillColor = getColor(ID_1);

    return {
      fillColor,
      weight: 3,
      opacity: 1,
      color: 'black',
      fillOpacity: 0.5,
    };
  };

  const getColor = (ID_1) => {
    switch (ID_1) {
      case 34:
        return 'red';
      case 35:
        return 'green';
      case 39:
        return 'blue';
      case 61:
        return 'yellow';
      default:
        return 'orange';
    }
  };

  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.ID_1) {
      const logoURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Department_of_Agriculture_of_the_Philippines.svg/768px-Department_of_Agriculture_of_the_Philippines.svg.png'; // Replace with the actual path to your logo image
      const popupContent = `<div style="display: flex; align-items: center;">
        <img src="${logoURL}" alt="Your Logo" width="100" height="100">
        <div style="margin-left: 10px;">
          <p><b>PROVINCE:</b> ${feature.properties.NAME_1}</p>
          <p><b>AREA:</b> ${feature.properties.AREA}</p>
          <p><b>NO. OF FARMERS:</b> ${feature.properties.FARMER}</p>
        </div>
      </div>`;
      layer.bindPopup(popupContent);
    }
  };
  
  
  

  //DA Main
  const alienMarkerPosition = [16.609202573817278, 120.31856428991335];
  const alienPopupContent = `
  <div style="display: flex; align-items: center;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Department_of_Agriculture_of_the_Philippines.svg/768px-Department_of_Agriculture_of_the_Philippines.svg.png"
    alt="Alien Image" width="50" height="50" />
    <span style="margin-left: 10px;">Department of Agriculture Regional Office 1 City of San Fernando, LA Union</span>
  </div>
`;

  //DA INREC
  const inrecMarkerPosition = [18.04924697180485, 120.55126527267514];
  const inrecPopupContent = `
  <div style="display: flex; align-items: center;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Department_of_Agriculture_of_the_Philippines.svg/768px-Department_of_Agriculture_of_the_Philippines.svg.png"
    alt="Alien Image" width="50" height="50" />
    <span style="margin-left: 10px;">Ilocos Norte Research and Experiment Center (INREC) Batac, Ilocos Norte</span>
  </div>
`;

//DA INRECDING
const inrectdingMarkerPosition = [18.073028398253086, 120.68896202097638];
const inrectdingPopupContent = `
<div style="display: flex; align-items: center;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Department_of_Agriculture_of_the_Philippines.svg/768px-Department_of_Agriculture_of_the_Philippines.svg.png"
  alt="Alien Image" width="50" height="50" />
  <span style="margin-left: 10px;">Ilocos Norte Research and Experiment Center (INREC) Dingras, Ilocos Norte</span>
</div>
`;

//DA IsRec
const isrecMarkerPosition = [17.76084448789502, 120.47312347358731];
const isrecPopupContent = `
<div style="display: flex; align-items: center;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Department_of_Agriculture_of_the_Philippines.svg/768px-Department_of_Agriculture_of_the_Philippines.svg.png"
  alt="Alien Image" width="50" height="50" />
  <span style="margin-left: 10px;">Ilocos Sur Research Center (ISReC) San Juan, Ilocos Sur</span>
</div>
`;

//DA ILIARC
const iliarcMarkerPosition = [16.731590160723737, 120.38811687098169];
const iliarcPopupContent = `
<div style="display: flex; align-items: center;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Department_of_Agriculture_of_the_Philippines.svg/768px-Department_of_Agriculture_of_the_Philippines.svg.png"
  alt="Alien Image" width="50" height="50" />
  <span style="margin-left: 10px;">Ilocos Region Integrated  Agricultural Research Center (ILIARC) Bacnotan, La Union</span>
</div>
`;

//DA PREC
const precMarkerPosition = [15.981393592419208, 120.47023626504657];
const precPopupContent = `
<div style="display: flex; align-items: center;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Department_of_Agriculture_of_the_Philippines.svg/768px-Department_of_Agriculture_of_the_Philippines.svg.png"
  alt="Alien Image" width="50" height="50" />
  <span style="margin-left: 10px;">Pangasinan Research and Experiment Center (PREC) Sta. Barbara, Pangasinan</span>
</div>
`;

//DA PRECsual
const precsualMarkerPosition = [16.066665429315684, 120.09398422884605];
const precsualPopupContent = `
<div style="display: flex; align-items: center;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Department_of_Agriculture_of_the_Philippines.svg/768px-Department_of_Agriculture_of_the_Philippines.svg.png"
  alt="Alien Image" width="50" height="50" />
  <span style="margin-left: 10px;">Pangasinan Research and Experiment Center (PREC) Sual, Pangasinan (Organic Agriculture Center</span>
</div>
`;







  

  return (
    <div>
    <MapContainer
      center={ilocosRegionPosition}
      zoom={8}
      style={{ width: '100vw', height: '100vh' }}
    >
      <LayersControl position="topleft">
      <LayersControl.BaseLayer name="OpenStreetMap" checked>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
</LayersControl.BaseLayer>

  <LayersControl.BaseLayer name="Satellite">
    <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      attribution='Imagery © Esri, i-cubed, USDA FSA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    />
  </LayersControl.BaseLayer>
  <LayersControl.BaseLayer name="Watercolor">
    <TileLayer
      url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      attribution="Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL"
    />
  </LayersControl.BaseLayer>
  <LayersControl.BaseLayer name="Topography">
    <TileLayer
      url="https://stamen-tiles.a.ssl.fastly.net/toposm-color/{z}/{x}/{y}.png"
      attribution="Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL"
    />
  </LayersControl.BaseLayer>
  <LayersControl.BaseLayer name="Terrain">
    <TileLayer
      url="https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg"
      attribution="Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL"
    />
  </LayersControl.BaseLayer>
 
</LayersControl>
      <GeoJSON data={stateData} style={geojsonStyle} onEachFeature={onEachFeature} />
      <Marker position={alienMarkerPosition} icon={alienIcon}>
        <Popup><div dangerouslySetInnerHTML={{ __html: alienPopupContent }} /></Popup>
      </Marker>

      <Marker position={inrecMarkerPosition} icon={alienIcon}>
        <Popup><div dangerouslySetInnerHTML={{ __html: inrecPopupContent }} /></Popup>
      </Marker>

      <Marker position={inrectdingMarkerPosition} icon={alienIcon}>
        <Popup><div dangerouslySetInnerHTML={{ __html: inrectdingPopupContent }} /></Popup>
      </Marker>

      <Marker position={isrecMarkerPosition} icon={alienIcon}>
        <Popup><div dangerouslySetInnerHTML={{ __html: isrecPopupContent }} /></Popup>
      </Marker>

      <Marker position={iliarcMarkerPosition} icon={alienIcon}>
        <Popup><div dangerouslySetInnerHTML={{ __html: iliarcPopupContent }} /></Popup>
      </Marker>

      <Marker position={precMarkerPosition} icon={alienIcon}>
        <Popup><div dangerouslySetInnerHTML={{ __html: precPopupContent }} /></Popup>
      </Marker>

      <Marker position={precsualMarkerPosition} icon={alienIcon}>
        <Popup><div dangerouslySetInnerHTML={{ __html: precsualPopupContent }} /></Popup>
      </Marker>
    </MapContainer>
    <ProvinceInfoOverlay selectedProvince={selectedProvince} />
    </div>
  );
}
