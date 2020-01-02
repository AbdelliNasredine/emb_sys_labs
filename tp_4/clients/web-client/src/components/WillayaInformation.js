import React, { Component } from "react";

import "../styles/WillayaInformation.css";

export default class Willaya extends Component {
  constructor() {
    super();
  }

  onClick = () => {
    this.props.onClickHandler(this.props.code);
  }

  render() {
    return (
      <div className="WillayaInformation" title={this.props.name} onClick={this.onClick}>
        <div className="top">
          <span className="code">{this.props.code}</span>
          <span className="name">{this.props.name}</span>
        </div>
        <div className={this.props.isvisible ? "rest show" : "rest"}>
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
