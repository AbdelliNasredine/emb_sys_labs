import React, { Component } from "react";

import "../styles/WillayaInformation.css";

export default class Willaya extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="WillayaInformation" title={this.props.name}>
        <div className="top">
          <span className="code">{this.props.code}</span>
          <span className="name">{this.props.name}</span>
        </div>
        <div className="rest">
          <li className="item">
            <span>Temp:</span> 32°c
          </li>
          <li className="item">
            <span>Wind:</span> N/A
          </li>
          <li className="item">
            <span>Humidity:</span> 1.2%
          </li>
          <li className="item">
            <span>Time:</span> Sundy 21, 2019
          </li>
        </div>
      </div>
    );
  }
}
