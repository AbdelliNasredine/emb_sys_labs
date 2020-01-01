import React, { Component } from "react";
import MapboxWeatherMap from "./MapboxWeatherMap";
import Menu from "./Menu";

import "../styles/App.css";

const App = () => (
  <div className="App">
    {/* <Menu /> */}
    <MapboxWeatherMap />
  </div>
);

export default App;