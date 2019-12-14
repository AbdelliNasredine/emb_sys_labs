import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import "../styles/WeatherMap.css"
/* 
  center of DZ
    -> latitude  : 28.577
    -> longitude : 4.110  
    -> zoom      : 4.6
*/

export default function MapboxWeatherMap() {
  const [viewport, setViewport] = useState({
    latitude: 28.577,
    longitude: 4.110,
    width: "100%",
    height: "100%",
    zoom: 4.6
  });

  return (
    <div className="WeatherMap-container">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/nas-embad/ck462buq40ojb1dpp27g0xau0"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {/* Markers and Popup will go here */}
      </ReactMapGL>
    </div>
  );
}
