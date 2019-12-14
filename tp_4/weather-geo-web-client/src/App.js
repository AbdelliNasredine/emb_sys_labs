import React from "react";
import MapboxWeatherMap from "./MapboxWeatherMap";
// import GoogleWeatherMap from "./GoogleWeatherMap";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* 
      Google maps component
      <GoogleWeatherMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      /> */}
      <MapboxWeatherMap/>
    </div>
  );
}

export default App;
