import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as weatherData from "./test.json";

import "../styles/WeatherMap.css";
/* 
  center of DZ
    -> latitude  : 28.577
    -> longitude : 4.110  
    -> zoom      : 4.6
*/

export default function MapboxWeatherMap(props) {
  const [viewport, setViewport] = useState({
    latitude: 28.577,
    longitude: 4.11,
    width: "100vw",
    height: "100vh",
    zoom: 4.6
  });

  const stations = weatherData["stations"];
  console.log(stations);
  return (
    <div className="WeatherMap-container">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/nas-embad/ck4670onk1r6r1ct6ddzyq5c6?optimize=true"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {stations.map(st => (
          <Marker
            key={st.willaya}
            latitude={st.position.lat}
            longitude={st.position.lng}
          >
            <img className="WeatherMap-marker" src="/marker.png" alt="Marker Icon" />
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}
