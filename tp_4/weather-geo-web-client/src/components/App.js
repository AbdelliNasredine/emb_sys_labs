import React, { Component } from "react";
import MapboxWeatherMap from "./MapboxWeatherMap";
import Menu from "./Menu";

import "../styles/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <MapboxWeatherMap/>
      </div>
    );
  }
}

