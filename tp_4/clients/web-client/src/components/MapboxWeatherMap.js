import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import WillayaInformation from "./WillayaInformation";

import cities from "../data/cities.test.json";
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
    cities
  };
  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/nas-embad/ck474on5i11qq1cpp3r0xo50x?optimize=true"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {this.state.cities.map(c => (
          <Marker
            key={c.willaya}
            latitude={c.position.lat}
            longitude={c.position.lng}
          >
            <WillayaInformation 
              code={c.code}
              name={c.willaya}
            />
          </Marker>
        ))}
      </ReactMapGL>
    );
  }
}

