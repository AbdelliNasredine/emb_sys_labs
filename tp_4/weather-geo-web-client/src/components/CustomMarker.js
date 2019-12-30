import React from "react";
import { BaseControl } from "react-map-gl";

export default class CustomMarker extends BaseControl {

  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(event){
    let marker = event.target;
    //marker.classList.add("show");
    marker.classList.toggle("show");
    console.log("clicked!");
  }
  _render() {
    const { longitude, latitude, name } = this.props;

    const [x, y] = this._context.viewport.project([longitude, latitude]);

    const markerStyle = {
      position: "absolute",
      background: "#fff",
      left: x,
      top: y,
      cursor: "pointer"
    };

    const infoStyle ={
      "overflow-y": "hidden",
      height: "0px",
      transition: "all 1s ease-in-out"
    }

    return (
      <div 
        ref={this._containerRef} 
        style={markerStyle}
        onClick={this.onClick}>
        ({name})
        <div style={infoStyle}>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </div>
      </div>
    );
  }
}
