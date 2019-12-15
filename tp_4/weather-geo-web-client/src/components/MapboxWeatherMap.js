import React, { useState, useEffect, Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as weatherData from "../data/test.json";

import "../styles/WeatherMap.css";

/* 
  center of DZ
    -> latitude  : 28.577
    -> longitude : 4.110  
    -> zoom      : 4.6
*/

export default class MapboxWeatherMap extends Component {
  state = {
    viewport: {
      latitude: 28.577,
      longitude: 4.11,
      width: "100vw",
      height: "100vh",
      zoom: 4.6
    },
    stations: weatherData["stations"]
  };
  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/nas-embad/ck474on5i11qq1cpp3r0xo50x?optimize=true"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {this.state.stations.map(st => (
          <Marker
            key={st.willaya}
            latitude={st.position.lat}
            longitude={st.position.lng}
          >
            <img
              className="WeatherMap-marker"
              src="/marker.png"
              alt="Marker Icon"
            />
          </Marker>
        ))}
      </ReactMapGL>
    );
  }
}

