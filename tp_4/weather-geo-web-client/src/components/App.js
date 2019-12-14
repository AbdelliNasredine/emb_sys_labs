import React from "react";
import MapboxWeatherMap from "./MapboxWeatherMap";
import Menu from "./Menu";

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Menu/>
      <MapboxWeatherMap/>
    </div>
  );
}

export default App;
