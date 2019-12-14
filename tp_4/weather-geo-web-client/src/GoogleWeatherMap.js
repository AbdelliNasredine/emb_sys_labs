import React from "react";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
    ></GoogleMap>
  );
}

const GoogleWeatherMap = withScriptjs(withGoogleMap(Map));

export default GoogleWeatherMap;
